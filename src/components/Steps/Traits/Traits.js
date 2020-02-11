import React from "react";
import Undo from "../../Button/Undo/Undo";

const traits = props => {
  return (
    <div>
      <h3>Traits</h3>
      <Undo undo={props.undo} />
    </div>
  );
};

export default traits;
