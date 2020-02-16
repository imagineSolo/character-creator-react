import React from "react";
import Undo from "../../Button/Undo/Undo";

const traits = props => {
  const physical = [
    "Has a nervous twitch",
    "Smells funny",
    "Gesticules vividly",
    "Has an interesting eye color",
    "Dresses well"
  ];

  const mental = [
    "Is ambitious",
    "Is shy",
    "Is very religious",
    "Courageous",
    "Sceptical",
    "Has a positive attitude"
  ];

  const social = [
    "Laughs loud",
    "Likes to gossip",
    "Likes to meet new people",
    "Trusts only his companions",
    "Drinks a lot",
    "Loves baked potatoes"
  ];

  console.log(physical);
  console.log(mental);
  console.log(social);

  return (
    <div>
      <h3>Personality Traits</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <form onSubmit={props.submit}>
        <label>Add personality trait:</label>
        <input type="text" required minLength="4" maxLength="20" autoFocus />
        <input type="submit" value="Add" />
        <input type="button" value="Random traits" />
      </form>
      <Undo undo={props.undo} />
    </div>
  );
};

export default traits;
