import React from "react";

import solarSystemImage from "./assets/images/solar-system.png";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div class="text-container">
          <h1 className="text high-emphasis">Marc-Antoine Jean</h1>
          <div>
            <div className="text high-emphasis">
              Work in progress{" "}
              <span role="img" aria-label="smiley">
                🙂
              </span>
            </div>
            <div className="text high-emphasis">
              Contact me via{" "}
              <a href="mailto:me@marcantoinejean.com" target="_blank">me@marcantoinejean.com</a>
            </div>
          </div>
        </div>
        <img id="solar-system" src={solarSystemImage} alt="solar-system" />
      </div>
    );
  }
}
