import React, { Component } from "react";

import styles from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar-item-list"]}>
          {this.props.elements.map((element, i) => {
            return (
              <li
                className={styles["navbar-item"]}
                key={i}
                onClick={() => this.props.handleOnElementClick(element)}
              >
                {element.label}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
