import { IconButton } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIos,
  Brightness4Rounded,
  Brightness7Rounded,
} from "@material-ui/icons";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine, RiAdminLine } from "react-icons/ri";
import appBarStyles from "../../styles/components/commons/AppBar.module.css";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

interface AppBarProps {
  open: boolean;
  setOpen: Function;
}

const AppBar = ({ open, setOpen }: AppBarProps) => {
  const router = useRouter();
  const [{ mode }, dispatch] = useStateValue();

  const gotoAdminPanel = () => {
    const promptAnswer = prompt(
      "Are you Admin of this web application? \nEnter a password to proceed with Admin Panel 😬."
    );
    if (promptAnswer === "Bhargavi@2012") {
      router.replace("/admin");
    } else {
      alert("You are not Admin 😂😂😂!");
    }
  };

  const changeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    dispatch({
      type: actionTypes.SET_MODE,
      mode: newMode,
    });
    localStorage.setItem("mode", newMode);
  };

  return (
    <div className={appBarStyles.appBar}>
      <section className={appBarStyles.left}>
        <IconButton style={{ color: "white" }} onClick={() => setOpen(!open)}>
          {open ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
        </IconButton>
        <p className={appBarStyles.logo}>DevOM</p>
      </section>
      <section className={appBarStyles.right}>
        <IconButton style={{ color: "white" }} onClick={changeMode}>
          {mode === "dark" ? <Brightness4Rounded /> : <Brightness7Rounded />}
        </IconButton>
        <IconButton style={{ color: "white" }} onClick={gotoAdminPanel}>
          <RiAdminLine />
        </IconButton>
      </section>
    </div>
  );
};

export default AppBar;
