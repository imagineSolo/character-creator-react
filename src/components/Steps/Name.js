import React from "react";
import ButtonUndo from "../Button/Undo";

const name = props => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>Choose a name:</label>
        <input
          type="text"
          placeholder="My name is..."
          required
          minLength="2"
          maxLength="18"
          autoFocus
          value={props.value}
          onChange={props.change}
        />
        <input type="submit" value="Submit Name" />
      </form>
      <ButtonUndo undo={props.undo} />
    </div>
  );
};

export default name;
