import React, { Component } from "react";

import styles from "./ProjectCard.module.css";
import { ReactComponent as GithubLogo } from "../assets/svg/github-white.svg";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["image-container"]}>
          <img className={styles["image"]} src={this.props.logo} alt={this.props.title}></img>
        </div>
        <div className={styles["description-overlay"]}>
          <div className={styles["description-container"]}>
            <div className={styles["title"]}>
              {this.props.title}{" "}
              {this.props.link !== undefined && (
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                  <GithubLogo />
                </a>
              )}
            </div>
            <div className={styles["description"]}>{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}
