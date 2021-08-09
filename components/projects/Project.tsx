import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "../../styles/components/projects/Project.module.css";
import { motion } from "framer-motion";
import { achievementCardAnimationVariants } from "../../services/animations/achievements";
import { useStateValue } from "../../context/StateProvider";

interface ProjectInterface {
  imageURL: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

const Project = ({
  imageURL,
  title,
  description,
  link,
  index,
}: ProjectInterface) => {
  const [{ mode }] = useStateValue();

  return (
    <Link href={link}>
      <motion.a
        className={projectStyles.project}
        variants={achievementCardAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1.21,
          delay: index / 10,
        }}
        href={link}
        target="_blank"
        style={{
          background: mode === "dark" ? "#222" : "#fff",
          borderColor: mode === "dark" ? "#333" : "#eee",
        }}
      >
        <div
          className={projectStyles.imageDiv}
          style={{
            background: mode === "dark" ? "#333" : "#eee",
            borderColor: mode === "dark" ? "#444" : "#ddd",
          }}
        >
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
        <p
          className={projectStyles.title}
          style={{ color: mode === "dark" ? "white" : "black" }}
        >
          {title}
        </p>
        <p
          className={projectStyles.description}
          style={{ color: mode === "dark" ? "whitesmoke" : "#333" }}
        >
          {description}
        </p>
      </motion.a>
    </Link>
  );
};

export default Project;
