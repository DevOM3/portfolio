import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "../components/projects/Project";
import projectStyles from "../styles/pages/Projects.module.css";

interface ProjectsInterface {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  link: string;
}

const projects = () => {
  const [projects, setProjects] = useState<ProjectsInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const getExistingProjects = () => {
    axios.get("/api/projects").then((response) => {
      setProjects(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getExistingProjects();
  }, []);

  return (
    <div className={projectStyles.projects}>
      {projects.map((project) => (
        <Project
          key={project?.id}
          link={project?.link}
          imageURL={project?.imageURL}
          title={project?.title}
          description={project?.description}
        />
      ))}
    </div>
  );
};

export default projects;
