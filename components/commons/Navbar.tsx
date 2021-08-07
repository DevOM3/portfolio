import React, { useState } from "react";
import Link from "next/link";
import navbarStyles from "../../styles/components/commons/Navbar.module.css";
import { useRouter } from "next/dist/client/router";
import {
  AiFillHome,
  AiFillMessage,
  AiFillTrophy,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineTrophy,
} from "react-icons/ai";
import {
  TiCode,
  TiCodeOutline,
  TiInfoLarge,
  TiInfoLargeOutline,
} from "react-icons/ti";
import { RiMenuUnfoldLine, RiPagesFill, RiPagesLine } from "react-icons/ri";

interface NavbarProps {
  open: boolean;
  setOpen: Function;
  mediaQueryMatch: boolean;
}

const Navbar = ({ open, setOpen, mediaQueryMatch }: NavbarProps) => {
  const router = useRouter();
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // const toggleDrawer = () => {
  //   if (drawerIsOpen) {
  //     document.getElementById("toggle-button")!.style.transform =
  //       "rotate(0deg)";
  //   } else {
  //     document.getElementById("toggle-button")!.style.transform =
  //       "rotate(180deg)";
  //   }
  //   setDrawerIsOpen(!drawerIsOpen);
  // };

  return (
    <div
      id="navbar"
      className={navbarStyles.navbar}
      style={{
        left: mediaQueryMatch ? (open ? 0 : "-100vw") : 0,
        maxWidth: mediaQueryMatch ? "100%" : open ? 200 : 69,
      }}
    >
      <ul>
        {/* <li
          className={navbarStyles.drawerToggleButton}
          onClick={toggleDrawer}
          style={{
            background: drawerIsOpen ? "red" : "transparent",
            maxWidth: drawerIsOpen ? 100 : 500,
            borderTopRightRadius: drawerIsOpen ? 51 : 0,
            borderBottomRightRadius: drawerIsOpen ? 51 : 0,
          }}
        >
          <div className={navbarStyles.icon}>
            <RiMenuUnfoldLine
              fontSize={30}
              id="toggle-button"
              style={{
                transition: "transform 444ms",
              }}
            />
          </div>
        </li> */}
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background: router.pathname === "/" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background: router.pathname === "/" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/" ? "white" : "black",
                color: router.pathname === "/" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius: router.pathname === "/" ? 51 : 11,
                borderBottomLeftRadius: router.pathname === "/" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/" ? (
                  <AiFillHome
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/" ? "#F7444E" : "whitesmoke",
                    }}
                  />
                ) : (
                  <AiOutlineHome
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/" ? "#F7444E" : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              Home
            </a>
          </Link>
        </li>
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background:
                    router.pathname === "/projects" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background:
                    router.pathname === "/projects" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/projects">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/projects" ? "white" : "black",
                color: router.pathname === "/projects" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/projects"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius: router.pathname === "/projects" ? 51 : 11,
                borderBottomLeftRadius:
                  router.pathname === "/projects" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/projects" ? (
                  <TiCode
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/projects"
                          ? "rgb(34, 160, 234)"
                          : "whitesmoke",
                    }}
                  />
                ) : (
                  <TiCodeOutline
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/projects"
                          ? "rgb(34, 160, 234)"
                          : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              Projects
            </a>
          </Link>
        </li>
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background:
                    router.pathname === "/achievements" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background:
                    router.pathname === "/achievements" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/achievements">
            <a
              className={navbarStyles.links}
              style={{
                background:
                  router.pathname === "/achievements" ? "white" : "black",
                color: router.pathname === "/achievements" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/achievements"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius:
                  router.pathname === "/achievements" ? 51 : 11,
                borderBottomLeftRadius:
                  router.pathname === "/achievements" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/achievements" ? (
                  <AiFillTrophy
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/achievements"
                          ? "orange"
                          : "whitesmoke",
                    }}
                  />
                ) : (
                  <AiOutlineTrophy
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/achievements"
                          ? "orange"
                          : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              Achievements
            </a>
          </Link>
        </li>
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background: router.pathname === "/blog" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background: router.pathname === "/blog" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/blog">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/blog" ? "white" : "black",
                color: router.pathname === "/blog" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/blog"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius: router.pathname === "/blog" ? 51 : 11,
                borderBottomLeftRadius: router.pathname === "/blog" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/blog" ? (
                  <RiPagesFill
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/blog" ? "purple" : "whitesmoke",
                    }}
                  />
                ) : (
                  <RiPagesLine
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/blog" ? "purple" : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              Blog
            </a>
          </Link>
        </li>
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background:
                    router.pathname === "/contact" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background:
                    router.pathname === "/contact" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/contact">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/contact" ? "white" : "black",
                color: router.pathname === "/contact" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/contact"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius: router.pathname === "/contact" ? 51 : 11,
                borderBottomLeftRadius:
                  router.pathname === "/contact" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/contact" ? (
                  <AiFillMessage
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/contact"
                          ? "#26D9CA"
                          : "whitesmoke",
                    }}
                  />
                ) : (
                  <AiOutlineMessage
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/contact"
                          ? "#26D9CA"
                          : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              Contact
            </a>
          </Link>
        </li>
        <li>
          {!mediaQueryMatch && (
            <>
              <b
                style={{
                  background: router.pathname === "/about" ? "white" : "black",
                }}
              ></b>
              <b
                style={{
                  background: router.pathname === "/about" ? "white" : "black",
                }}
              ></b>
            </>
          )}
          <Link href="/about">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/about" ? "white" : "black",
                color: router.pathname === "/about" ? "black" : "white",
                borderRadius: mediaQueryMatch
                  ? router.pathname === "/about"
                    ? 51
                    : 11
                  : 0,
                borderTopLeftRadius: router.pathname === "/about" ? 51 : 11,
                borderBottomLeftRadius: router.pathname === "/about" ? 51 : 11,
              }}
            >
              <div className={navbarStyles.icon}>
                {router.pathname === "/about" ? (
                  <TiInfoLarge
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/about" ? "#3F66DA" : "whitesmoke",
                    }}
                  />
                ) : (
                  <TiInfoLargeOutline
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color:
                        router.pathname === "/about" ? "#3F66DA" : "whitesmoke",
                    }}
                  />
                )}
              </div>
              {mediaQueryMatch ? <>&nbsp;</> : <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
