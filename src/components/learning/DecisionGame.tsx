import React, { useState } from 'react';
import { DecisionScenario, DecisionGameState } from '../../types/models';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';

interface DecisionGameProps {
  scenarios: DecisionScenario[];
}

export const DecisionGame: React.FC<DecisionGameProps> = ({ scenarios }) => {
  const [state, setState] = useState<DecisionGameState>({
    currentScenario: 0,
    score: 0,
    level: 1,
    completedScenarios: []
  });
  
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentScenario = scenarios[state.currentScenario];
  
  const handleChoiceSelect = (choiceId: string) => {
    if (showFeedback) return;
    
    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;
    
    setSelectedChoice(choiceId);
    setState(prev => ({
      ...prev,
      score: prev.score + choice.points,
      completedScenarios: [...prev.completedScenarios, currentScenario.id]
    }));
    setShowFeedback(true);
    
    // Move to next scenario after delay
    setTimeout(() => {
      if (state.currentScenario < scenarios.length - 1) {
        setState(prev => ({
          ...prev,
          currentScenario: prev.currentScenario + 1,
          level: prev.level + 1
        }));
        setSelectedChoice(null);
        setShowFeedback(false);
      }
    }, 3000);
  };
  
  const handleRestart = () => {
    setState({
      currentScenario: 0,
      score: 0,
      level: 1,
      completedScenarios: []
    });
    setSelectedChoice(null);
    setShowFeedback(false);
  };
  
  if (!currentScenario) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="text-center rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-[#1D4ED8]">Level abgeschlossen</h2>
          <p className="text-xl mb-2">
            Ihre Endpunktzahl: <span className="font-bold text-[#1D4ED8]">{state.score}</span> Punkte
          </p>
          <p className="text-gray-700 mb-6">
            {state.score >= 30
              ? 'Ausgezeichnet! Sie haben alle richtigen Entscheidungen getroffen!'
              : state.score >= 20
              ? 'Gut gemacht! Sie haben groesstenteils sichere Entscheidungen getroffen.'
              : 'Lernen Sie weiter! Wiederholen Sie die Sicherheitstipps und versuchen Sie es erneut.'}
          </p>
          <Button onClick={handleRestart} variant="primary">
            Erneut spielen
          </Button>
        </Card>
      </div>
    );
  }
  
  const selectedChoiceData = selectedChoice
    ? currentScenario.choices.find(c => c.id === selectedChoice)
    : null;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600">Level {state.level}</p>
          <p className="text-sm text-gray-500">
            Szenario {state.currentScenario + 1} von {scenarios.length}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Punkte: <span className="font-bold text-[#1D4ED8]">{state.score}</span></p>
        </div>
      </div>
      
      <Card className="rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">{currentScenario.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{currentScenario.situation}</p>
        
        <p className="font-semibold text-gray-800 mb-4">Was würden Sie tun?</p>
        
        <div className="space-y-3">
          {currentScenario.choices.map((choice) => {
            const isSelected = selectedChoice === choice.id;
            const isDisabled = showFeedback;
            
            let buttonStyle = 'w-full text-left p-4 rounded-lg border-2 transition-all';
            
            if (isDisabled) {
              if (choice.isCorrect) {
                buttonStyle += ' bg-green-100 border-green-500 text-green-800';
              } else if (isSelected) {
                buttonStyle += ' bg-red-100 border-red-500 text-red-800';
              } else {
                buttonStyle += ' bg-gray-50 border-gray-200 text-gray-400';
              }
            } else {
              buttonStyle += isSelected
                ? ' bg-[#1D4ED8] text-white border-[#1D4ED8]'
                : ' bg-white text-gray-700 border-gray-300 hover:border-[#1D4ED8] hover:bg-blue-50';
            }
            
            return (
              <button
                key={choice.id}
                onClick={() => handleChoiceSelect(choice.id)}
                disabled={isDisabled}
                className={buttonStyle}
              >
                {choice.text}
              </button>
            );
          })}
        </div>
        
        {showFeedback && selectedChoiceData && (
          <Alert
            variant={selectedChoiceData.isCorrect ? 'success' : 'warning'}
            className="mt-4"
          >
            <div>
              <p className="font-semibold mb-2">
                {selectedChoiceData.points > 0 ? `+${selectedChoiceData.points} points` : `${selectedChoiceData.points} points`}
              </p>
              <p>{selectedChoiceData.feedback}</p>
            </div>
          </Alert>
        )}
      </Card>
    </div>
  );
};
