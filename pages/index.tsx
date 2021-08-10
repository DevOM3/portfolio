import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [{ mode }] = useStateValue();

  return (
    <div
      className={styles.container}
      style={{
        background: mode === "dark" ? "#111" : "#fff",
      }}
    >
      <div
        className={styles.hero}
        style={{ color: mode === "dark" ? "#ddd" : "#222" }}
      >
        <div
          className={styles.heroImage}
          style={{ filter: mode === "dark" ? "grayscale(100%)" : "none" }}
        ></div>
        <p id="welcomeText" className={styles.welcomeText}>
          <span
            style={{
              color: mode === "dark" ? "white" : "black",
            }}
          >
            Hello,
          </span>
          <br />
          <span
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            Welcome
          </span>{" "}
          to the web application, I am
          <span
            style={{
              color: mode === "dark" ? "white" : "black",
            }}
          >
            &nbsp;Om Londhe
          </span>
          , a students who loves to{" "}
          <span
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            code
          </span>{" "}
          &amp; to{" "}
          <span
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            develop
          </span>{" "}
          something that makes me satisfied. Take a look at different sections
          to know more about me 😉.
          <br />
          By the way,{" "}
          <span
            style={{
              fontSize: 51,
              color: mode === "dark" ? "white" : "black",
            }}
          >
            nice to meet you!
          </span>
        </p>
        <div
          className={styles.heroImage}
          // style={{ filter: mode === "dark" ? "grayscale(100%)" : "none" }}
        ></div>
      </div>
    </div>
  );
}
