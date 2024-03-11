import Alma from "@/components/alma";

import React from "react";

import Carousel from "./(lobi)/carousel";
import LobiFooter from "./(lobi)/footer";
import RankingTable from "./(lobi)/rankingTable";

const page = () => {
  return (
    <div>
      <Carousel />

      <LobiFooter />
      {/* <RankingTable /> */}
    </div>
  );
};

export default page;
