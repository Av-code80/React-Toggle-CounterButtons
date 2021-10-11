import React from 'react'
import styles from './MainHeader.module.css'

const MainHeader = ({headerCounting}) => {
  //  const [cart, setCart] = useState(0);

    return (
      <>
        <header className={styles.headerButton}>
          <h1>React Button Project</h1>
          <div className={styles.cart}>
            <span>
              {headerCounting}
            </span>
          </div>
        </header>
      </>
    );
}

export default MainHeader