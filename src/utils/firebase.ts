import { GameModeT, QuestionT } from "@/context/types";
import { initializeApp } from "firebase/app";
import { User, getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore
} from "firebase/firestore";
import { randomizeQuestions } from "./helpers";
import { firebaseConfig } from "./firebase-helpers";
import { anonTypeConverter } from "./firebase-helpers";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// Need a cloud function to update anonUsers length when new user signs in
// instead of that;
// when new user created, cloud function creates a user document and updates the display name
// display name = anon-number of users

export const getAnonUsersLength = async () => {
  const ref = doc(db, "extras", "anonUsers").withConverter(anonTypeConverter);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    const data = docSnap.data();

    return data.length;
  }

  return 0;
};

export const handleAnonSignIn = async () => {
  try {
    await signInAnonymously(auth);

    // checkVisit();
    // const firstTimeVisit = getFirstTimeVisit();

    // if (firstTimeVisit) {
    //   const anonUsersLength = await getAnonUsersLength();

    //   // Give anon name to new user
    //   const username = `anon-${anonUsersLength}`;
    //   await updateProfile(res.user, {
    //     displayName: username
    //   });

    //   localStorage.setItem(LS_FIRST_TIME_STRING, JSON.stringify(false));
    // }
  } catch (error) {
    Promise.reject(error);
  }
};

export const handleNameUpdate = async (user: User, name: string) => {
  updateProfile(user, {
    displayName: name
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
