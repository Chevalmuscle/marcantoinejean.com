import React, { Component } from "react";

import styles from "./Spinner.module.css";

export default class Spinner extends Component {
  render() {
    return <div id={styles["spinner"]}></div>;
  }
}
