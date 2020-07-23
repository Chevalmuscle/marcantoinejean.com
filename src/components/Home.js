import React from "react";
import { Drawer } from "./Drawer";
import styles from "./Home.module.css";
import { useI18n } from "react-simple-i18n";
import insightsPersona from "../assets/images/insights_persona.png";
import insightsFlow from "../assets/images/insights_flow.png";
import insightsGraph from "../assets/images/insights_graph.png";

function Home() {
  const { t } = useI18n();

  return (
    <ul>
      <li className={styles["list-item"]}>
        <Drawer title={`${"🧍‍♂️"} ${t("home.whoami.title")}`}>
          <p>{t("home.whoami.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"🧠"} ${t("home.personality.title")}`}>
          <div>
            {t("home.personality.insights.text1")}{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.insights.com/products/insights-discovery/">
              Insights Discovery
            </a>{" "}
            {t("home.personality.insights.text2")}
            <br />
            <q>{t("home.personality.insights.text3")}</q>
            <br />
            {t("home.personality.insights.text4")}
          </div>
          <div className={styles["insights-graph-container"]}>
            <div className={styles["insights-column-graph-container"]}>
              <div className={styles["insights-column-graph"]}>
                <span>{t("home.personality.insights.personaGraphTitle")}</span>
                <img className={styles["insights-graph"]} src={insightsPersona} alt="Insights Persona" />
              </div>
              <div className={styles["insights-column-graph"]}>
                <span>{t("home.personality.insights.flowGraphTitle")}</span>
                <img className={styles["insights-graph"]} src={insightsFlow} alt="Insights Evolution" />
              </div>
            </div>
            <img className={styles["insights-graph"]} src={insightsGraph} alt="Insights Graph" />
          </div>
          {t("home.personality.insights.outro")}
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"🤓"} ${t("home.workstyle.title")}`}>
          <div>
            <p>
              {t("home.workstyle.text1")}{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://developer.apple.com/videos/play/wwdc2019/239/">
                WWDC 2019 Great Developer Habits
              </a>{" "}
              {t("home.workstyle.text2")}
            </p>
          </div>
          <br />
          <div>
            {t("home.workstyle.guidelines.title")}
            <ul className={styles["guideline-list"]}>
              <li>
                <strong>{t("home.workstyle.guidelines.organize.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.organize.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.track.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.track.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.document.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.document.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.test.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.test.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.analyze.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.analyze.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.evaluate.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.evaluate.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.decouple.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.decouple.content")}
              </li>
              <li>
                <strong>{t("home.workstyle.guidelines.manage.title")}:</strong>{" "}
                {t("home.workstyle.guidelines.manage.content")}
              </li>
            </ul>
          </div>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"🗣"} ${t("home.social.title")}`}>
          <ul>
            <li>
              <span role="img" aria-label="linkedin-emoji">
                🧳
              </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marc-antoine-jean/">
                Linkedin
              </a>
            </li>
            <li>
              <span role="img" aria-label="github-emoji">
                🐙
              </span>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/chevalmuscle">
                Github
              </a>
            </li>
          </ul>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"📚"} ${t("home.education.title")}`}>
          <ul>
            <li>
              2016-2020 {t("home.education.ets")}{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.etsmtl.ca/">
                École de technologie supérieure
              </a>
            </li>
            <li>
              2014-2016 {t("home.education.cegep")}{" "}
              <a target="_blank" rel="noopener noreferrer" href="http://www.cegepoutaouais.qc.ca/">
                Cégep de l'Outaouais
              </a>
            </li>
          </ul>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"⎋"} ${t("home.interests.title")}`}>
          <ul>
            <li>
              <span role="img" aria-label="ski-emoji">
                ⛷
              </span>
              {t("home.interests.text1")}
            </li>
            <li>
              <span role="img" aria-label="scuba-emoji">
                🤿
              </span>
              {t("home.interests.text2")}
            </li>
            <li>
              <span role="img" aria-label="beer-emoji">
                🍻
              </span>
              {t("home.interests.text3")}
            </li>
            <li>
              <span role="img" aria-label="cook-emoji">
                👨‍🍳
              </span>
              {t("home.interests.text4")}
            </li>
          </ul>
          <p>{t("home.interests.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={`${"💡"} ${t("home.quotes.title")}`}>
          <ul>
            <li>
              <q>Creators need to be able to see what they are doing, an immediate connection</q> ― Bret Victor
            </li>
            <li>
              <q>Those who can imagine anything, can create the impossible</q> ― Alan Turing
            </li>
            <li>
              <q>A few months writing code can save you a few hours in design.</q> ― Anonymous
            </li>
          </ul>
        </Drawer>
      </li>
    </ul>
  );
}

export { Home };
