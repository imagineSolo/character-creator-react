import React, { Component } from "react";
import ButtonUndo from "../../Button/Undo/Undo";
import styles from "./Classes.module.scss";

class Classes extends Component {
  state = {
    description: ""
  };

  showDescription = e => {
    switch (e.target.id) {
      case "Warrior":
        this.setState({
          ...this.state,
          description:
            "Warriors are the masters of head to head combat. Former soldiers, bodyguards, gladiators, hunters, knights - they all make excellent warriors. Add +1 Strength, +1 Toughness and an Intimidation skill."
        });
        break;
      case "Wizard":
        this.setState({
          ...this.state,
          description:
            "Wizards are people who awakened magic potential in them, students od magic casting arcane spells. They come from various origins - students of colleges of magic, hedge wizards, witches, warlocks or runic mages. Add +2 Intelligence and Arcana skill."
        });
        break;
      case "Rogue":
        this.setState({
          ...this.state,
          description:
            "Rogues are the masters of trickery, deception and stealth. They can specialize in assassinations, stealing or tomb raiding. They often have criminal background. Add +2 Dexterity and Stealth skill."
        });
        break;
      case "Cleric":
        this.setState({
          ...this.state,
          description:
            "Clerics are people dedicated to a service to a certain god of their pantheon. In return for their work, they receive divine powers to aid them in their missions. Add +2 Willpower and Religion skill."
        });
        break;
      case "Ranger":
        this.setState({
          ...this.state,
          description:
            "Experts in the wilderness, rangers specialize in hunting monsters and outlaws. They are the best guides in the outlands. They are the ultimate survivalists and know nature like no one. Add +1 Dexterity, +1 Toughness and Nature skill."
        });
        break;
      default: {
      }
    }
  };

  render() {
    const options = ["Warrior", "Wizard", "Rogue", "Cleric", "Ranger"];

    const mappedOptions = options.map(charClass => {
      return (
        <div
          className={styles.ClassChoice}
          key={charClass}
          id={charClass}
          onClick={this.props.select}
          onPointerEnter={e => this.showDescription(e)}
        >
          {charClass}
        </div>
      );
    });

    return (
      <section className={styles.Content}>
        <div>
          <p className={styles.Header}>Select class:</p>
          <div className={styles.ClassChoices}>{mappedOptions}</div>
          <ButtonUndo undo={this.props.undo} />
        </div>
        <div className={styles.Description}>
          <p>{this.state.description}</p>
        </div>
      </section>
    );
  }
}

export default Classes;
