import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import styles from "../styles/pages/Home.module.css";
import {
  heroAnimationVariants,
  spanAnimationVariants,
  spanLetterAnimationVariants,
} from "../services/animations/home";
import { pageAnimationVariants } from "../services/animations/common";

export default function Home() {
  const [{ mode }] = useStateValue();

  return (
    <motion.div
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(45deg, black, #111, #222)"
            : "linear-gradient(45deg, pink, white, aquamarine)",
      }}
    >
      <div
        className={styles.hero}
        style={{
          color: mode === "dark" ? "#ddd" : "#222",
        }}
      >
        <motion.p
          id="welcomeText"
          className={styles.welcomeText}
          variants={heroAnimationVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={spanAnimationVariants}
            initial="initial"
            animate="animate"
            style={{
              color: mode === "dark" ? "white" : "black",
            }}
          >
            {"Hello,".split("").map((char, id) => (
              <motion.span variants={spanLetterAnimationVariants} key={id}>
                {char}
              </motion.span>
            ))}
          </motion.span>
          <br />
          Welcome to the web application, I am
          <motion.span
            variants={spanAnimationVariants}
            initial="initial"
            animate="animate"
            style={{
              color: mode === "dark" ? "white" : "black",
            }}
          >
            &nbsp;
            {"Om Londhe".split("").map((char, id) => (
              <motion.span variants={spanLetterAnimationVariants} key={id}>
                {char}
              </motion.span>
            ))}
          </motion.span>
          , a students who loves to{" "}
          <motion.span
            variants={spanAnimationVariants}
            initial="initial"
            animate="animate"
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            {"code".split("").map((char, id) => (
              <motion.span variants={spanLetterAnimationVariants} key={id}>
                {char}
              </motion.span>
            ))}
          </motion.span>{" "}
          &amp; to{" "}
          <motion.span
            variants={spanAnimationVariants}
            initial="initial"
            animate="animate"
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            {"develop".split("").map((char, id) => (
              <motion.span variants={spanLetterAnimationVariants} key={id}>
                {char}
              </motion.span>
            ))}
          </motion.span>{" "}
          something that makes me satisfied. Take a look at different sections
          to know more about me 😉 and my work 💻.
          <br />
          By the way,{" "}
          <motion.span
            variants={spanAnimationVariants}
            initial="initial"
            animate="animate"
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            {"nice to meet you!".split("").map((char, id) => (
              <motion.span variants={spanLetterAnimationVariants} key={id}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.p>
      </div>
      <div className={styles.heroImage}></div>
    </motion.div>
  );
}
