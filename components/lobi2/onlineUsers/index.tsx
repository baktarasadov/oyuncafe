import Button from "@/components/UI/button";
import styles from "./styles.module.css"
import headerLeftImg from "../assets/images/usersHeaderLeft.png";
import Image from "next/image";
import OnlineUserCard from "../onlineUserCard";

const OnlineUsers = () => {
  return (
    <>
      <div className={styles.onlineUsers}>
        <div className={styles.onlineUsersHead}>
            <div className={styles.radio}>

            </div>
            <h3>4 Online</h3>
        </div>

        <div className={styles.onlineUsersBody}>
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
          <OnlineUserCard />
        </div>
      </div>
    </>
  );
};

export default OnlineUsers;
