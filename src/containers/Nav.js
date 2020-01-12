import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <NavLink exact to="/">New Character</NavLink>
        </li>
        <li>
          <NavLink to="/saved">Saved Characters</NavLink>
        </li>
        <li>
          <a
            href="https://github.com/imagineSolo"
            to="https://github.com/imagineSolo"
          >
            <i className={`fab fa-github + ${styles.Github}`}></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
