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

export type UserT = {
  uid: string;
  name: string | null;
  points: number;
  games: number;
};

export type GameT = {
  points: number;
  questions: QuestionT[];
  user: UserT | null; // should be UserT
};

export const init: GameT = {
  points: 0,
  questions: [],
  user: null
};

export const POINTS_PER_QUESTION = 100;
export const SECS_PER_QUESTION = 10;
