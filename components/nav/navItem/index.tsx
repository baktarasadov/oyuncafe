import { INavItemProps } from "@/types/header/INav";
import Link from "next/link";
import React from "react";
import styles from "../assets/style/styles.module.css";
import { santepheapFont } from "@/utils/font";
const NavItem: React.FC<INavItemProps> = ({ children, href }) => {
  return (
    <>
      <Link
        className={`${styles.link} ${santepheapFont.className}`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default NavItem;
