import React, { useState } from "react";
import layoutStyles from "../../styles/components/commons/Layout.module.css";
import AppBar from "./AppBar";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={layoutStyles.layout}>
      <AppBar open={open} setOpen={setOpen} />
      <div className={layoutStyles.navigationContainer}>
        <Navbar open={open} />
        <div className={layoutStyles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
