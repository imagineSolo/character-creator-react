import React from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Gender.module.scss";

const gender = props => {
  return (
    <section className={styles.Content}>
      <div className={styles.Gender}>
        <p className={styles.Header}>Select gender:</p>
        <div>
          <button
            className={`fas fa-venus female + ${styles.GenderButton}`}
            title="Female"
            id="female"
            onClick={e => props.select(e.target.id)}
          />
          <button
            className={`fas fa-mars male + ${styles.GenderButton}`}
            title="Male"
            id="male"
            onClick={e => props.select(e.target.id)}
          />
        </div>
        <ButtonUndo undo={props.undo} />
        <br />
        <p>Gender selection does not influence any of your character's statistics.</p>
      </div>
    </section>
  );
};

export default gender;
