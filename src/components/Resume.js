import React from "react";
import { useI18n } from "react-simple-i18n";
import styled from "styled-components";
import ResumePreview1 from "../assets/images/resume1.png";
import ResumePreview2 from "../assets/images/resume2.png";
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
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ResumePreviewImg = styled.img`
  max-width:100%;
  max-height:100%;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 2px;
`

function Resume() {
  const { t } = useI18n();

  return (
    <ResumeContainer>
      <DownloadFileContainer href="/MarcAntoineJean_Resume.pdf" download>
        <img src={FileDownloadIcon} alt=" " />
        {t("resume.download")}
      </DownloadFileContainer>
      <ResumePreviewContainer>
        <ResumePreviewImg src={ResumePreview1} alt="resume preview p1" />
        <ResumePreviewImg src={ResumePreview2} alt="resume preview p2" />
      </ResumePreviewContainer>
    </ResumeContainer>
  );
}

export { Resume };
