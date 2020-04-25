import React from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Name.module.scss";
import inkwell from "../../../images/inkwell.png";

const name = (props) => {
  return (
    <div className={styles.Content}>
      <h3 className={styles.Header}>Choose a name:</h3>
      <form className={styles.Form} onSubmit={props.submit}>
        <input
          className={styles.InputText}
          type="text"
          placeholder="My name is..."
          required
          minLength="2"
          maxLength="25"
          autoFocus
          value={props.value}
          onChange={props.change}
        />
        <input className={styles.InputSubmit} type="submit" value="Submit Name" />
      </form>
      <img className={styles.Inkwell} src={inkwell} alt="Inkwell" />
      <ButtonUndo undo={props.undo} />
    </div>
  );
};

export default name;
