import React, { Component } from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Races.module.scss";

class Race extends Component {
  state = {
    description: ""
  };

  showDescription = e => {
    switch (e.target.id) {
      case "Human":
        this.setState({
          ...this.state,
          description:
            "Humans are the most numerous and versatile of all races. Although they do not live as long as elves or dwarfs, they adapt and learn new things quick. Humans are most susceptible to mind temptations. While choosing attributes, they gain +2 points to the Points Pool to spend on what attribute they like, -1 Willpower."
        });
        break;
      case "Elf":
        this.setState({
          ...this.state,
          description:
            "The oldest known civilised race. They are the masters of the sword and magic - keepers of ancient wisdom. Elves start with +1 Intelligence, +1 Dexterity, -1 Toughness."
        });
        break;
      case "Dwarf":
        this.setState({
          ...this.state,
          description:
            "An old race of mountain people known for their mining skills and fighting prowess. Their elders practice runic magic. Dwarves start with +1 Strength, +1 Toughness, -1 Dexterity."
        });
        break;
      case "Halfling":
        this.setState({
          ...this.state,
          description:
            "Halflings are few in numbers, and not many have heard of them much. These child-like people are known for their trickery skills and courage. They love risk and adventures. Halflings start with +1 Dexterity, +1 Willpower, -1 Strength."
        });
        break;
      case "Tiefling":
        this.setState({
          ...this.state,
          description:
            "Half humans and half demons, Tieflings are a bastard race no one really trust. Only few of them exist in civilised world, hiding in human settlements. Most of them choose to become adventurers. They are masters of deception and posess demonic charm. Tieflings start with +1 Intelligence, +1 Charisma, -1 Willpower."
        });
        break;
      default: {
      }
    }
  };

  render() {
    const options = ["Human", "Elf", "Dwarf", "Halfling", "Tiefling"];

    const mappedOptions = options.map(race => {
      return (
        <div
          className={styles.RaceChoice}
          key={race}
          id={race}
          onClick={this.props.select}
          onPointerEnter={e => this.showDescription(e)}
        >
          {race}
        </div>
      );
    });

    return (
      <section className={styles.Content}>
        <p className={styles.Header}>Select race:</p>
        <div className={styles.RaceChoices}>{mappedOptions}</div>
        <ButtonUndo className={styles.Undo} undo={this.props.undo} />
        <br />
        <div className={styles.Description}>
          <p>{this.state.description}</p>
        </div>
      </section>
    );
  }
}

export default Race;
