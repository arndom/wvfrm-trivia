import { getAuth } from "firebase-admin/auth";
import { db } from "../firebase-config";
import * as logger from "firebase-functions/logger";

export const usersCollection = "users";
export const leaderboardCollection = "leaderboard";

export const getTotalUserCount = async () => {
  try {
    const getCount = await db.collection(usersCollection).count().get();
    const userCount = getCount.data().count;

    return userCount;
  } catch (error) {
    logger.error("Error getting total user count:", error);

    return 0;
  }
};
export const updateUsername = async (uid: string) => {
  try {
    const userCount = await getTotalUserCount();
    const name = `anon-${userCount}`;

    const userRecord = await getAuth().updateUser(uid, {
      displayName: name
    });

    logger.info("Successfully updated user", userRecord.toJSON());

    return name;
  } catch (error) {
    logger.error("Error updating user:", error);

    return null;
  }
};

// Add user to user collection on user creation (auth)
export const onUserCreateupdateUserCollection = async (uid: string) => {
  try {
    const updatedName = await updateUsername(uid);
    const userCount = await getTotalUserCount();

    const userData = {
      uid,
      name: updatedName,
      points: 0,
      games: 0,
      position: userCount + 1
    };

    await db.collection(usersCollection).doc(uid).set(userData);

    logger.info("User data updated successfully:", userData);
  } catch (error) {
    logger.error("Error updating user data:", error);
  }
};

// Add user to leaderboard on user creation
export const onUserCreateUpdateLeaderboardCollection = async (uid: string) => {
  try {
    const userCount = await getTotalUserCount();

    const leaderboardData = {
      uid,
      position: userCount // same as count because user doc has been created
    };

    await db.collection(leaderboardCollection).doc(uid).set(leaderboardData);

    logger.info("Leaderboard data updated successfully:", leaderboardData);
  } catch (error) {
    logger.error("Error updating leaderboard data:", error);
  }
};

// Update leaderboard postions during scheduled leaderboard update
export const updateLeaderboardCollection = async () => {
  try {
    const usersSnapshot = await db
      .collection(usersCollection)
      .orderBy("points", "desc")
      .get();
    let position = 1;

    usersSnapshot.forEach((doc) => {
      const uid = doc.id;
      db.collection(leaderboardCollection)
        .doc(uid)
        .set({ position }, { merge: true });
      position++;
    });

    logger.info("Leaderboard collection updated successfully.");
  } catch (error) {
    logger.error("Error updating leaderboard collection: " + error);
  }
};

// Update user postions during scheduled leaderboard update
export const updateUsersPositions = async () => {
  try {
    const usersSnapshot = await db
      .collection(usersCollection)
      .orderBy("points", "desc")
      .get();
    let position = 1;

    usersSnapshot.forEach((doc) => {
      const uid = doc.id;
      db.collection(usersCollection).doc(uid).update({ position });
      position++;
    });

    logger.info("User positions updated successfully.");
  } catch (error) {
    logger.error("Error updating user positions: " + error);
  }
};
