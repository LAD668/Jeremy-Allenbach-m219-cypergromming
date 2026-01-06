import React from 'react';
import { Card } from './Card';

interface QuizCardProps {
  question: string;
  options: string[];
  selectedAnswer?: number;
  onSelect: (index: number) => void;
  showFeedback?: boolean;
  correctAnswer?: number;
  explanation?: string;
  disabled?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  showFeedback = false,
  correctAnswer,
  explanation,
  disabled = false
}) => {
  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index
        ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
        : 'bg-white text-gray-700 border-gray-300 hover:border-[#1D4ED8] hover:bg-blue-50';
    }
    
    if (index === correctAnswer) {
      return 'bg-green-100 text-green-800 border-green-500';
    }
    if (index === selectedAnswer && index !== correctAnswer) {
      return 'bg-red-100 text-red-800 border-red-500';
    }
    return 'bg-gray-50 text-gray-500 border-gray-200';
  };
  
  return (
    <Card className="rounded-3xl">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">{question}</h3>
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !disabled && onSelect(index)}
            disabled={disabled}
            className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            } ${getOptionStyle(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && explanation && (
        <div className={`mt-6 p-5 rounded-2xl ${
          selectedAnswer === correctAnswer
            ? 'bg-green-50 border-2 border-green-200'
            : 'bg-red-50 border-2 border-red-200'
        }`}>
          <p className={`font-semibold mb-2 text-lg ${
            selectedAnswer === correctAnswer ? 'text-green-800' : 'text-red-800'
          }`}>
            {selectedAnswer === correctAnswer ? 'Richtig!' : 'Nicht ganz richtig.'}
          </p>
          <p className="text-gray-700 leading-relaxed">{explanation}</p>
        </div>
      )}
    </Card>
  );
};
