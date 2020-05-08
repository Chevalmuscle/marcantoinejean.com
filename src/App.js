import React, { Component } from "react";

import ProjectCard from "./components/ProjectCard";
import NamedProgressBar from "./components/NamedProgressBar";
import ContactForm from "./components/ContactForm";

import styles from "./App.module.css";

import projects from "./data/projects";
import technologies from "./data/technologies";

export default class App extends Component {
  handleGoSeeProjects(e) {
    e.preventDefault();
    this.refs.projects.scrollIntoView();
  }

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
            <button className={styles["see-projet-button"]} onClick={this.handleGoSeeProjects.bind(this)}>
              Voir mes projets
            </button>
          </div>
        </div>
        <div ref="projects" className={`${styles["section"]} ${styles["medium"]}`}>
          <div className={`${styles["section-container"]}`}>
            <h2 className={`${styles["high-emphasis"]} ${styles["section-title"]}`}>Projets</h2>
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
        <div className={`${styles["section"]} ${styles["light"]}`}>
          <div className={`${styles["section-container"]}`}>
            <h2 className={`${styles["section-title"]}`}>Technologies</h2>
            <div className={`${styles["center"]} ${styles["technologies"]}`}>
              <p className={`${styles["technology-subtext"]}`}>
                Voici les principales technologies que j’utilise pour réaliser mes projets personnels. J’accorde une
                attention particulière à l’architecture et la scalabilité du produit ainsi qu’à l’expérience
                utilisateur.
              </p>
              <ul className={`${styles["technology-list"]}`}>
                {technologies.map((technology, i) => {
                  return (
                    <li key={i} className={styles["skill"]}>
                      <NamedProgressBar name={technology.name} percentage={technology.skillPercentage} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles["section"]} ${styles["medium"]}`}>
          <div className={`${styles["section-container"]}`}>
            <h2 className={`${styles["high-emphasis"]} ${styles["section-title"]}`}>Contact</h2>
            <div className={`${styles["center"]}`}>
              <div className={`${styles["contact-form"]}`}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["section"]} ${styles["light"]}`}></div>
      </div>
    );
  }
}
