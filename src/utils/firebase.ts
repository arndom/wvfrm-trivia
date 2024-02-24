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
  limit,
  orderBy,
  query,
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

// Update display-name
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

// Update game stats after game
export const updateUserGameStats = async (uid: string, points: number) => {
  const docRef = doc(db, usersCollectionName, uid);

  await updateDoc(docRef, {
    points: increment(points),
    games: increment(1)
  });
};

// Get question set
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

// Fetch leaderboard data
export const fetchLeaderboardData = async (uid: string) => {
  try {
    const ref = collection(db, "leaderboard");

    // Fetch the top 4 users
    const topUsersSnapshot = await getDocs(
      query(ref, orderBy("position", "desc"), limit(4))
    );
    const topUsers = topUsersSnapshot.docs.map((doc) => doc.data());

    // Fetch the position of the current user
    const currentUserRef = doc(db, "leaderboard", uid);
    const currentUserDoc = await getDoc(currentUserRef);
    const currentUserData = currentUserDoc.exists()
      ? currentUserDoc.data()
      : null;

    // Fetch the last 5 users
    const lastUsersSnapshot = await getDocs(
      query(ref, orderBy("position", "asc"), limit(5))
    );

    const lastUsers = lastUsersSnapshot.docs.map((doc) => doc.data());

    // Filter out current user data from top and last positions if present
    const filteredTopUsers = topUsers.filter((user) => user.uid !== uid);
    const filteredLastUsers = lastUsers.filter((user) => user.uid !== uid);

    return [...filteredTopUsers, currentUserData, ...filteredLastUsers];
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);

    return null;
  }
};

// Fetch user details for leaderboard entries
export const fetchLeaderboard = async (uid: string) => {
  try {
    const leaderboardData = await fetchLeaderboardData(uid);
    if (!leaderboardData) return null;

    const leaderboardWithUserDetails = [];

    for (const entry of leaderboardData) {
      if (!entry) continue;

      const userDocRef = doc(db, usersCollectionName, entry.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      const userData = userDocSnapshot.exists() ? userDocSnapshot.data() : null;

      if (userData) {
        leaderboardWithUserDetails.push(userData);
      }
    }

    return leaderboardWithUserDetails;
  } catch (error) {
    console.error("Error fetching user details:", error);

    return null;
  }
};
