import * as functions from "firebase-functions";
import { db } from "./firebase-config";
import * as logger from "firebase-functions/logger";
import { updateUsername, usersCollection } from "./utils";

export const onUserCreate = functions.auth
  .user()
  .onCreate(async (user, context) => {
    const { uid } = user;
    const updatedName = await updateUsername(uid);

    const userData = {
      uid: uid,
      name: updatedName,
      points: 0,
      games: 0
    };

    db.collection(usersCollection).doc(uid).set(userData);
    logger.info("This user was created:", userData, context.params);
  });
