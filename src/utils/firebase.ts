import { GameModeT, QuestionT } from "@/context/types";
import { initializeApp } from "firebase/app";
import { User, getAuth, signInAnonymously, updateProfile } from "firebase/auth";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC__AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC__STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDING_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

interface AnonUsersT {
  length: number;
}

interface AnonUsersDBT extends AnonUsersT {
  id: string;
}

const anonTypeConverter: FirestoreDataConverter<AnonUsersDBT> = {
  toFirestore: (item) => item,
  fromFirestore: (snapshot: QueryDocumentSnapshot<AnonUsersT>, options) => {
    const data = snapshot.data(options);

    return {
      ...data,
      id: snapshot.id
    };
  }
};

// Need a cloud function to update anonUsers length when new user signs in
const getAnonUsersLength = async () => {
  const ref = doc(db, "extras", "anonUsers").withConverter(anonTypeConverter);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    const data = docSnap.data();

    return data.length;
  }

  return 0;
};

const LS_FIRST_TIME_STRING = "firstTime";

export const checkVisit = () => {
  const isFirstTime = localStorage.getItem(LS_FIRST_TIME_STRING);

  if (isFirstTime === null) {
    localStorage.setItem(LS_FIRST_TIME_STRING, JSON.stringify(true));
  }
};

export const getFirstTimeVisit = () =>
  JSON.parse(localStorage.getItem(LS_FIRST_TIME_STRING) as string);

export const handleAnonSignIn = async () => {
  try {
    const res = await signInAnonymously(auth);

    checkVisit();
    const firstTimeVisit = getFirstTimeVisit();

    if (firstTimeVisit) {
      const anonUsersLength = await getAnonUsersLength();

      // Give anon name to new user
      const username = `anon-${anonUsersLength}`;
      await updateProfile(res.user, {
        displayName: username
      });

      localStorage.setItem(LS_FIRST_TIME_STRING, JSON.stringify(false));
    }
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
  const randomQuestions = [] as QuestionT[];

  // Check that data has enough elements to choose from
  if (data.length >= amount) {
    while (randomQuestions.length < amount) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuestion = data[randomIndex];

      // Avoid duplicates
      if (!randomQuestions.includes(randomQuestion)) {
        randomQuestions.push(randomQuestion);
      }
    }
  } else {
    // Return all available questions
    randomQuestions.push(...data);
  }

  return randomQuestions;
};
