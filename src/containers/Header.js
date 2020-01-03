import React from "react";
import styles from "./Header.module.scss";

const header = () => {
  return (
    <header className={styles.Header}>
      <h1>Fantasy Character Creator</h1>
    </header>
  );
};

export default header;
