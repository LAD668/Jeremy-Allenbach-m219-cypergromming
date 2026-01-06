import React, { useState } from 'react';
import { QuizQuestion, QuizState } from '../../types/models';
import { QuizCard } from '../ui/QuizCard';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface QuizModuleProps {
  questions: QuizQuestion[];
}

export const QuizModule: React.FC<QuizModuleProps> = ({ questions }) => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    results: [],
    isComplete: false,
    score: 0
  });
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentQ = questions[state.currentQuestion];
  const isLastQuestion = state.currentQuestion === questions.length - 1;
  
  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };
  
  const handleCheckAnswer = () => {
    if (selectedAnswer === undefined) return;
    
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    const newResult = {
      questionId: currentQ.id,
      selectedAnswer,
      isCorrect,
      timeSpent: 0
    };
    
    setState(prev => ({
      ...prev,
      results: [...prev.results, newResult],
      score: isCorrect ? prev.score + 1 : prev.score
    }));
    
    setShowFeedback(true);
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      setState(prev => ({ ...prev, isComplete: true }));
    } else {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
      setSelectedAnswer(undefined);
      setShowFeedback(false);
    }
  };
  
  const handleRestart = () => {
    setState({
      currentQuestion: 0,
      results: [],
      isComplete: false,
      score: 0
    });
    setSelectedAnswer(undefined);
    setShowFeedback(false);
  };
  
  if (state.isComplete) {
    const percentage = Math.round((state.score / questions.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="text-center rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-[#1D4ED8]">Quiz abgeschlossen</h2>
          <p className="text-xl mb-2">
            Sie haben <span className="font-bold text-[#1D4ED8]">{state.score}</span> von{' '}
            <span className="font-bold">{questions.length}</span> Fragen richtig beantwortet.
          </p>
          <p className="text-lg mb-6 text-gray-600">
            ({percentage}%)
          </p>
          <p className="text-gray-700 mb-6">
            {percentage >= 80
              ? 'Ausgezeichnete Arbeit! Sie verstehen Online-Sicherheit wirklich gut!'
              : percentage >= 60
              ? 'Gut gemacht! Lernen Sie weiter über Online-Sicherheit.'
              : 'Üben Sie weiter! Wiederholen Sie die Materialien und versuchen Sie es erneut.'}
          </p>
          <Button onClick={handleRestart} variant="primary">
            Erneut versuchen
          </Button>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <p className="text-gray-600">
          Frage {state.currentQuestion + 1} von {questions.length}
        </p>
      </div>
      
      <QuizCard
        question={currentQ.question}
        options={currentQ.options}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
        showFeedback={showFeedback}
        correctAnswer={currentQ.correctAnswer}
        explanation={currentQ.explanation}
        disabled={showFeedback}
      />
      
      <div className="mt-6 flex gap-4 justify-center">
        {!showFeedback ? (
          <Button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === undefined}
            variant="primary"
          >
            Antwort prüfen
          </Button>
        ) : (
          <Button onClick={handleNext} variant="secondary">
            {isLastQuestion ? 'Ergebnisse anzeigen' : 'Nächste Frage'}
          </Button>
        )}
      </div>
    </div>
  );
};
