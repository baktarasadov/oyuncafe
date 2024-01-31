import NavList from "@/components/nav/navList";
import React, { memo } from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavList />
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
