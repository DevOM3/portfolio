import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../services/firebase";

interface AchievementsType {
  imageURL: string;
  title: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { imageURL, title }: AchievementsType = request.body;

    try {
      await db.collection("Achievements").add({
        imageURL,
        title,
      });
      response.status(200).json({ response: "Success" });
    } catch (error) {
      console.log(error);
      response.status(403).json({ response: error });
    }
  } else {
    try {
      const achievementSnapshot = await db.collection("Achievements").get();
      const achievementsArray = achievementSnapshot.docs.map((achievement) => ({
        id: achievement?.id,
        imageURL: achievement?.data().imageURL,
        title: achievement?.data().title,
      }));
      response.status(200).json(achievementsArray);
    } catch (error) {
      response.status(403).json({ response: error });
    }
  }
}
