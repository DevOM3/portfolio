import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import layoutStyles from "../../styles/components/commons/Layout.module.css";
import AppBar from "./AppBar";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mediaQueryMatch, setMediaQueryMatch] = useState(false);

  const updateWindowWidth = (mediaQuery: MediaQueryList) => {
    setMediaQueryMatch(mediaQuery.matches);
    if (mediaQuery.matches && open) {
      setOpen(false);
    } else if (!mediaQuery.matches && !open) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 550px)");
    updateWindowWidth(mediaQuery);
    mediaQuery.addListener(() => updateWindowWidth(mediaQuery));

    router.events.on("routeChangeStart", () => setOpen(false));
  }, []);

  return (
    <div className={layoutStyles.layout}>
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
            border:
              router.pathname !== "/admin" &&
              router.pathname !== "/admin/projects" &&
              router.pathname !== "/admin/achievements" &&
              router.pathname !== "/admin/blog" &&
              router.pathname !== "/admin/contact"
                ? "4px solid white"
                : "none",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
