import { getAuth } from "firebase-admin/auth";
import { db } from "../firebase-config";

export const usersCollection = "users";

export const updateUsername = async (uid: string) => {
  try {
    const getCount = await db.collection(usersCollection).count().get();
    const userCount = getCount.data().count;
    const name = `anon-${userCount}`;

    const userRecord = await getAuth().updateUser(uid, {
      displayName: name
    });

    console.log("Successfully updated user", userRecord.toJSON());

    return name;
  } catch (error) {
    console.log("Error updating user:", error);

    return null;
  }
};
