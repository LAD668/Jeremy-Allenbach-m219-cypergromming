// @ts-ignore - process is available in Netlify Functions runtime
declare const process: { env: { OPENAI_API_KEY?: string } };

const PARAPHRASE_PROMPT = `Du bist ein Paraphrasierungs-Assistent für eine pädagogische Präventionsplattform.

Deine Aufgabe:
Paraphrasiere die gegebene Nachricht in natürlicher, jugendlicher Sprache, BEHALTE aber die exakte Bedeutung und alle Warnzeichen bei.

Regeln:
- Ändere nur die Formulierung, NICHT die Bedeutung
- Behalte alle Manipulationsmuster (Geheimnisse, Druck, Isolation, etc.)
- Verwende natürliche, jugendliche Sprache
- Keine expliziten sexuellen Inhalte
- Keine detaillierten Beschreibungen
- Sprache bleibt jugendfrei
- Maximal 2 Sätze
- Sei variabel und natürlich, aber inhaltlich identisch`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SessionProfile {
  personalityType: string;
  manipulationStrategy: string;
  escalationStyle: string;
  backgroundSeed: string;
}

interface RequestBody {
  messages?: ChatMessage[];
  sessionProfile?: SessionProfile;
  currentPhase?: string;
  template?: string;
  persona?: string;
  strategy?: string;
  phase?: string;
  paraphraseOnly?: boolean;
}

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

export const handler = async (event: NetlifyEvent) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Method not allowed' })
      };
  }

  try {
    // Parse request body
    const body: RequestBody = JSON.parse(event.body || '{}');
    const { messages, template, paraphraseOnly, persona, strategy, phase } = body;

    // Get API key from environment
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set');
        return {
          statusCode: 500,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({ error: 'Server configuration error' })
        };
    }

    // PARAPHRASE MODE: Only paraphrase the template
    if (paraphraseOnly && template) {
      const paraphrasePrompt = `${PARAPHRASE_PROMPT}

Original-Nachricht zum Paraphrasieren:
"${template}"

Paraphrasiere diese Nachricht jetzt. Behalte die exakte Bedeutung und alle Warnzeichen bei, aber formuliere sie natürlich um.`;

      const paraphraseResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: paraphrasePrompt }
          ],
          temperature: 0.9,
          max_tokens: 100
        })
      });

      if (!paraphraseResponse.ok) {
        const errorData = await paraphraseResponse.text();
        console.error('OpenAI API error:', paraphraseResponse.status, errorData);
        // Return original template if paraphrasing fails
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            message: template
          })
        };
      }

      const data = await paraphraseResponse.json();
      const paraphrasedText = data.choices[0]?.message?.content || template;

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({
          message: paraphrasedText
        })
      };
    }

    // LEGACY MODE: Full conversation (kept for backwards compatibility, but not recommended)
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return {
          statusCode: 400,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({ error: 'Messages array is required for conversation mode' })
        };
    }

    // This mode is deprecated - return error
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          error: 'This endpoint now only supports paraphrase mode. Use paraphraseOnly: true with template.'
        })
      };
  } catch (error) {
    console.error('Chat function error:', error);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          error: 'Internal server error',
          message: error instanceof Error ? error.message : 'Unknown error'
        })
      };
  }
};
