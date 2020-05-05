import React, { Component } from "react";

import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className={`${styles["section"]} ${styles["dark"]}`}>
          <div className={`${styles["first-container"]}`}>
            <h1 className={`${styles["high-emphasis"]} ${styles["big-title"]}`}>Marc-Antoine Jean</h1>
            <div className={`${styles["high-emphasis"]} ${styles["sub-title"]}`}>
              Bonjour ! Je suis un étudiant en génie logiciel à l’École de technologie supérieure à Montréal et prévois
              graduer en décembre 2020.
              <br />
              Il me reste un stage de 4 mois à effectuer.
            </div>
            <button className={styles["see-projet-button"]}>Voir mes projets</button>
          </div>
        </div>
        <div className={`${styles["section"]} ${styles["medium"]}`}></div>
        <div className={`${styles["section"]} ${styles["light"]}`}></div>
        <div className={`${styles["section"]} ${styles["medium"]}`}></div>
        <div className={`${styles["section"]} ${styles["light"]}`}></div>
      </div>
    );
  }
}
