import React from "react";
import Link from "next/link";
import adminStyles from "../../styles/pages/admin/Admin.module.css";

const Admin = () => {
  return (
    <div className={adminStyles.admin}>
      <p className={adminStyles.title}>What do you wanna explore?</p>
      <div className={adminStyles.links}>
        <Link href="/admin/projects">
          <a className={adminStyles.link}>Projects</a>
        </Link>
        <Link href="/admin/achievements">
          <a className={adminStyles.link}>Achievements</a>
        </Link>
        <Link href="/admin/blog">
          <a className={adminStyles.link}>Blog</a>
        </Link>
        <Link href="/admin/contact">
          <a className={adminStyles.link}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
