import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { QuizModule } from '../components/learning/QuizModule';
import { ChatSimulator } from '../components/learning/ChatSimulator';
import { DecisionGame } from '../components/learning/DecisionGame';
import { WarningSignsTraining } from '../components/learning/WarningSignsTraining';
import { quizQuestions } from '../data/quizData';
import { chatScenarios } from '../data/chatData';
import { decisionScenarios } from '../data/decisionData';
import { warningSigns } from '../data/warningSignsData';
import { Button } from '../components/ui/Button';

type ModuleType = 'menu' | 'quiz' | 'chat' | 'decision' | 'warning-signs';

export const LearningArea: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('menu');

  const modules = [
    { 
      id: 'quiz', 
      title: 'Wissens-Quiz', 
      description: 'Testen Sie Ihr Verständnis von Cyber-Grooming mit Multiple-Choice-Fragen und erhalten Sie sofortiges Feedback zu jeder Antwort.', 
      gradient: 'from-[#1D4ED8] to-[#2563eb]',
      icon: 'Q'
    },
    { 
      id: 'chat', 
      title: 'Chat-Simulator', 
      description: 'Üben Sie das Erkennen von Warnzeichen in realistischen Chat-Szenarien. Wählen Sie Ihre Antworten und sehen Sie die Konsequenzen.', 
      gradient: 'from-[#2DD4BF] to-[#14b8a6]',
      icon: 'C'
    },
    { 
      id: 'decision', 
      title: 'Entscheidungs-Spiel', 
      description: 'Treffen Sie Entscheidungen in verschiedenen Online-Situationen und lernen Sie aus den Ergebnissen. Punkte für sichere Entscheidungen.', 
      gradient: 'from-yellow-400 to-[#FACC15]',
      icon: 'E'
    },
    { 
      id: 'warning-signs', 
      title: 'Warnzeichen-Training', 
      description: 'Lernen Sie, Warnzeichen von Cyber-Grooming zu identifizieren. Klassifizieren Sie Verhaltensweisen und verbessern Sie Ihre Genauigkeit.', 
      gradient: 'from-[#EF4444] to-[#dc2626]',
      icon: 'W'
    }
  ];

  const handleBackToMenu = () => {
    setActiveModule('menu');
  };

  if (activeModule === 'quiz') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToMenu}
            className="mb-6 text-[#1D4ED8] hover:underline flex items-center gap-2 font-semibold"
          >
            ← Zurück zur Lernumgebung
          </button>
          <QuizModule questions={quizQuestions} />
        </div>
      </PageLayout>
    );
  }

  if (activeModule === 'chat') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToMenu}
            className="mb-6 text-[#1D4ED8] hover:underline flex items-center gap-2 font-semibold"
          >
            ← Zurück zur Lernumgebung
          </button>
          <ChatSimulator scenario={chatScenarios[0]} />
        </div>
      </PageLayout>
    );
  }

  if (activeModule === 'decision') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToMenu}
            className="mb-6 text-[#1D4ED8] hover:underline flex items-center gap-2 font-semibold"
          >
            ← Zurück zur Lernumgebung
          </button>
          <DecisionGame scenarios={decisionScenarios} />
        </div>
      </PageLayout>
    );
  }

  if (activeModule === 'warning-signs') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackToMenu}
            className="mb-6 text-[#1D4ED8] hover:underline flex items-center gap-2 font-semibold"
          >
            ← Zurück zur Lernumgebung
          </button>
          <WarningSignsTraining signs={warningSigns} />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1D4ED8] via-[#2563eb] to-[#1e40af] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Interaktive Lernumgebung
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Lernen Sie durch interaktive Aktivitäten und Spiele, wie Sie Cyber-Grooming erkennen und verhindern können.
          </p>
        </div>
      </section>

      {/* Module Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Card
                key={module.id}
                hover
                onClick={() => setActiveModule(module.id as ModuleType)}
                className="overflow-hidden p-0 cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-64 bg-gradient-to-br ${module.gradient} flex items-center justify-center`}>
                  <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">{module.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{module.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                  <Button 
                    variant="primary" 
                    size="medium" 
                    fullWidth
                    className="text-lg py-3"
                  >
                    Modul starten
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Wie die Lernumgebung funktioniert
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Jedes Modul ist interaktiv gestaltet und bietet sofortiges Feedback. Sie können die Module in beliebiger Reihenfolge durcharbeiten
              und jederzeit zu einem Modul zurückkehren, um Ihr Wissen zu vertiefen.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
