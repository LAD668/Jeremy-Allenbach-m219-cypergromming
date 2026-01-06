// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizState {
  currentQuestion: number;
  results: QuizResult[];
  isComplete: boolean;
  score: number;
}

// Chat Simulator Types
export interface ChatMessage {
  id: string;
  sender: 'user' | 'other';
  text: string;
  timestamp: Date;
  isWarning?: boolean;
  warningType?: 'secrecy' | 'personal-info' | 'meeting' | 'photos' | 'gifts';
}

export interface ChatResponse {
  id: string;
  messageId: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface ChatScenario {
  id: string;
  title: string;
  description: string;
  messages: ChatMessage[];
  responses: ChatResponse[];
}

// Decision Game Types
export interface DecisionChoice {
  id: string;
  text: string;
  points: number;
  feedback: string;
  isCorrect: boolean;
}

export interface DecisionScenario {
  id: string;
  title: string;
  situation: string;
  choices: DecisionChoice[];
}

export interface DecisionGameState {
  currentScenario: number;
  score: number;
  level: number;
  completedScenarios: string[];
}

// Warning Signs Training Types
export interface WarningSign {
  id: string;
  title: string;
  description: string;
  category: 'communication' | 'behavior' | 'requests' | 'isolation';
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface WarningSignsTrainingState {
  signsShown: string[];
  correctIdentifications: number;
  totalShown: number;
}

// General Types
export interface LearningModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  component: string;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}
