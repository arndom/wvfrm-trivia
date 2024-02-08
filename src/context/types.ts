type State = "NEW" | "PLAYING" | "END";

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

export type Game = {
  state: State;
  points: number;
  questions: QuestionT[];
};

export const init: Game = {
  state: "NEW",
  points: 0,
  questions: []
};

export const POINTS_PER_QUESTION = 100;
