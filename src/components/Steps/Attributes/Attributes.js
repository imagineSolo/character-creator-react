import React, { Component } from "react";
import ButtonUndo from "../../Button/Undo";
import styles from "./Attributes.module.scss";

class Attributes extends Component {
  state = {};
  render() {
    return (
      <div className={styles.Attributes}>
        <h3>Select attributes:</h3>
        <p>
          Shape your character by spending your free points on the attributes.
          You can also lower an attribute value to gain some extra points. The
          highest value is 20, and the lowest value is 3 (although the race and
          class selection will affect this value).
        </p>
        <div className={styles.Points}>
          <p>
            Strength:
            <button
              className={styles.Button}
              onClick={() => this.props.increment("str")}
            >
              <span>+</span>
            </button>
            <span>{this.props.strength}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("str")}
            >
              <span>-</span>
            </button>
          </p>
          <p>
            Dexterity:
            <button
              className={styles.Button}
              onClick={e => this.props.increment("dex")}
            >
              <span>+</span>
            </button>
            <span>{this.props.dexterity}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("str")}
            >
              <span>-</span>
            </button>
          </p>
          <p>
            Toughness:
            <button
              className={styles.Button}
              onClick={e => this.props.increment("tou")}
            >
              <span>+</span>
            </button>
            <span>{this.props.toughness}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("tou")}
            >
              <span>-</span>
            </button>
          </p>
          <p>
            Intelligence:
            <button
              className={styles.Button}
              onClick={e => this.props.increment("int")}
            >
              <span>+</span>
            </button>
            <span>{this.props.intelligence}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("int")}
            >
              <span>-</span>
            </button>
          </p>
          <p>
            Willpower:
            <button
              className={styles.Button}
              onClick={e => this.props.increment("will")}
            >
              <span>+</span>
            </button>
            <span>{this.props.willpower}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("will")}
            >
              <span>-</span>
            </button>
          </p>
          <p>
            Charisma:
            <button
              className={styles.Button}
              onClick={e => this.props.increment("cha")}
            >
              <span>+</span>
            </button>
            <span>{this.props.charisma}</span>
            <button
              className={styles.Button}
              onClick={() => this.props.decrement("cha")}
            >
              <span>-</span>
            </button>
          </p>
        </div>
        <p>
          Points left: <span>{this.props.pool}</span>
        </p>
        <div className={styles.Buttons}>
          <ButtonUndo undo={this.props.undo} />
          <button className={styles.Apply}>Apply</button>
        </div>
      </div>
    );
  }
}

export default Attributes;
