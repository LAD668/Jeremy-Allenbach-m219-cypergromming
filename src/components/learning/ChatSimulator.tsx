import React, { useState, useRef, useEffect } from 'react';
import { ChatScenario } from '../../types/models';
import { ChatBubble } from '../ui/ChatBubble';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';
import { scenarioLibrary, resistanceTactics, type Persona, type Strategy, type Phase, type MessageTemplate } from '../../data/chatScenarios';

interface ChatSimulatorProps {
  scenario: ChatScenario;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: Date;
  warningSigns?: string[];
}

interface SessionProfile {
  persona: Persona;
  strategy: Strategy;
  escalationSpeed: 'sehr langsam' | 'mittel' | 'schnell';
}

// Map old profile format to new format
function mapPersonalityToPersona(personalityType: string): Persona {
  if (personalityType.includes('charmant')) return 'charmant';
  if (personalityType.includes('verletzlich') || personalityType.includes('bemitleidenswert')) return 'verletzlich';
  if (personalityType.includes('cool') || personalityType.includes('locker')) return 'cool';
  if (personalityType.includes('beschützend') || personalityType.includes('heroisch')) return 'beschützend';
  if (personalityType.includes('kontrollierend') || personalityType.includes('eifersüchtig')) return 'kontrollierend';
  return 'charmant'; // default
}

function mapStrategyToLibrary(strategy: string): Strategy {
  if (strategy.includes('Komplimente') || strategy.includes('Nähe') || strategy.includes('Vertrauensaufbau') || strategy.includes('Bindung')) return 'komplimente';
  if (strategy.includes('Geheimnisse') || strategy.includes('Exklusivität')) return 'geheimnisse';
  if (strategy.includes('Schuld') || strategy.includes('Druck')) return 'schuld';
  if (strategy.includes('Exklusivität')) return 'exklusivität';
  if (strategy.includes('Isolation') || strategy.includes('Opferrolle')) return 'isolation';
  return 'komplimente'; // default
}

function generateSessionProfile(): SessionProfile {
  const personas: Persona[] = ['charmant', 'verletzlich', 'cool', 'beschützend', 'kontrollierend'];
  const strategies: Strategy[] = ['komplimente', 'geheimnisse', 'schuld', 'exklusivität', 'isolation'];
  const speeds: ('sehr langsam' | 'mittel' | 'schnell')[] = ['sehr langsam', 'mittel', 'schnell'];
  
  return {
    persona: personas[Math.floor(Math.random() * personas.length)],
    strategy: strategies[Math.floor(Math.random() * strategies.length)],
    escalationSpeed: speeds[Math.floor(Math.random() * speeds.length)]
  };
}

function getCurrentPhase(messageCount: number, escalationSpeed: string): Phase {
  const thresholds = {
    'sehr langsam': [3, 8, 15, 25],
    'mittel': [2, 5, 10, 18],
    'schnell': [1, 3, 6, 12]
  };
  
  const phaseThresholds = thresholds[escalationSpeed as keyof typeof thresholds] || thresholds.mittel;
  
  if (messageCount < phaseThresholds[0]) return 'Kontakt';
  if (messageCount < phaseThresholds[1]) return 'Vertrauen';
  if (messageCount < phaseThresholds[2]) return 'Abhängigkeit';
  return 'Grenzverschiebung';
}

function detectUserBehavior(userMessage: string, previousMessages: ChatMessage[]): 'open' | 'distant' {
  const lowerText = userMessage.toLowerCase();
  const openIndicators = ['ja', 'okay', 'klar', 'gerne', 'sicher', 'klingt gut', 'mag ich'];
  const distantIndicators = ['nein', 'nicht', 'keine', 'stop', 'lass mich', 'will nicht', 'kein interesse'];
  
  if (openIndicators.some(ind => lowerText.includes(ind))) return 'open';
  if (distantIndicators.some(ind => lowerText.includes(ind))) return 'distant';
  
  // Check message length - very short might indicate distance
  if (userMessage.length < 5) return 'distant';
  if (userMessage.length > 20) return 'open';
  
  // Default based on recent behavior
  const recentUserMessages = previousMessages
    .filter(m => m.sender === 'user')
    .slice(-3)
    .map(m => m.text.toLowerCase());
  
  const hasDistant = recentUserMessages.some(msg => distantIndicators.some(ind => msg.includes(ind)));
  return hasDistant ? 'distant' : 'open';
}

function selectMessageTemplate(
  persona: Persona,
  strategy: Strategy,
  phase: Phase,
  usedTemplates: Set<string>,
  userBehavior: 'open' | 'distant'
): MessageTemplate {
  const templates = scenarioLibrary[persona]?.[strategy]?.[phase] || [];
  
  if (templates.length === 0) {
    // Fallback
    return { text: 'Hey! Wie geht es dir?', warningSigns: [] };
  }
  
  // If user is distant/resistant, use resistance tactics
  if (userBehavior === 'distant' && usedTemplates.size > 2) {
    const resistanceKeys = Object.keys(resistanceTactics);
    const randomTactic = resistanceKeys[Math.floor(Math.random() * resistanceKeys.length)];
    const tacticTemplates = resistanceTactics[randomTactic];
    if (tacticTemplates.length > 0) {
      return tacticTemplates[Math.floor(Math.random() * tacticTemplates.length)];
    }
  }
  
  // Filter out recently used templates
  const availableTemplates = templates.filter(t => !usedTemplates.has(t.text));
  const pool = availableTemplates.length > 0 ? availableTemplates : templates;
  
  // Random selection from available pool
  return pool[Math.floor(Math.random() * pool.length)];
}

function getWarningSignLabels(warningSigns: string[]): string[] {
  const labelMap: { [key: string]: string } = {
    'persönliche-fragen': 'Persönliche Fragen',
    'geheimnisse': 'Geheimnisse',
    'druck': 'Druck/Dringlichkeit',
    'schuld': 'Schuldumkehr',
    'isolation': 'Isolation',
    'exklusivität': 'Exklusivität',
    'bild-anfrage': 'Bild-Anfrage'
  };
  
  return warningSigns.map(sign => labelMap[sign] || sign);
}

export const ChatSimulator: React.FC<ChatSimulatorProps> = ({
  scenario
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [sessionProfile, setSessionProfile] = useState<SessionProfile | null>(null);
  const [usedTemplates, setUsedTemplates] = useState<Set<string>>(new Set());
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const startChat = () => {
    // Generate new session profile
    const newProfile = generateSessionProfile();
    setSessionProfile(newProfile);
    setUsedTemplates(new Set());
    
    // Show "Neue Simulation gestartet" message
    const startMessage: ChatMessage = {
      id: 'start-1',
      sender: 'system',
      text: 'Neue Simulation gestartet',
      timestamp: new Date()
    };
    
    // Get initial message from template
    const initialTemplate = selectMessageTemplate(
      newProfile.persona,
      newProfile.strategy,
      'Kontakt',
      new Set(),
      'open'
    );
    
    const initialMessage: ChatMessage = {
      id: 'init-1',
      sender: 'ai',
      text: initialTemplate.text,
      timestamp: new Date(),
      warningSigns: initialTemplate.warningSigns
    };
    
    setUsedTemplates(prev => new Set(prev).add(initialTemplate.text));
    setMessages([startMessage, initialMessage]);
    setIsStarted(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading || !sessionProfile) return;

    const userMessageText = userInput.trim();
    
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userMessageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // Detect user behavior
      const userBehavior = detectUserBehavior(userMessageText, messages);
      
      // Calculate current phase
      const messageCount = messages.filter(m => m.sender !== 'system').length;
      const currentPhase = getCurrentPhase(messageCount, sessionProfile.escalationSpeed);
      
      // Select message template
      const selectedTemplate = selectMessageTemplate(
        sessionProfile.persona,
        sessionProfile.strategy,
        currentPhase,
        usedTemplates,
        userBehavior
      );
      
      // Track used template
      setUsedTemplates(prev => new Set(prev).add(selectedTemplate.text));
      
      // Optional: Paraphrase via GPT (if enabled)
      let finalText = selectedTemplate.text;
      
      try {
        const paraphraseResponse = await fetch('/.netlify/functions/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            template: selectedTemplate.text,
            persona: sessionProfile.persona,
            strategy: sessionProfile.strategy,
            phase: currentPhase,
            paraphraseOnly: true
          })
        });
        
        if (paraphraseResponse.ok) {
          const data = await paraphraseResponse.json();
          if (data.message && data.message !== selectedTemplate.text) {
            finalText = data.message;
          }
        }
      } catch (paraphraseError) {
        // If paraphrasing fails, use original template
        console.log('Paraphrasing failed, using original template');
      }
      
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: finalText,
        timestamp: new Date(),
        warningSigns: selectedTemplate.warningSigns
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      // Fallback to a simple template
      const fallbackTemplate: MessageTemplate = {
        text: 'Interessant! Erzähl mir mehr über dich.',
        warningSigns: ['persönliche-fragen']
      };
      
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: fallbackTemplate.text,
        timestamp: new Date(),
        warningSigns: fallbackTemplate.warningSigns
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
            Neue Simulation starten
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
              setSessionProfile(null);
              setUsedTemplates(new Set());
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
                <div>
                  <ChatBubble
                    message={msg.text}
                    sender={msg.sender === 'user' ? 'user' : 'other'}
                    isWarning={!!(msg.warningSigns && msg.warningSigns.length > 0)}
                    timestamp={msg.timestamp}
                  />
                  {msg.sender === 'ai' && msg.warningSigns && msg.warningSigns.length > 0 && (
                    <div className="mt-2 ml-2">
                      <Card className="bg-yellow-50 border-yellow-200 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-yellow-800 mb-1">Erkannte Warnzeichen:</p>
                        <div className="flex flex-wrap gap-1">
                          {getWarningSignLabels(msg.warningSigns).map((label, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
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
