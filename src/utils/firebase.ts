import { GameModeT, QuestionT } from "@/context/types";
import { initializeApp } from "firebase/app";
import { User, getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  LS_FIRST_TIME_STRING,
  checkVisit,
  getFirstTimeVisit,
  randomizeQuestions
} from "./helpers";
import { firebaseConfig } from "./firebase-helpers";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// Need a cloud function
// when new user created, itcreates a user document and updates the display name
// display name = anon-number of users

export const handleAnonSignIn = async () => {
  try {
    const { user } = await signInAnonymously(auth);

    checkVisit();
    const firstTimeVisit = getFirstTimeVisit();

    if (firstTimeVisit) {
      localStorage.setItem(LS_FIRST_TIME_STRING, JSON.stringify(false));
    }

    return user;
  } catch (error) {
    Promise.reject(error);

    return null;
  }
};

export const handleNameUpdate = async (user: User, name: string) => {
  await updateProfile(user, {
    displayName: name
  });

  return auth.currentUser;
};

export const getQuestions = async (type: GameModeT) => {
  const ref = collection(db, "questions");
  const querySnapshot = await getDocs(ref);

  const data = [] as QuestionT[];
  const getQuestionsAmount = () => {
    if (type === "quick") return 3;

    return 10;
  };

  querySnapshot.forEach((doc) => {
    const question = doc.data() as QuestionT;

    if (question.type === "text" && question.options.length > 0) {
      data.push(question);
    }
  });

  const amount = getQuestionsAmount();
  const randomQuestions = randomizeQuestions(data, amount);

  return randomQuestions;
};
