import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import layoutStyles from "../../styles/components/commons/Layout.module.css";
import AppBar from "./AppBar";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mediaQueryMatch, setMediaQueryMatch] = useState(false);
  const [{ mode }, dispatch] = useStateValue();

  const updateWindowWidth = (mediaQuery: MediaQueryList) => {
    setMediaQueryMatch(mediaQuery.matches);
    if (mediaQuery.matches && open) {
      setOpen(false);
    } else if (!mediaQuery.matches && !open) {
      setOpen(true);
    }
  };

  const isAdmin = () =>
    prompt(
      "Developer actions are locked, enter a password to unlock and proceed 😄"
    ) === "Bhargavi@2012";

  const protectConsoleAndCode = () => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.onkeydown = (e) => {
      if (e.keyCode == 123) {
        return isAdmin();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return isAdmin();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return isAdmin();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return isAdmin();
      }
      if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return isAdmin();
      }
    };
  };

  const updateMode = () => {
    dispatch({
      type: actionTypes.SET_MODE,
      mode: localStorage.getItem("mode"),
    });
  };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 550px)");
    updateWindowWidth(mediaQuery);
    mediaQuery.addListener(() => updateWindowWidth(mediaQuery));

    router.events.on("routeChangeStart", () => setOpen(false));

    updateMode();
    // protectConsoleAndCode();
  }, []);

  return (
    <div className={layoutStyles.layout}>
      <Head>
        <title>
          Om Londhe |{" "}
          {router.pathname === "/"
            ? "Home"
            : router.pathname === "/projects"
            ? "Projects"
            : router.pathname === "/achievements"
            ? "Achievements"
            : router.pathname === "/blog"
            ? "Blog"
            : router.pathname === "/contact"
            ? "Contact"
            : router.pathname === "/about"
            ? "About"
            : "Somewhere"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname !== "/admin" &&
        router.pathname !== "/admin/projects" &&
        router.pathname !== "/admin/achievements" &&
        router.pathname !== "/admin/blog" &&
        router.pathname !== "/admin/contact" && (
          <AppBar open={open} setOpen={setOpen} />
        )}
      <div className={layoutStyles.navigationContainer}>
        {router.pathname !== "/admin" &&
          router.pathname !== "/admin/projects" &&
          router.pathname !== "/admin/achievements" &&
          router.pathname !== "/admin/blog" &&
          router.pathname !== "/admin/contact" && (
            <Navbar
              open={open}
              setOpen={setOpen}
              mediaQueryMatch={mediaQueryMatch}
            />
          )}
        <div
          className={layoutStyles.main}
          style={{
            border: router.pathname.includes("/admin") ? "none" : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
