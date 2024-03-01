import React from "react";
import styles from "../css/posterArea.module.css";

function PosterArea() {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src="images/watch.png" alt="" />
      </div>
      <div className={styles.poster}>
        <img src="images/phone.png" alt="" />
      </div>
      <div className={styles.poster}>
        <img src="images/bottle.png" alt="" />
      </div>
      <div className={styles.span}>
        <img src="images/span.png" alt="" />
      </div>
    </div>
  );
}

export default PosterArea;
