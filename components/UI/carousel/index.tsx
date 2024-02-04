import React, { memo, useState } from "react";
import back from "./assets/icon/back.svg";
import next from "./assets/icon/next.svg";
import Image from "next/image";
import styles from "./assets/style/styles.module.css";
import PlayerCard from "@/components/players/playerCard";
import { ICarousel } from "@/types/ui/ICarousel";
import useCardPagination from "@/hoc/useCardPagination";
const Carousel: React.FC<ICarousel> = ({ playerList }) => {
  const maxVisibleCards = 6;
  const { currentStartIndex, handleLeftClick, handleRightClick, visibleCards } =
    useCardPagination(0, maxVisibleCards, playerList);
  return (
    <>
      <div>
        <div className={styles.carousel}>
          <Image src={back} alt="back" width={15} onClick={handleLeftClick} />
          <div className={styles.content}>
            {visibleCards.slice(0, 6).map((element) => (
              <div key={element.id}>
                <PlayerCard
                  id={element.id}
                  score={element.score}
                  name={element.score}
                />
              </div>
            ))}
          </div>
          <Image src={next} alt="next" width={15} onClick={handleRightClick} />
        </div>
      </div>
    </>
  );
};

export default memo(Carousel);
