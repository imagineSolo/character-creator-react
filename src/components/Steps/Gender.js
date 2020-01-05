import React from "react";
import ButtonUndo from "../Button/Undo";
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
        <ButtonUndo undo={props.undo} />
      </div>
    </section>
  );
};

export default gender;
