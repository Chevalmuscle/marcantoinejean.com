import React, { Component } from "react";

import styles from "./NamedProgressBar.module.css";

export default class NamedProgressBar extends Component {
  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["name"]}>{this.props.name}</div>
        <div className={styles["progress-bar"]}>
          <div className={styles["inner-progress-bar"]} style={{ width: `${this.props.percentage}%` }}></div>
        </div>
      </div>
    );
  }
}
