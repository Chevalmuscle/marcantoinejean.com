import React, { Component } from "react";

import ProjectCard from "./components/ProjectCard";

import styles from "./App.module.css";

import discordLogo from "./assets/images/projects/discord-logo.png";
import centechLogo from "./assets/images/projects/centech-logo.png";
import adventofcodeLogo from "./assets/images/projects/adventofcode-logo.png";
import vinylLogo from "./assets/images/projects/vinyl-logo.png";

const projects = [
  {
    logo: discordLogo,
    title: "Discord bot",
    link: "https://github.com/chevalmuscle/discordbot",
    description: `Un bot discord qui permet aux utilisateurs de rajouter des 
  commandes spéciales qui jouent de l’audio provenant de youtube. Par exemple, 
  écrire «sax» dans le chat peut faire jouer Epic Sax Guy pendant 10 heures pour 
  titiller vos collègues !`,
  },
  {
    logo: centechLogo,
    title: "Vitalview",
    description: `Une entreprise dans le domaine médicale que j’ai monté avec un 
    collègue en 2019. Le but était d’offrir un dispositif IoT pour surveiller les 
    signes vitaux des patients dans les hôpitaux de façon continue et non-intrusive 
    afin de prévenir la détérioration de leur état de santé.`,
  },
  {
    logo: adventofcodeLogo,
    title: "Advent of code",
    link: "https://github.com/Chevalmuscle/advent-of-code-2019",
    description: `Un calendrier de l’avent avec des défis de programmation que je fais 
    chaque année durant le mois de décembre depuis 2018. La première année en Go et la 
    deuxième en javascript. C’est rare que je les finis parce que je pars en vacance avant 
    la fin.`,
  },
  {
    logo: vinylLogo,
    title: "Collection de vinyle",
    description: `Une application pour classer mes disques vinyle. Il y a trois parties 
    à cette application: la cueillette d’information, la base de données de ma collection 
    et l’affichage(WIP). Cela me permet de chercher plus facilement dans ma collection et 
    paraître sophistiqué.`,
  },
];

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
