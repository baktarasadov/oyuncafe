import React from "react";
import Image from "next/image";
import styles from "./assets/style/styles.module.css";
import gameCoin from "./assets/icons/game-coin.svg";

interface CarouselItemProps {
  data: {
    livingOwner: string;
    gameName: string;
    minPrice: number;
    players: number;
    image: any;
    imagedesc: string;
    gameIcon: any;
    backgroundColor: string;
    backgroundColorButton: string;
  };
}

const CarouselItem: React.FC<CarouselItemProps> = ({ data }) => {
  return (
    <div
      className={`${styles.container}`}
      style={{ background: data.backgroundColor }}
    >
      <div className={`${styles.mainLiving}`}>
        <span>
          <Image
            className={`${styles.ıconStyle}`}
            src={data.gameIcon}
            alt={data.imagedesc}
          />
        </span>
        <span className={`${styles.headLiving}`}>
          Salon Sahibi: {data.livingOwner}
        </span>
      </div>
      <h1 className={`${styles.headGameName}`}>{data.gameName}</h1>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={`${styles.image}`}
          src={data.image}
          alt={data.imagedesc}
        />
        <span className={`${styles.ımageContent1}`}>{data.players} Oyuncu</span>
        <span className={`${styles.ımageContent2}`}>
          {data.players} Bitmesine
        </span>
      </div>
      <div>
        <button
          className={`${styles.headEntryGame}`}
          style={{ background: data.backgroundColorButton }}
        >
          <div className={`${styles.headEntryGameMinEntry}`}>Minimum Giriş</div>
          <div className={`${styles.headEntryGamePrice}`}>
            <Image src={gameCoin} alt={data.imagedesc} />
            <span>{data.minPrice}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
