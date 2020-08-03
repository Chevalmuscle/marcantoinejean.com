import React, { Component } from "react";
import styled from "styled-components";
import { Splitter } from "./components/Splitter";
import { Home } from "./components/Home";
import { ContactForm } from "./components/ContactForm";
import { Resume } from "./components/Resume";
import { createBrowserHistory } from "history";

import coverImage from "./assets/images/cover.jpg";

const history = createBrowserHistory();

const ROUTES = { HOME: "/", EMAIL: "/email", RESUME: "/resume", READING_LIST: "/reading-list" };

const ImageCover = styled.div`
  width: 100%;
  background-image: url(${coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 200px;
`;

const MainContainer = styled.div`
  margin: 20px auto;
  width: calc(100% - 192px);
  max-width: calc(1440px - 96px);
  @media only screen and (max-width: 600px) {
    margin: 5px;
    width: calc(100% - 10px);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const LanguageContainer = styled.div`
  position: fixed;
  right: 0px;
  margin: 5px;
`;

const LanguageButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 3px;
  margin: 2px;
  color: #ffffff;
  background: none;
  outline: 0;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background: var(--accent-color2);
    color: white;
  `}

  ${({ passedCoverImage }) =>
    passedCoverImage &&
    `
    color: black;
    background-color: #ffffff;
  `}

  transition: background-color 0.5s ease;
  transition: color 0.5s ease;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  height: 42px;
`;

const NavbarItem = styled.span`
  padding: 2px 10px;
  font-weight: 800;
  font-size: 16px;
  line-height: 38px;
  text-decoration-line: underline;
  cursor: pointer;
  text-align: center;
`;

const SplitterContainer = styled.div`
  margin: 10px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: ROUTES.HOME,
      coverImageIsVisible: true,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      this.setState({ coverImageIsVisible: false });
    } else {
      this.setState({ coverImageIsVisible: true });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);

    const currentPage = this.props.location.pathname;
    for (let route in ROUTES) {
      if (ROUTES[route] === currentPage) {
        this.setState({ currentPage: currentPage });
        break;
      }
    }
  }

  handleSetEnglish() {
    this.props.i18n.setLang("en");
  }

  handleSetFrench() {
    this.props.i18n.setLang("fr");
  }

  handleClick(route) {
    history.push(route);
    this.setState({ currentPage: route });
  }

  render() {
    const { t } = this.props;

    const currentPage = (() => {
      switch (this.state.currentPage) {
        case ROUTES.HOME:
          return <Home />;
        case ROUTES.EMAIL:
          return <ContactForm t={t} />;
        case ROUTES.RESUME:
          return <Resume />;
        case ROUTES.READING_LIST:
          return "Coming soon...";
        default:
          return <Home />;
      }
    })();

    return (
      <div>
        <LanguageContainer>
          <LanguageButton
            active={this.props.i18n.getLang() === "en"}
            passedCoverImage={!this.state.coverImageIsVisible}
            onClick={this.handleSetEnglish.bind(this)}
          >
            English
          </LanguageButton>
          <LanguageButton
            active={this.props.i18n.getLang() === "fr"}
            passedCoverImage={!this.state.coverImageIsVisible}
            onClick={this.handleSetFrench.bind(this)}
          >
            Français
          </LanguageButton>
        </LanguageContainer>
        <ImageCover />
        <MainContainer>
          <div>
            <Title>Marc-Antoine Jean</Title>
            <p>{t("header")}</p>
          </div>
          <SplitterContainer>
            <Splitter />
          </SplitterContainer>
          <Navbar>
            <NavbarItem onClick={() => this.handleClick(ROUTES.HOME)}>{t("nav.home")}</NavbarItem>
            <NavbarItem onClick={() => this.handleClick(ROUTES.EMAIL)}>{t("nav.email")}</NavbarItem>
            <NavbarItem onClick={() => this.handleClick(ROUTES.RESUME)}>{t("nav.resume")}</NavbarItem>
            <NavbarItem onClick={() => this.handleClick(ROUTES.READING_LIST)}>{t("nav.readingList")}</NavbarItem>
          </Navbar>
          <SplitterContainer>
            <Splitter />
          </SplitterContainer>
          <div>{currentPage}</div>
        </MainContainer>
      </div>
    );
  }
}
