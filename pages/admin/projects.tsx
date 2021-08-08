import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import ExistingProject from "../../components/admin/ExistingProject";
import { storage } from "../../services/firebase";
import projectStyles from "../../styles/pages/admin/Projects.module.css";

interface ProjectsInterface {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  link: string;
}

const Projects = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [existingProjects, setExistingProjects] = useState<ProjectsInterface[]>(
    []
  );

  const uploadProject = async (e: FormEvent) => {
    e.preventDefault();

    if (prompt("Enter your password") === "Bhargavi@2012") {
      if (image) {
        setLoading(true);
        try {
          const storageRef = await storage.ref(
            `/projects/${image?.name}-${new Date()}`
          );
          await storageRef.put(image);
          const imageURL = await storageRef.getDownloadURL();

          await axios.post("/api/projects", {
            imageURL,
            title,
            description,
            link,
          });
          setImage(null);
          setTitle("");
          setDescription("");
          getExistingProjects();
        } catch (error) {
          alert(error);
        }
        setLoading(false);
      }
    } else {
      alert(
        "F*ck! You are being pain in my ass\nI hate non-admins trying f*cking themselves to be like an Admin 😑😑."
      );
    }
  };

  const getExistingProjects = () => {
    !loadingProjects && setLoadingProjects(true);
    axios.get("/api/projects").then((response) => {
      setExistingProjects(response.data);
      setLoadingProjects(false);
    });
  };

  useEffect(() => {
    getExistingProjects();
  }, []);

  return (
    <div className={projectStyles.projects}>
      <form
        className={projectStyles.form}
        onSubmit={(e: FormEvent) => uploadProject(e)}
      >
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          className={projectStyles.imageInput}
          placeholder="Click here or drag and drop an image to upload"
          required
          onChange={(e) => setImage(e.target.files?.item(0)!)}
        />
        <input
          type="text"
          placeholder="Title"
          className={projectStyles.input}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className={projectStyles.input}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link"
          className={projectStyles.input}
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {loading ? (
          <progress className={projectStyles.progress} />
        ) : (
          <input
            type="submit"
            value="Add achievement"
            className={projectStyles.submitButton}
          />
        )}
      </form>
      <div className={projectStyles.container}>
        {loadingProjects ? (
          <CircularProgress />
        ) : (
          existingProjects.map((existingProject) => (
            <ExistingProject
              key={existingProject?.id}
              id={existingProject?.id}
              imageURL={existingProject?.imageURL}
              oldTitle={existingProject?.title}
              oldDescription={existingProject?.description}
              oldLink={existingProject?.link}
              getExistingProjects={getExistingProjects}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
