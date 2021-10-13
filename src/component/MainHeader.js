import React from 'react'

import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import styles from './MainHeader.module.css'



const MainHeader = ({headerCounting}) => {

    return (
      <>
        <header className={styles.headerButton}>
          <IconContext.Provider value={{ color: "#ffffff" }}>
            <FaBars className={styles.faBars} />
          </IconContext.Provider>
          <h1>React Button Project</h1>
          <span className={styles.cart}>{headerCounting}</span>
        </header>
      </>
    );
}

export default MainHeader
