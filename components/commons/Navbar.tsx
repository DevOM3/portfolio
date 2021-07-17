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
        borderTopRightRadius: drawerIsOpen ? "44%" : 0,
        borderBottomRightRadius: drawerIsOpen ? "44%" : 0,
      }}
    >
      <ul>
        <li
          className={navbarStyles.drawerToggleButton}
          onClick={toggleDrawer}
          style={{ background: drawerIsOpen ? "tomato" : "transparent" }}
        >
          <RiMenuUnfoldLine
            fontSize={30}
            id="toggle-button"
            style={{ transition: "transform 444ms" }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp; Close
        </li>
        <li>
          <Link href="/">
            <a className={navbarStyles.links}>
              {router.pathname === "/" ? (
                <AiFillHome fontSize={30} />
              ) : (
                <AiOutlineHome fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={navbarStyles.links}>
              {router.pathname === "/projects" ? (
                <TiCode fontSize={30} />
              ) : (
                <TiCodeOutline fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/achievements">
            <a className={navbarStyles.links}>
              {router.pathname === "/achievements" ? (
                <AiFillTrophy fontSize={30} />
              ) : (
                <AiOutlineTrophy fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;Achievements
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={navbarStyles.links}>
              {router.pathname === "/blog" ? (
                <RiPagesFill fontSize={30} />
              ) : (
                <RiPagesLine fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={navbarStyles.links}>
              {router.pathname === "/contact" ? (
                <AiFillMessage fontSize={30} />
              ) : (
                <AiOutlineMessage fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={navbarStyles.links}>
              {router.pathname === "/about" ? (
                <TiInfoLarge fontSize={30} />
              ) : (
                <TiInfoLargeOutline fontSize={30} />
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
