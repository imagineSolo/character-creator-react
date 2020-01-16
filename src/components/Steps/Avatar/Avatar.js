import React, { Component } from "react";
import styles from "./Avatar.module.scss";
import HF_01 from "../../../images/Human/Female/HF_01.png";
import HF_02 from "../../../images/Human/Female/HF_02.png";
import HF_03 from "../../../images/Human/Female/HF_03.png";
import HF_04 from "../../../images/Human/Female/HF_04.png";

class Avatar extends Component {
  state = {
    image: ""
  };
  render() {
    return (
      <div className={styles.Avatar}>
        <p>Select your character's portrait:</p>
        <div className={styles.Portraits}>
          <div>
            <img src={HF_01} alt="Portrait" />
          </div>
          <div>
            <img src={HF_02} alt="Portrait" />
          </div>
          <div>
            <img src={HF_03} alt="Portrait" />
          </div>
          <div>
            <img src={HF_04} alt="Portrait" />
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
