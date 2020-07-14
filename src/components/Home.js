import React from "react";
import { Drawer } from "./Drawer";
import styles from "./Home.module.css";

function Home() {
  return (
    <ul>
      <li className={styles["list-item"]}>
        <Drawer title="whoami">
          <p>
            Bacon ipsum dolor amet pig bacon swine jowl, brisket prosciutto ribeye fatback t-bone beef meatloaf ground
            round. Ground round porchetta ham hock jerky pork drumstick frankfurter landjaeger. Cupim alcatra andouille
            bacon shankle. Pork buffalo bacon, pork chop cupim chislic burgdoggen pastrami cow turducken salami doner
            pork loin.
          </p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Personnality">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Workstyle">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Social">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Education">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Interests/Outside the matrix">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Quotes">
          <p></p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title="Inspiration/References">
          <p></p>
        </Drawer>
      </li>
    </ul>
  );
}

export { Home };
