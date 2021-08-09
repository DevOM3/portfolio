import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SkillCard from "../components/about/SkillCard";
import { useStateValue } from "../context/StateProvider";
import {
  aboutBottomParallaxTextAnimationVariants,
  aboutLinkAnimationVariants,
  aboutParallaxTextAnimationVariants,
  aboutParallaxTextLetterAnimationVariants,
  aboutTextAnimationVariants,
} from "../services/animations/about";
import { pageAnimationVariants } from "../services/animations/common";
import aboutStyles from "../styles/pages/About.module.css";

const ParallaxBottom = () => {
  const animate = useAnimation();
  const [ref, inView] = useInView();
  const [{ mode }] = useStateValue();

  useEffect(() => {
    if (inView) {
      animate.start("animate");
    }
  }, [animate, inView]);

  return (
    <div
      className={aboutStyles.bottomParallax}
      style={{
        filter: mode === "dark" ? "grayscale(71%)" : "none",
      }}
    >
      <motion.p
        className={aboutStyles.bottomParallaxText}
        ref={ref}
        variants={aboutBottomParallaxTextAnimationVariants}
        initial="initial"
        animate={animate}
      >
        Thank you
      </motion.p>
    </div>
  );
};

const skillArray = [
  {
    animationDelay: 0.1,
    text: "Frontend Development",
    link: "https://www.techslang.com/definition/what-is-frontend-development/",
  },
  {
    animationDelay: 0.2,
    text: "Backend Development",
    link: "https://www.guru99.com/what-is-backend-developer.html",
  },
  {
    animationDelay: 0.3,
    text: "Full-stack Development",
    link: "https://www.geeksforgeeks.org/what-is-full-stack-development/#:~:text: Full%20stack%20development%3A%20It%20refers,side)%20portions%20of%20web%20application.&text: They%20work%20on%20the%20frontend,of%20web%20application%20or%20websites.",
  },
  {
    animationDelay: 0.4,
    text: "JAMstack Development",
    link: "https://jamstack.org/what-is-jamstack/",
  },
  {
    animationDelay: 0.5,
    text: "MERN-Stack Development",
    link: "https://www.mongodb.com/mern-stack",
  },
  {
    animationDelay: 0.6,
    text: "ReactJS",
    link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
  },
  {
    animationDelay: 0.7,
    text: "NextJS",
    link: "https://en.wikipedia.org/wiki/Next.js",
  },
  {
    animationDelay: 0.8,
    text: "Web Development",
    link: "https://en.wikipedia.org/wiki/Web_development",
  },
  {
    animationDelay: 0.9,
    text: "Firebase",
    link: "https://en.wikipedia.org/wiki/Firebase",
  },
  {
    animationDelay: 1,
    text: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    animationDelay: 1.2,
    text: "Flutter",
    link: "https://flutter.dev/",
  },
  {
    animationDelay: 1.3,
    text: "Progressive Web App",
    link: "https://en.wikipedia.org/wiki/Progressive_web_application",
  },
  {
    animationDelay: 1.4,
    text: "Mobile app Development",
    link: "https://en.wikipedia.org/wiki/Mobile_app_development",
  },
  {
    animationDelay: 1.5,
    text: "Game Development",
    link: "https://www.freecodecamp.org/news/what-is-game-development/",
  },
];

const About = () => {
  const [{ mode }] = useStateValue();

  return (
    <motion.div
      className={aboutStyles.about}
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ background: mode === "dark" ? "#111" : "#fff" }}
    >
      <div className={aboutStyles.parallax}>
        <div className={aboutStyles.parallaxTextContainer}>
          <motion.p
            className={aboutStyles.parallaxText}
            variants={aboutParallaxTextAnimationVariants}
            initial="initial"
            animate="animate"
          >
            {"Who am I?".split("").map((letter, index) => (
              <motion.span
                key={`letter-${index}`}
                variants={aboutParallaxTextLetterAnimationVariants}
                style={{
                  display: "inline-block",
                }}
              >
                {letter}
                {letter === " " ? <>&nbsp;</> : <></>}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.div
          className={aboutStyles.scrollIcon}
          variants={aboutLinkAnimationVariants}
          initial="initial"
          animate="animate"
        >
          <div className={aboutStyles.container}>
            <div className={aboutStyles.chevron}></div>
            <div className={aboutStyles.chevron}></div>
            <div className={aboutStyles.chevron}></div>
            <span className={aboutStyles.text}>Scroll down to see</span>
          </div>
        </motion.div>
      </div>
      <main id="main">
        <motion.p
          className={aboutStyles.aboutText}
          variants={aboutTextAnimationVariants}
          initial="initial"
          animate="animate"
          style={{
            background: mode === "dark" ? "#111" : "#fff",
            color: mode === "dark" ? "#fff" : "#111",
          }}
        >
          Firstly, thank you for scrolling down 😉. You are here because you may
          be curious to know who am I or you may have to see what I have written
          in the About section of the portfolio. My name is
          <strong> Om Prashant Londhe </strong>
          <small>({new Date().getFullYear() - 2003} years old)</small> and I am
          a student who loves to develop something that can beat what I have
          developed earlier. I love to make new things using a superpower called
          <strong> Programming</strong>.
          <br />
          <br />
          I learnt too many things during the COVID-19 Pandemic because I love
          programming and want to just do it as much as can do. Eradicate my
          intoxication of programming helped me to learn more and more and
          ......
          <br />
          Some of the things are given below
        </motion.p>
        <div className={aboutStyles.skillCards}>
          {skillArray.map((skill, index) => (
            <SkillCard
              key={index}
              animationDelay={skill.animationDelay}
              text={skill.text}
              link={skill.link}
            />
          ))}
        </div>
        <br />
        <motion.p
          className={aboutStyles.aboutText}
          variants={aboutTextAnimationVariants}
          initial="initial"
          animate="animate"
          style={{
            background: mode === "dark" ? "#111" : "#fff",
            color: mode === "dark" ? "#fff" : "#111",
          }}
        >
          Acting towards a new idea and developing something is one side of a
          coin of my passion but the another side of that coin is very different
          and it is called Gaming. I have been gaming since I was just 5 years
          old, it means before I started programming, I was a gamer!
        </motion.p>
      </main>
      <ParallaxBottom />
    </motion.div>
  );
};

export default About;
