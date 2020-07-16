import React from "react";
import styles from "./Resume.module.css";
import ResumePreview from "../assets/svg/resume.svg";
import FileDownloadIcon from "../assets/svg/file-download-outline.svg";

function Resume() {
  return (
    <div className={styles["resume-section"]}>
      <a className={styles["download-file-container"]} href="/MarcAntoineJean_Resume.pdf" download>
        <img src={FileDownloadIcon} alt=" " />
        Download PDF version
      </a>
      <div className={styles["resume-preview"]}>
        <img src={ResumePreview} alt="resume preview" />
      </div>
    </div>
  );
}

export { Resume };
