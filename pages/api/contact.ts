import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../services/firebase";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { name, email, description } = request.body;
    try {
      await db.collection("Contact").add({
        name,
        email,
        description,
      });
      response.status(200).json({ response: "Success" });
    } catch (error) {
      response.status(403).json({ response: error });
    }
  } else {
    response.status(200).json({ Developer: "Om Londhe" });
  }
}
