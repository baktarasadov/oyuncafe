import React from "react";
import styles from "./assets/style/styles.module.css";
import Image from "next/image";
import userImage from "./assets/icons/man.jpg";
import starIcon from "./assets/icons/star.png";
import medalIcon from "./assets/icons/medal.png";
import cupIcon from "./assets/icons/cup.png";
interface TableScoreProps {
  data: {
    userName: string;
    userLevel: number;
    scoreNum: number;
  }[];
}

const Table: React.FC<TableScoreProps> = ({ data }) => {
  return (
    <table className={styles.customers}>
      <thead>
        <tr>
          <th>OYUNCU</th>
          <th>SEVİYE</th>
          <th>KUPA</th>
          <th>ROZET</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr>
            <td>
              <div className={styles.userContent}>
                <button className={styles.userId}>{index + 1}</button>
                <Image
                  className={styles.userImage}
                  src={userImage}
                  alt="user"
                />
                <span className={styles.userName}>{data.userName}</span>
              </div>
            </td>
            <td>
              <div className={styles.userContent}>
                <Image
                  className={styles.levelImage}
                  src={starIcon}
                  alt="star"
                />
                <span className={styles.userLevel}>level {data.userLevel}</span>
              </div>
            </td>
            <td>
              <div className={styles.userContent}>
                <Image
                  className={styles.medalıccon}
                  src={medalIcon}
                  alt="medal"
                />
              </div>
            </td>
            <td>
              <div className={styles.userContent}>
                <Image className={styles.cupIcon} src={cupIcon} alt="cup" />
                <span className={styles.userScore}>{data.scoreNum}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
