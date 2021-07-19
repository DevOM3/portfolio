import React, { useEffect, useState } from "react";
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
import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiPagesFill,
  RiPagesLine,
} from "react-icons/ri";

const Navbar = () => {
  const router = useRouter();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    if (drawerIsOpen) {
      document.getElementById("toggle-button")!.style.transform =
        "rotate(0deg)";
    } else {
      document.getElementById("toggle-button")!.style.transform =
        "rotate(180deg)";
    }
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <div
      id="navbar"
      className={navbarStyles.navbar}
      style={{
        maxWidth: drawerIsOpen ? 500 : 69,
        borderTopRightRadius: drawerIsOpen ? 4 : 0,
        borderBottomRightRadius: drawerIsOpen ? 4 : 0,
      }}
    >
      <ul>
        <li
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
        </li>
        <li>
          <b
            style={{ background: router.pathname === "/" ? "white" : "black" }}
          ></b>
          <b
            style={{ background: router.pathname === "/" ? "white" : "black" }}
          ></b>
          <Link href="/">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/" ? "white" : "black",
                color: router.pathname === "/" ? "black" : "white",
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
                      color: router.pathname === "/" ? "#F7444E" : "white",
                    }}
                  />
                ) : (
                  <AiOutlineHome
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/" ? "#F7444E" : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;Home
            </a>
          </Link>
        </li>
        <li>
          <b
            style={{
              background: router.pathname === "/projects" ? "white" : "black",
            }}
          ></b>
          <b
            style={{
              background: router.pathname === "/projects" ? "white" : "black",
            }}
          ></b>
          <Link href="/projects">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/projects" ? "white" : "black",
                color: router.pathname === "/projects" ? "black" : "white",
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
                          : "white",
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
                          : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;Projects
            </a>
          </Link>
        </li>
        <li>
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
          <Link href="/achievements">
            <a
              className={navbarStyles.links}
              style={{
                background:
                  router.pathname === "/achievements" ? "white" : "black",
                color: router.pathname === "/achievements" ? "black" : "white",
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
                          : "white",
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
                          : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;Achievements
            </a>
          </Link>
        </li>
        <li>
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
          <Link href="/blog">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/blog" ? "white" : "black",
                color: router.pathname === "/blog" ? "black" : "white",
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
                      color: router.pathname === "/blog" ? "purple" : "white",
                    }}
                  />
                ) : (
                  <RiPagesLine
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/blog" ? "purple" : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;Blog
            </a>
          </Link>
        </li>
        <li>
          <b
            style={{
              background: router.pathname === "/contact" ? "white" : "black",
            }}
          ></b>
          <b
            style={{
              background: router.pathname === "/contact" ? "white" : "black",
            }}
          ></b>
          <Link href="/contact">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/contact" ? "white" : "black",
                color: router.pathname === "/contact" ? "black" : "white",
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
                      color: router.pathname === "/contact" ? "grey" : "white",
                    }}
                  />
                ) : (
                  <AiOutlineMessage
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/contact" ? "grey" : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;Contact
            </a>
          </Link>
        </li>
        <li>
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
          <Link href="/about">
            <a
              className={navbarStyles.links}
              style={{
                background: router.pathname === "/about" ? "white" : "black",
                color: router.pathname === "/about" ? "black" : "white",
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
                      color: router.pathname === "/about" ? "#3F66DA" : "white",
                    }}
                  />
                ) : (
                  <TiInfoLargeOutline
                    fontSize={30}
                    className={navbarStyles.linkIcons}
                    style={{
                      color: router.pathname === "/about" ? "#3F66DA" : "white",
                    }}
                  />
                )}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
