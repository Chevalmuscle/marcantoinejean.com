import React, { Component } from "react";

import ProjectCard from "./components/ProjectCard";

import styles from "./App.module.css";

import projects from "./data/projects";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className={`${styles["section"]} ${styles["dark"]} ${styles["center"]}`}>
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
        <div className={`${styles["section"]} ${styles["medium"]}`}>
          <div className={`${styles["second-container"]}`}>
            <h1 className={`${styles["high-emphasis"]} ${styles["section-title"]}`}>Projets</h1>
            <div className={`${styles["center"]}`}>
              <div className={`${styles["project-cards"]}`}>
                {projects.map((project, i) => {
                  return (
                    <div key={i} className={styles["project-card"]}>
                      <ProjectCard
                        logo={project.logo}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["section"]} ${styles["light"]}`}></div>
        <div className={`${styles["section"]} ${styles["medium"]}`}></div>
        <div className={`${styles["section"]} ${styles["light"]}`}></div>
      </div>
    );
  }
}
