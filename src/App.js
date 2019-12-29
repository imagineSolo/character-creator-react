import React from "react";
import styles from "./App.module.scss";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import CharSheet from "./components/CharSheet";

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Header />
        <Nav />
      </div>
      <Content />
      <CharSheet />
    </div>
  );
}

export default App;
