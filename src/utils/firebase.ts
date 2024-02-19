import { GameModeT, QuestionT } from "@/context/types";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  updateDoc
} from "firebase/firestore";
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

const usersCollectionName = "users";

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
    console.error("Error signing in:", error);

    return null;
  }
};

export const handleNameUpdate = async (name: string) => {
  const user = auth.currentUser;

  if (!user) return null;

  await updateProfile(user, {
    displayName: name
  });
};

export const getUser = async (uid: string) => {
  const docRef = doc(db, usersCollectionName, uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return docSnap.data();
};

export const updateUserGameStats = async (uid: string, points: number) => {
  const docRef = doc(db, usersCollectionName, uid);

  await updateDoc(docRef, {
    points: increment(points),
    games: increment(1)
  });
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
