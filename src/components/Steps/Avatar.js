import React, { Component } from "react";
import HF_01 from "../../images/Human/Female/HF_01.png";
import HF_02 from "../../images/Human/Female/HF_02.png";
import HF_03 from "../../images/Human/Female/HF_03.png";
import HF_04 from "../../images/Human/Female/HF_04.png";

class Avatar extends Component {
  state = {
    image: ""
  };
  render() {
    return (
      <div>
        <p>Select your character's portrait:</p>
        <div>
          <img src={HF_01} alt="" />
        </div>
        <div>
          <img src={HF_02} alt="" />
        </div>
        <div>
          <img src={HF_03} alt="" />
        </div>
        <div>
          <img src={HF_04} alt="" />
        </div>
      </div>
    );
  }
}

export default Avatar;
