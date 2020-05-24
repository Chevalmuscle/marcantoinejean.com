import React, { Component } from "react";

import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

import styles from "./App.module.css";

const navbarElements = [
  { label: "À propos", ref: "about" },
  { label: "Projets", ref: "projects" },
  { label: "Technologies", ref: "technologies" },
  { label: "Contact", ref: "contact" },
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar elements={navbarElements} />
        <div>
          <ContactForm />
        </div>
      </div>
    );
  }
}
