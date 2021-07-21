import { IconButton } from "@material-ui/core";
import { ArrowBackIosRounded, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import appBarStyles from "../../styles/components/commons/AppBar.module.css";

interface AppBarProps {
  open: boolean;
  setOpen: Function;
}

const AppBar = ({ open, setOpen }: AppBarProps) => {
  return (
    <div className={appBarStyles.appBar}>
      <IconButton style={{ color: "white" }} onClick={() => setOpen(!open)}>
        {open ? <ArrowBackIosRounded /> : <ArrowForwardIos />}
      </IconButton>
      <p className={appBarStyles.logo}>DevOM</p>
    </div>
  );
};

export default AppBar;
