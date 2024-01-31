import NavList from "@/components/nav/navList";
import React, { memo } from "react";

const Header = () => {
  return (
    <>
      <header style={{ position: "absolute", width: "100%", top: 0 }}>
        <nav>
          <NavList />
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
