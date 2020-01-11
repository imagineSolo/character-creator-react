import React from "react";
import ButtonUndo from "../Button/Undo";

const background = props => {
  return (
    <div>
      <form onChange={props.change} onSubmit={props.submit}>
        <label>Select background:</label>
        <select name="Background">
          <option value="commoner">Commoner</option>
          <option value="criminal">Criminal</option>
          <option value="entertainer">Entertainer</option>
          <option value="investigator">Investigator</option>
          <option value="outlander">Outlander</option>
          <option value="noble">Noble</option>
          <option value="sage">Sage</option>
          <option value="Soldier">Soldier</option>
        </select>
        <input type="submit" value="Submit" />
        <ButtonUndo undo={props.undo} />
      </form>
    </div>
  );
};

export default background;
