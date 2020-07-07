import React, { Component } from "react";
import { Drawer } from "./components/Drawer";
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div id={styles["cover"]}></div>
        <div id={styles["main-container"]}>
          <div>
            <h1>Marc-Antoine Jean</h1>
            <p>
              Bacon ipsum dolor amet pig bacon swine jowl, brisket prosciutto
              ribeye fatback t-bone beef meatloaf ground round. Ground round
              porchetta ham hock jerky pork drumstick frankfurter landjaeger.
            </p>
          </div>
          <div className={styles["navbar"]}>
            <span className={styles["navbar-item"]}>Me</span>
            <span className={styles["navbar-item"]}>Email</span>
            <span className={styles["navbar-item"]}>Resume</span>
            <span className={styles["navbar-item"]}>Reading List</span>
          </div>
          <div className={styles["content-container"]}>
            {renderMeElements()}
          </div>
        </div>
      </div>
    );
  }
}

function renderMeElements() {
  return (
    <ul>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="whoami">
          <p>
            Bacon ipsum dolor amet pig bacon swine jowl, brisket prosciutto
            ribeye fatback t-bone beef meatloaf ground round. Ground round
            porchetta ham hock jerky pork drumstick frankfurter landjaeger.
            Cupim alcatra andouille bacon shankle. Pork buffalo bacon, pork chop
            cupim chislic burgdoggen pastrami cow turducken salami doner pork
            loin.
          </p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Personnality">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Workstyle">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Social">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Education">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Interests/Outside the matrix">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Quotes">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer className="drawer" title="Inspiration/References">
          <p></p>
        </Drawer>
      </li>
    </ul>
  );
}
