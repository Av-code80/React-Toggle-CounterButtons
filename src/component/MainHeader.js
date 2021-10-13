import React, { useState } from "react";

import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import styles from "./MainHeader.module.css";


const MainHeader = ({ headerCounting }) => {
  const [headerToggled, setHeaderToggled] = useState(false);

  const handlerHeader = () => {
    setHeaderToggled((toggled) => !toggled);
  };

  return (
    <>
      <header
        className={`${styles.headerButton} 
        ${headerToggled ? styles.headerColorChanged : ""}`}
      >
        <IconContext.Provider value={{ color: "#ffffff" }}>
          <FaBars className={styles.faBars} onClick={handlerHeader} />
        </IconContext.Provider>
        <h1>{!headerToggled ? "React Counter Project" : "Counter Header"}</h1>
        <span className={styles.cart}>{headerCounting}</span>
      </header>
    </>
  );
};

export default MainHeader;
