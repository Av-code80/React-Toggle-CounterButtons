import React, { useState } from "react";
import styles from "./Button.module.css";


const Button = ({ buttonPlus, buttonMinus, buttonReset, counting }) => {
  const [toggled, setToggled] = useState(true); // for managing toggle

  const handleToggling = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <>
      <div className={styles.wrapperButton}>
        {toggled && (
          <div className={styles.headerButton}>
            <h1>Counter Buttons</h1>
            <span className={styles.cart}>
              <div>Number : {counting}</div>
            </span>
          </div>
        )}
        <div>
          <span className={styles.wrapperToggle}>
            <button
              type="button"
              onClick={handleToggling}
              className={styles.toggle}
            >
              {toggled ? "TOGGLE COUNTER" : "SHOW COUNTER"}
            </button>
          </span>
          <button
            type="button"
            onClick={() => buttonPlus()}
            className={styles.designButton}
          >
            +
          </button>

          <button
            type="button"
            onClick={() => buttonMinus()}
            className={styles.designButton}
          >
            -
          </button>
        </div>
        <button onClick={() => buttonReset()} className={styles.resetButton}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Button;
