import { QuestionT } from "@/context/types";

function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
export function randomizeQuestions(data: QuestionT[], amount: number): QuestionT[] {
  const randomQuestions: QuestionT[] = [];

  // Check that data has enough elements to choose from
  if (data.length >= amount) {
    while (randomQuestions.length < amount) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuestion = data[randomIndex];

      // Avoid duplicates
      if (!randomQuestions.includes(randomQuestion)) {
        // Shuffle options order
        const shuffledOptions = shuffleArray(randomQuestion.options);
        const randomizedQuestion: QuestionT = {
          ...randomQuestion,
          options: shuffledOptions
        };
        randomQuestions.push(randomizedQuestion);
      }
    }
  } else {
    // Return all available questions
    data.forEach((question) => {
      // Shuffle options order
      const shuffledOptions = shuffleArray(question.options);
      const randomizedQuestion: QuestionT = {
        ...question,
        options: shuffledOptions
      };
      randomQuestions.push(randomizedQuestion);
    });
  }

  return randomQuestions;
}export const LS_FIRST_TIME_STRING = "firstTime";

export const checkVisit = () => {
  const isFirstTime = localStorage.getItem(LS_FIRST_TIME_STRING);

  if (isFirstTime === null) {
    localStorage.setItem(LS_FIRST_TIME_STRING, JSON.stringify(true));
  }
};

export const getFirstTimeVisit = () => JSON.parse(localStorage.getItem(LS_FIRST_TIME_STRING) as string);

