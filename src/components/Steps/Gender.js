import React from "react";
import styles from "../../containers/Content.module.scss";

const gender = props => {
  return (
    <section className={styles.Content}>
      <div>
        <p>Select gender:</p>
        <button
          className={`fas fa-venus female + ${styles.Gender}`}
          title="Female"
          onClick={props.female}
        ></button>
        <button
          className={`fas fa-mars male + ${styles.Gender}`}
          title="Male"
          onClick={props.male}
        ></button>
        <button onClick={props.undo}>Undo</button>
      </div>
    </section>
  );
};

export default gender;
