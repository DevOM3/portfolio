import React from "react";
import layoutStyles from "../../styles/components/commons/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className={layoutStyles.layout}>
      <Navbar />
      <div className={layoutStyles.main}>{children}</div>
    </div>
  );
};

export default Layout;
