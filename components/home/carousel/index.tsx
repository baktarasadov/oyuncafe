import React, { memo } from "react";
import Image from "next/image";
import styles from "../assets/style/styles.module.css";
import HomePlayerCard from "@/components/home/playerCard";
import { ICarousel } from "@/types/home/ICarousel";
import useCardPagination from "@/hoc/useCardPagination";
import useMaxVisibleCards from "@/hoc/useMaxVisibleCards";
import back from "../assets/icon/back.svg";
import next from "../assets/icon/next.svg";
const HomeCarousel: React.FC<ICarousel> = ({ playerList }) => {
  const maxVisibleCards = useMaxVisibleCards();
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
                <HomePlayerCard
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

export default memo(HomeCarousel);
