import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { aboutSkillCardAnimationVariants } from "../../services/animations/about";
import skillCardStyles from "../../styles/components/about/SkillCard.module.css";

interface SkillCardProps {
  text: string;
  link: string;
  animationDelay: number;
}

const SkillCard = ({ text, link, animationDelay }: SkillCardProps) => {
  const animate = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate.start("animate");
    }
  }, [animate, inView]);

  return (
    <motion.a
      ref={ref}
      className={skillCardStyles.skillCard}
      href={link}
      target="_blank"
      rel="noreferrer"
      variants={aboutSkillCardAnimationVariants}
      initial="initial"
      animate={animate}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
      transition={{
        delay: animationDelay,
        type: "spring",
        stiffness: 50,
        damping: 7,
      }}
    >
      <p>{text}</p>
    </motion.a>
  );
};

export default SkillCard;
