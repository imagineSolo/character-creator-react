import React, { Component } from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Avatar.module.scss";

import HF_01 from "../../../images/Human/Female/HF_01.png";
import HF_02 from "../../../images/Human/Female/HF_02.png";
import HF_03 from "../../../images/Human/Female/HF_03.png";
import HF_04 from "../../../images/Human/Female/HF_04.png";
import HM_01 from "../../../images/Human/Male/HM_01.png";
import HM_02 from "../../../images/Human/Male/HM_02.png";
import HM_03 from "../../../images/Human/Male/HM_03.png";
import HM_04 from "../../../images/Human/Male/HM_04.png";
import DF_01 from "../../../images/Dwarf/Female/DF_01.png";
import DF_02 from "../../../images/Dwarf/Female/DF_02.png";
import DF_03 from "../../../images/Dwarf/Female/DF_03.png";
import DF_04 from "../../../images/Dwarf/Female/DF_04.png";
import DM_01 from "../../../images/Dwarf/Male/DM_01.png";
import DM_02 from "../../../images/Dwarf/Male/DM_02.png";
import DM_03 from "../../../images/Dwarf/Male/DM_03.png";
import DM_04 from "../../../images/Dwarf/Male/DM_04.png";
import EF_01 from "../../../images/Elf/Female/EF_01.png";
import EF_02 from "../../../images/Elf/Female/EF_02.png";
import EF_03 from "../../../images/Elf/Female/EF_03.png";
import EF_04 from "../../../images/Elf/Female/EF_04.png";
import EM_01 from "../../../images/Elf/Male/EM_01.png";
import EM_02 from "../../../images/Elf/Male/EM_02.png";
import EM_03 from "../../../images/Elf/Male/EM_03.png";
import EM_04 from "../../../images/Elf/Male/EM_04.png";
import HLF_01 from "../../../images/Halfling/Female/HLF_01.png";
import HLF_02 from "../../../images/Halfling/Female/HLF_02.png";
import HLF_03 from "../../../images/Halfling/Female/HLF_03.png";
import HLF_04 from "../../../images/Halfling/Female/HLF_04.png";
import HLM_01 from "../../../images/Halfling/Male/HLM_01.png";
import HLM_02 from "../../../images/Halfling/Male/HLM_02.png";
import HLM_03 from "../../../images/Halfling/Male/HLM_03.png";
import HLM_04 from "../../../images/Halfling/Male/HLM_04.png";
import TF_01 from "../../../images/Tiefling/Female/TF_01.png";
import TF_02 from "../../../images/Tiefling/Female/TF_02.png";
import TF_03 from "../../../images/Tiefling/Female/TF_03.png";
import TF_04 from "../../../images/Tiefling/Female/TF_04.png";
import TM_01 from "../../../images/Tiefling/Male/TM_01.png";
import TM_02 from "../../../images/Tiefling/Male/TM_02.png";
import TM_03 from "../../../images/Tiefling/Male/TM_03.png";
import TM_04 from "../../../images/Tiefling/Male/TM_04.png";

class Avatar extends Component {
  state = {
    portraits: [
      HF_01,
      HF_02,
      HF_03,
      HF_04,
      HM_01,
      HM_02,
      HM_03,
      HM_04,
      DF_01,
      DF_02,
      DF_03,
      DF_04,
      DM_01,
      DM_02,
      DM_03,
      DM_04,
      EF_01,
      EF_02,
      EF_03,
      EF_04,
      EM_01,
      EM_02,
      EM_03,
      EM_04,
      HLF_01,
      HLF_02,
      HLF_03,
      HLF_04,
      HLM_01,
      HLM_02,
      HLM_03,
      HLM_04,
      TF_01,
      TF_02,
      TF_03,
      TF_04,
      TM_01,
      TM_02,
      TM_03,
      TM_04,
    ],
    filtered: [],
  };

  loadPortraits = () => {
    console.log("loading portraits...");
    let portraits = this.state.portraits;
    let filteredPortraits = portraits;
    switch (this.props.gender) {
      case "Female":
        switch (this.props.race) {
          case "Human":
            filteredPortraits = portraits.filter((img) => img.indexOf("HF") > -1);
            break;
          case "Dwarf":
            filteredPortraits = portraits.filter((img) => img.indexOf("DF") > -1);
            break;
          case "Elf":
            filteredPortraits = portraits.filter((img) => img.indexOf("EF") > -1);
            break;
          case "Halfling":
            filteredPortraits = portraits.filter((img) => img.indexOf("HLF") > -1);
            break;
          case "Tiefling":
            filteredPortraits = portraits.filter((img) => img.indexOf("TF") > -1);
            break;
          default:
            return;
        }
        break;
      case "Male":
        switch (this.props.race) {
          case "Human":
            filteredPortraits = portraits.filter((img) => img.indexOf("HM") > -1);
            break;
          case "Dwarf":
            filteredPortraits = portraits.filter((img) => img.indexOf("DM") > -1);
            break;
          case "Elf":
            filteredPortraits = portraits.filter((img) => img.indexOf("EM") > -1);
            break;
          case "Halfling":
            filteredPortraits = portraits.filter((img) => img.indexOf("HLM") > -1);
            break;
          case "Tiefling":
            filteredPortraits = portraits.filter((img) => img.indexOf("TM") > -1);
            break;
          default:
            return;
        }
        break;
      default:
        return;
    }
    this.setState({
      filtered: filteredPortraits,
    });
  };

  componentDidMount() {
    this.loadPortraits();
  }

  render() {
    const mappedPortraits = this.state.filtered.map((el, index) => {
      return (
        <div key={index}>
          <img src={el} key={index} alt="Portrait" onClick={(e) => this.props.selectPortrait(e.target.src)} />
        </div>
      );
    });

    return (
      <div className={styles.Avatar}>
        <p className={styles.Header}>Select your character's portrait:</p>
        <div className={styles.Portraits}>{mappedPortraits}</div>
        <ButtonUndo undo={this.props.undo} />
      </div>
    );
  }
}

export default Avatar;
