import React from "react";
import ButtonUndo from "../Button/Undo";

const background = props => {
  return (
    <div>
      <form onChange={props.change} onSubmit={props.submit}>
        <label>Select background:</label>
        <select name="Background">
          <option value="select" selected disabled>
            --Select--
          </option>
          <option value="Commoner">Commoner</option>
          <option value="Criminal">Criminal</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Bounty Hunter">Bounty Hunter</option>
          <option value="Outlander">Outlander</option>
          <option value="Noble">Noble</option>
          <option value="Sage">Sage</option>
          <option value="Soldier">Soldier</option>
        </select>
        <input type="submit" value="Submit" />
        <ButtonUndo undo={props.undo} />
      </form>
    </div>
  );
};

export default background;
