import { IconButton } from "@material-ui/core";
import { ArrowBackIosRounded, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import appBarStyles from "../../styles/components/commons/AppBar.module.css";

interface AppBarProps {
  open: boolean;
  setOpen: Function;
}

const AppBar = ({ open, setOpen }: AppBarProps) => {
  return (
    <div className={appBarStyles.appBar}>
      <IconButton style={{ color: "white" }} onClick={() => setOpen(!open)}>
        {open ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
      </IconButton>
      <p className={appBarStyles.logo}>DevOM</p>
    </div>
  );
};

export default AppBar;
