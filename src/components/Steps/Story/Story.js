import React, { Component } from "react";
import styles from "./Story.module.scss";

class Story extends Component {
  state = {};

  render() {
    return (
      <div className={styles.Content}>
        <h3 className={styles.Header}>Backstory</h3>
      </div>
    );
  }
}

export default Story;
