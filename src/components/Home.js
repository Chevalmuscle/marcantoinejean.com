import React from "react";
import { Drawer } from "./Drawer";
import styles from "./Home.module.css";
import { useI18n } from "react-simple-i18n";

function Home() {
  const { t } = useI18n();

  return (
    <ul>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.whoami.title")}>
          <p>{t("home.whoami.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.personality.title")}>
          <p>{t("home.personality.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.workstyle.title")}>
          <p>{t("home.workstyle.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.social.title")}>
          <p>
            {t("home.social.linkedin")} {t("home.social.github")}
          </p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.education.title")}>
          <p>{t("home.education.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.interests.title")}>
          <p>{t("home.interests.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.quotes.title")}>
          <p>{t("home.quotes.content")}</p>
        </Drawer>
      </li>
      <li className={styles["list-item"]}>
        <Drawer title={t("home.inspirations.title")}>
          <p>{t("home.inspirations.content")}</p>
        </Drawer>
      </li>
    </ul>
  );
}

export { Home };
