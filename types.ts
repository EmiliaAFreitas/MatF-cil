
export type Topic = 'funcao-afim' | 'trigonometria' | 'equacao-2-grau' | 'probabilidade' | 'estatistica' | 'equacao-1-grau' | 'poligonos' | 'formas-proporcionais';

export interface MathProblem {
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  type: 'multiple-choice' | 'numeric' | 'binary-relation';
  visualHint?: string;
}

export interface UserStats {
  xp: number;
  streak: number;
  rank: string;
  completedTopics: string[];
}

export interface GameState {
  currentProblem: MathProblem | null;
  score: number;
  isGameOver: boolean;
  attempts: number;
}
