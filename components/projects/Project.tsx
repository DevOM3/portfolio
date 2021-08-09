import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectStyles from "../../styles/components/projects/Project.module.css";
import { motion } from "framer-motion";
import { achievementCardAnimationVariants } from "../../services/animations/achievements";

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
      >
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
      </motion.a>
    </Link>
  );
};

export default Project;
