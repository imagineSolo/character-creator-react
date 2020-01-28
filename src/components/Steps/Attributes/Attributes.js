import React, { Component } from "react";
import ButtonUndo from "../../Button/Undo";
import styles from "./Attributes.module.scss";

class Attributes extends Component {
  state = {};
  render() {
    return (
      <div className={styles.Attributes}>
        <p>Select attributes:</p>
        <p>
          Shape your character by spending your free points on the attributes.
          You can also lower an attribute value to gain some extra points. The
          highest value is 20, and the lowest value is 3 (although the race and
          class selection will affect this value).
        </p>
        <div>
          <p>
            Points left: <span>{this.props.pool}</span>
          </p>
          <p>
            Strength: <button>+</button>
            <span>{this.props.strength}</span> <button>-</button>
          </p>
          <p>
            Dexterity: <button>+</button>
            <span>{this.props.dexterity}</span> <button>-</button>
          </p>
          <p>
            Toughness: <button>+</button>
            <span>{this.props.toughness}</span> <button>-</button>
          </p>
          <p>
            Intelligence: <button>+</button>
            <span>{this.props.intelligence}</span> <button>-</button>
          </p>
          <p>
            Willpower: <button>+</button>
            <span>{this.props.willpower}</span> <button>-</button>
          </p>
          <p>
            Charisma: <button>+</button>
            <span>{this.props.charisma}</span> <button>-</button>
          </p>
        </div>
        <ButtonUndo undo={this.props.undo} />
      </div>
    );
  }
}

export default Attributes;
