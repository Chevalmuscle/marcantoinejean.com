import React, { Component } from "react";

import ContactForm from "./components/ContactForm";

import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Marc-Antoine Jean</h1>
        <h2>
          software engineering student at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.etsmtl.ca/en/home"
          >
            École de technologie supérieure
          </a>
        </h2>
        <div className={styles["contact-section"]}>
          <div className={styles["contact-form-container"]}>
            <h3>Contact me</h3>
            <div className={styles["contact-form"]}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
