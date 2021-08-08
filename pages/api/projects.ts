import type { NextApiRequest, NextApiResponse } from "next";
import { db, storage } from "../../services/firebase";

interface ProjectsType {
  imageURL: string;
  title: string;
  description: string;
  link: string;
}
interface UpdateProjectsType {
  id: string;
  newURL: string;
  title: string;
  description: string;
  link: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { imageURL, title, description, link }: ProjectsType = request.body;

    try {
      await db.collection("Projects").add({
        imageURL,
        title,
        description,
        link,
      });
      response.status(200).json({ response: "Success" });
    } catch (error) {
      console.log(error);
      response.status(403).json({ response: error });
    }
  } else if (request.method === "PUT") {
    const { id, newURL, title, description, link }: UpdateProjectsType =
      request.body;
    try {
      db.collection("Projects").doc(id).update({
        imageURL: newURL,
        title,
        description,
        link,
      });
      response.status(200).json({ response: "Success" });
    } catch (error) {
      console.log(error);
      response.status(403).json({ response: error });
    }
  } else {
    try {
      const projectSnapshot = await db.collection("Projects").get();
      const projectsArray = projectSnapshot.docs.map((project) => ({
        id: project?.id,
        imageURL: project?.data().imageURL,
        title: project?.data().title,
        description: project?.data().description,
        link: project?.data().link,
      }));
      response.status(200).json(projectsArray);
    } catch (error) {
      console.log(error);
      response.status(403).json({ response: error });
    }
  }
}
