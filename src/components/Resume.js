import React from "react";
import { useI18n } from "react-simple-i18n";
import styled from "styled-components";
import ResumePreview from "../assets/svg/resume.svg";
import FileDownloadIcon from "../assets/svg/file-download-outline.svg";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadFileContainer = styled.a`
  display: flex;
`;

const ResumePreviewContainer = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function Resume() {
  const { t } = useI18n();

  return (
    <ResumeContainer>
      <DownloadFileContainer href="/MarcAntoineJean_Resume.pdf" download>
        <img src={FileDownloadIcon} alt=" " />
        {t("resume.download")}
      </DownloadFileContainer>
      <ResumePreviewContainer>
        <img src={ResumePreview} alt="resume preview" />
      </ResumePreviewContainer>
    </ResumeContainer>
  );
}

export { Resume };
