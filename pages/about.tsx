import { motion } from "framer-motion";
import React from "react";
import SkillCard from "../components/about/SkillCard";
import {
  aboutParallaxTextAnimationVariants,
  aboutParallaxTextWordAnimationVariants,
} from "../services/animations/about";
import aboutStyles from "../styles/pages/About.module.css";

const about = () => {
  return (
    <div className={aboutStyles.about}>
      <div className={aboutStyles.parallax}>
        <div className={aboutStyles.parallaxTextContainer}>
          <motion.p
            className={aboutStyles.parallaxText}
            variants={aboutParallaxTextAnimationVariants}
            initial="initial"
            animate="animate"
          >
            {"Who am I".split(" ").map((word, index) => (
              <motion.span
                key={`word-${index}`}
                variants={aboutParallaxTextWordAnimationVariants}
                style={{ display: "inline-block" }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <motion.span
              variants={aboutParallaxTextWordAnimationVariants}
              style={{ display: "inline-block" }}
            >
              ?
            </motion.span>
          </motion.p>
        </div>
        <a href="#main" className={aboutStyles.scrollIcon}>
          <div className={aboutStyles.container}>
            <div className={aboutStyles.chevron}></div>
            <div className={aboutStyles.chevron}></div>
            <div className={aboutStyles.chevron}></div>
            <span className={aboutStyles.text}>Scroll down to see</span>
          </div>
        </a>
      </div>
      <main id="main">
        <p className={aboutStyles.aboutText}>
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
          <div className={aboutStyles.skillCards}>
            <SkillCard
              animationDelay="0s"
              text="Frontend Development"
              link="https://www.techslang.com/definition/what-is-frontend-development/"
            />
            <SkillCard
              animationDelay="100ms"
              text="Backend Development"
              link="https://www.guru99.com/what-is-backend-developer.html"
            />
            <SkillCard
              animationDelay="200ms"
              text="Full-stack Development"
              link="https://www.geeksforgeeks.org/what-is-full-stack-development/#:~:text=Full%20stack%20development%3A%20It%20refers,side)%20portions%20of%20web%20application.&text=They%20work%20on%20the%20frontend,of%20web%20application%20or%20websites."
            />
            <SkillCard
              animationDelay="300ms"
              text="JAMstack Development"
              link="https://jamstack.org/what-is-jamstack/"
            />
            <SkillCard
              animationDelay="400ms"
              text="MERN-Stack Development"
              link="https://www.mongodb.com/mern-stack"
            />
            <SkillCard
              animationDelay="500ms"
              text="ReactJS"
              link="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
            />
            <SkillCard
              animationDelay="600ms"
              text="NextJS"
              link="https://en.wikipedia.org/wiki/Next.js"
            />
            <SkillCard
              animationDelay="700ms"
              text="Web Development"
              link="https://en.wikipedia.org/wiki/Web_development"
            />
            <SkillCard
              animationDelay="800ms"
              text="Firebase"
              link="https://en.wikipedia.org/wiki/Firebase"
            />
            <SkillCard
              animationDelay="900ms"
              text="React Native"
              link="https://reactnative.dev/"
            />
            <SkillCard
              animationDelay="1s"
              text="Flutter"
              link="https://flutter.dev/"
            />
            <SkillCard
              animationDelay="1100ms"
              text="Progressive Web App"
              link="https://en.wikipedia.org/wiki/Progressive_web_application"
            />
            <SkillCard
              animationDelay="1200ms"
              text="Mobile app Development"
              link="https://en.wikipedia.org/wiki/Mobile_app_development"
            />
            <SkillCard
              animationDelay="1300ms"
              text="Game Development"
              link="https://www.freecodecamp.org/news/what-is-game-development/"
            />
          </div>
          <br />
          Acting towards a new idea and developing something is one side of a
          coin of my passion but the another side of that coin is very different
          and it is called Gaming. I have been gaming since I was just 5 years
          old, it means before I started programming, I was a gamer!
        </p>
      </main>

      <div className={aboutStyles.bottomParallax}>
        <p className={aboutStyles.bottomParallaxText}>Thank you</p>
      </div>
    </div>
  );
};

export default about;
