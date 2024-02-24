import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import {
  onUserCreateUpdateLeaderboardCollection,
  onUserCreateupdateUserCollection
} from "./utils";
import { updateLeaderboardCollection, updateUsersPositions } from "./utils";

export const onUserCreate = functions.auth
  .user()
  .onCreate(async (user, context) => {
    const { uid } = user;

    await onUserCreateupdateUserCollection(uid);
    await onUserCreateUpdateLeaderboardCollection(uid);
    logger.info("This user was created:", user.toJSON(), context.params);
  });

export const scheduleLeaderboardUpdate = functions.pubsub
  .schedule("every 4 hours")
  .onRun(async () => {
    try {
      await updateLeaderboardCollection();
      await updateUsersPositions();

      logger.info("Leaderboard and user positions updated successfully.");
    } catch (error) {
      logger.error("Error updating leaderboard and user positions:", error);
    }
  });
