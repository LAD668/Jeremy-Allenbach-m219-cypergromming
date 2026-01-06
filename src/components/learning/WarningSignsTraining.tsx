import React, { useState } from 'react';
import { WarningSign, WarningSignsTrainingState } from '../../types/models';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';

interface WarningSignsTrainingProps {
  signs: WarningSign[];
}

export const WarningSignsTraining: React.FC<WarningSignsTrainingProps> = ({ signs }) => {
  const [state, setState] = useState<WarningSignsTrainingState>({
    signsShown: [],
    correctIdentifications: 0,
    totalShown: 0
  });
  
  const [currentSign, setCurrentSign] = useState<WarningSign | null>(null);
  const [userAnswer, setUserAnswer] = useState<'yes' | 'no' | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const getRandomSign = (): WarningSign => {
    const availableSigns = signs.filter(s => !state.signsShown.includes(s.id));
    if (availableSigns.length === 0) {
      // Reset if all signs shown
      return signs[Math.floor(Math.random() * signs.length)];
    }
    return availableSigns[Math.floor(Math.random() * availableSigns.length)];
  };
  
  const handleStart = () => {
    const sign = getRandomSign();
    setCurrentSign(sign);
    setUserAnswer(null);
    setShowFeedback(false);
  };
  
  const handleAnswer = (answer: 'yes' | 'no') => {
    if (!currentSign) return;
    
    // All warning signs are actual warning signs, so "yes" is always correct
    const isCorrect = answer === 'yes';
    
    setUserAnswer(answer);
    setShowFeedback(true);
    
    setState(prev => ({
      signsShown: [...prev.signsShown, currentSign.id],
      correctIdentifications: isCorrect
        ? prev.correctIdentifications + 1
        : prev.correctIdentifications,
      totalShown: prev.totalShown + 1
    }));
    
    // Move to next sign after delay
    setTimeout(() => {
      const nextSign = getRandomSign();
      setCurrentSign(nextSign);
      setUserAnswer(null);
      setShowFeedback(false);
    }, 2500);
  };
  
  const getSeverityColor = (severity: WarningSign['severity']) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'high':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };
  
  if (!currentSign) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="text-center rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-[#1D4ED8]">Warnzeichen-Training</h2>
          <p className="text-gray-700 mb-6">
            Lernen Sie, Warnzeichen von Cyber-Grooming zu identifizieren. Ihnen werden verschiedene Verhaltensweisen gezeigt
            und Sie werden gefragt, ob es sich um Warnzeichen handelt.
          </p>
          <Button onClick={handleStart} variant="primary">
            Training starten
          </Button>
        </Card>
      </div>
    );
  }
  
  const accuracy = state.totalShown > 0
    ? Math.round((state.correctIdentifications / state.totalShown) * 100)
    : 0;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-between items-center">
        <div>
            <p className="text-gray-600">
              Erkannte Warnzeichen: {state.correctIdentifications} / {state.totalShown}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">
              Genauigkeit: <span className="font-bold text-[#1D4ED8]">{accuracy}%</span>
            </p>
          </div>
      </div>
      
      <Card className="rounded-3xl">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${getSeverityColor(currentSign.severity)}`}>
          {currentSign.severity.toUpperCase()}
        </div>
        
        <h2 className="text-2xl font-bold mb-4">{currentSign.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{currentSign.description}</p>
        
        <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-4">
              Ist dies ein Warnzeichen von Cyber-Grooming?
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={() => handleAnswer('yes')}
                disabled={showFeedback}
                variant={userAnswer === 'yes' ? 'primary' : 'outline'}
                fullWidth
              >
                Ja, dies ist ein Warnzeichen
              </Button>
              <Button
                onClick={() => handleAnswer('no')}
                disabled={showFeedback}
                variant={userAnswer === 'no' ? 'danger' : 'outline'}
                fullWidth
              >
                Nein, dies ist normal
              </Button>
            </div>
        </div>
        
        {showFeedback && (
          <Alert
            variant={userAnswer === 'yes' ? 'success' : 'danger'}
          >
            <div>
              <p className="font-semibold mb-2">
                {userAnswer === 'yes' ? 'Richtig!' : 'Nicht ganz richtig.'}
              </p>
              <p>
                {userAnswer === 'yes'
                  ? 'Dies ist tatsächlich ein Warnzeichen. Seien Sie immer vorsichtig, wenn Sie dieses Verhalten online begegnen, und informieren Sie eine vertrauenswürdige Person.'
                  : 'Tatsächlich ist dies EIN Warnzeichen. Es ist wichtig, diese Verhaltensweisen zu erkennen, um online sicher zu bleiben.'}
              </p>
            </div>
          </Alert>
        )}
      </Card>
    </div>
  );
};
