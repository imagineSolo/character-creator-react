import React, { Component } from "react";
import ButtonUndo from "../Button/Undo";
import styles from "../../containers/Content.module.scss";

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
    return (
      <section className={styles.Content}>
        <div>
          <p>Select class:</p>
          <div>
            <span
              id="Warrior"
              onClick={this.props.select}
              onPointerEnter={e => this.showDescription(e)}
            >
              Warrior
            </span>
          </div>
          <div>
            <span
              id="Wizard"
              onClick={this.props.select}
              onPointerEnter={e => this.showDescription(e)}
            >
              Wizard
            </span>
          </div>
          <div>
            <span
              id="Rogue"
              onClick={this.props.select}
              onPointerEnter={e => this.showDescription(e)}
            >
              Rogue
            </span>
          </div>
          <div>
            <span
              id="Cleric"
              onClick={this.props.select}
              onPointerEnter={e => this.showDescription(e)}
            >
              Cleric
            </span>
          </div>
          <div>
            <span
              id="Ranger"
              onClick={this.props.select}
              onPointerEnter={e => this.showDescription(e)}
            >
              Ranger
            </span>
          </div>
          <ButtonUndo undo={this.props.undo} />
        </div>
        <p>{this.state.description}</p>
      </section>
    );
  }
}

export default Classes;
