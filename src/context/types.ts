import { User } from "firebase/auth";

export interface QuestionT {
  question: string;
  answer: string;
  options: string[];
  type: "text" | "audio" | "image";
  category: string;
  episode: {
    link: string;
    name: string;
  };
  hostAnswers: {
    answer: string;
    host: string;
  }[];
}

export type GameModeT = "classic" | "quick";

export type GameT = {
  points: number;
  questions: QuestionT[];
  user: User | null;
};

export const init: GameT = {
  points: 0,
  questions: [],
  user: null
};

export const POINTS_PER_QUESTION = 100;
export const SECS_PER_QUESTION = 10;
