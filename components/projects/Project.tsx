import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "../../styles/components/projects/Project.module.css";

interface ProjectInterface {
  imageURL: string;
  title: string;
  description: string;
  link: string;
}

const Project = ({ imageURL, title, description, link }: ProjectInterface) => {
  return (
    <Link href={link}>
      <a className={projectStyles.project}>
        <div className={projectStyles.imageDiv}>
          <Image
            draggable={false}
            src={imageURL}
            alt={imageURL}
            height={215}
            width={250}
            layout="responsive"
            className={projectStyles.image}
          />
        </div>
        <p className={projectStyles.title}>{title}</p>
        <p className={projectStyles.description}>{description}</p>
      </a>
    </Link>
  );
};

export default Project;
