import React, { useState, useRef, useEffect } from 'react';
import { ChatScenario } from '../../types/models';
import { ChatBubble } from '../ui/ChatBubble';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';

interface ChatSimulatorProps {
  scenario: ChatScenario;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: Date;
  warningType?: 'personal-info' | 'secrecy' | 'meeting' | 'photos' | 'gifts' | 'emotional';
}

const SYSTEM_PROMPT = `Du bist Teil einer pädagogischen Präventionsplattform gegen Cyber-Grooming.

Deine Rolle ist es, eine Person zu simulieren, die langsam versucht, das Vertrauen eines Kindes oder Jugendlichen zu gewinnen.

Du musst typische Grooming-Muster demonstrieren wie:
- übermaessig freundlich sein
- persönliche Fragen stellen
- Komplimente machen
- emotionale Abhängigkeit aufbauen
- Geheimhaltung vorschlagen

STRENGE REGELN:
- Keine sexuellen Inhalte.
- Keine explizite Sprache.
- Keine illegalen Anweisungen.
- Alles muss für einen pädagogischen Präventionskontext geeignet sein.

Dein Ziel ist es, Nutzern zu helfen, Warnzeichen zu erkennen. Antworte kurz (max. 2 Sätze) und natürlich.`;

const detectWarningSigns = (text: string): ChatMessage['warningType'] | null => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('geheim') || lowerText.includes('niemand') || lowerText.includes('nicht erzählen')) {
    return 'secrecy';
  }
  if (lowerText.includes('adresse') || lowerText.includes('wohnst') || lowerText.includes('schule') || lowerText.includes('telefon')) {
    return 'personal-info';
  }
  if (lowerText.includes('treffen') || lowerText.includes('sehen') || lowerText.includes('persönlich')) {
    return 'meeting';
  }
  if (lowerText.includes('foto') || lowerText.includes('bild') || lowerText.includes('photo')) {
    return 'photos';
  }
  if (lowerText.includes('geschenk') || lowerText.includes('geld') || lowerText.includes('kostenlos')) {
    return 'gifts';
  }
  if (lowerText.includes('versteh') || lowerText.includes('einzige') || lowerText.includes('niemand versteht')) {
    return 'emotional';
  }
  
  return null;
};

const getWarningHint = (warningType: ChatMessage['warningType']): string => {
  switch (warningType) {
    case 'secrecy':
      return 'Hinweis: Hier wird Geheimhaltung vorgeschlagen. Echte Freunde bitten nicht um Geheimnisse vor Eltern.';
    case 'personal-info':
      return 'Hinweis: Hier wird nach persönlichen Informationen gefragt. Teilen Sie niemals Adresse, Schule oder Telefonnummer.';
    case 'meeting':
      return 'Hinweis: Vorschlag für ein persönliches Treffen. Treffen Sie niemals Online-Bekanntschaften allein.';
    case 'photos':
      return 'Hinweis: Anfrage nach Fotos. Senden Sie niemals Fotos an Online-Fremde.';
    case 'gifts':
      return 'Hinweis: Angebot von Geschenken. Groomer nutzen Geschenke zur Manipulation.';
    case 'emotional':
      return 'Hinweis: Versuch, emotionale Abhängigkeit zu schaffen. Vorsicht bei "ich verstehe dich als Einziger".';
    default:
      return '';
  }
};

export const ChatSimulator: React.FC<ChatSimulatorProps> = ({
  scenario
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const startChat = () => {
    const initialMessage: ChatMessage = {
      id: 'init-1',
      sender: 'ai',
      text: scenario.messages[0]?.text || 'Hey! Du scheinst echt cool zu sein. Wie alt bist du?',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
    setIsStarted(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userInput.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || ''}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: userInput.trim() }
          ],
          temperature: 0.8,
          max_tokens: 100
        })
      });

      if (!response.ok) {
        throw new Error('API-Fehler');
      }

      const data = await response.json();
      const aiText = data.choices[0]?.message?.content || 'Ich verstehe.';

      const warningType = detectWarningSigns(aiText);
      
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        timestamp: new Date(),
        warningType: warningType || undefined
      };

      setMessages(prev => [...prev, aiMessage]);

      // Show warning hint if detected
      if (warningType) {
        setTimeout(() => {
          const hintMessage: ChatMessage = {
            id: `hint-${Date.now()}`,
            sender: 'system',
            text: getWarningHint(warningType),
            timestamp: new Date()
          };
          setMessages(prev => [...prev, hintMessage]);
        }, 500);
      }
    } catch (error) {
      // Fallback to predefined responses if API fails
      const fallbackResponses = [
        'Interessant! Erzähl mir mehr über dich.',
        'Du scheinst echt cool zu sein. Woher kommst du denn?',
        'Ich verstehe dich so gut. Wir sollten Freunde bleiben, okay?'
      ];
      
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmergency = () => {
    setShowEmergency(true);
    setMessages(prev => [...prev, {
      id: `emergency-${Date.now()}`,
      sender: 'system',
      text: 'Chat beendet. Wenn Sie Hilfe benötigen, besuchen Sie unsere Hilfe-Seite.',
      timestamp: new Date()
    }]);
  };

  if (!isStarted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">{scenario.title}</h2>
          <p className="text-gray-700 mb-6">{scenario.description}</p>
          
          <Alert variant="warning" className="mb-6">
            <div>
              <p className="font-semibold mb-2">Wichtiger Hinweis</p>
              <p className="text-sm">Dies ist eine Simulation. Keine echten Personen. Diese Simulation dient nur zu Bildungszwecken, um Warnzeichen zu erkennen.</p>
            </div>
          </Alert>
          
          <Button onClick={startChat} variant="primary" className="w-full">
            Szenario starten
          </Button>
        </Card>
      </div>
    );
  }

  if (showEmergency) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#EF4444]">Chat beendet</h2>
          <p className="text-gray-700 mb-6">
            Sie haben den Chat beendet. Wenn Sie Hilfe benötigen, finden Sie Unterstützung auf unserer Hilfe-Seite.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/get-help" className="inline-block">
              <Button variant="danger">Hilfe bekommen</Button>
            </a>
            <Button onClick={() => {
              setShowEmergency(false);
              setIsStarted(false);
              setMessages([]);
            }} variant="outline">
              Neu starten
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="rounded-3xl p-0 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)', maxHeight: '800px' }}>
        {/* Header */}
        <div className="bg-[#F5F1EB] px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A]">{scenario.title}</h2>
              <p className="text-sm text-[#6B6B6B]">Simulation - Keine echten Personen</p>
            </div>
            <Button 
              onClick={handleEmergency}
              variant="outline"
              size="small"
              className="text-xs px-4 py-2 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
            >
              Chat abbrechen
            </Button>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FAF8F5] space-y-4">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.sender === 'system' ? (
                <Alert 
                  variant={msg.text.includes('Hinweis') ? 'warning' : 'info'}
                  className="my-4"
                >
                  <p className="text-sm">{msg.text}</p>
                </Alert>
              ) : (
                <ChatBubble
                  message={msg.text}
                  sender={msg.sender === 'user' ? 'user' : 'other'}
                  isWarning={!!msg.warningType}
                  timestamp={msg.timestamp}
                />
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-3xl px-5 py-4">
                <span className="text-gray-500 text-sm">schreibt…</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Nachricht eingeben..."
              disabled={isLoading}
              className="flex-1 px-5 py-3 rounded-full border-2 border-gray-300 focus:border-[#1A1A1A] focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <Button
              onClick={sendMessage}
              disabled={!userInput.trim() || isLoading}
              variant="primary"
              className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-6 rounded-full"
            >
              Senden
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
