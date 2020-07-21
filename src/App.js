import React, { Component } from "react";
import { Home } from "./components/Home";
import { ContactForm } from "./components/ContactForm";
import { Resume } from "./components/Resume";
import styles from "./App.module.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const ROUTES = { HOME: "/", EMAIL: "/email", RESUME: "/resume", READING_LIST: "/reading-list" };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: ROUTES.HOME,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
          return <ContactForm />;
        case ROUTES.RESUME:
          return <Resume />;
        case ROUTES.READING_LIST:
          return "reading";
        default:
          return <Home />;
      }
    })();

    return (
      <div>
        <div className={styles["lang-container"]}>
          <button
            className={`${styles["lang-button"]} ${this.props.i18n.getLang() === "en" && styles["lang-button-active"]}`}
            onClick={this.handleSetEnglish.bind(this)}
          >
            English
          </button>
          <button
            className={`${styles["lang-button"]} ${this.props.i18n.getLang() === "fr" && styles["lang-button-active"]}`}
            onClick={this.handleSetFrench.bind(this)}
          >
            Français
          </button>
        </div>
        <div id={styles["cover"]}></div>
        <div id={styles["main-container"]}>
          <div>
            <h1>Marc-Antoine Jean</h1>
            <p>{t("header")}</p>
          </div>
          <div className={styles["navbar"]}>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.HOME)}>
              {t("nav.home")}
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.EMAIL)}>
              {t("nav.email")}
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.RESUME)}>
              {t("nav.resume")}
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.READING_LIST)}>
              {t("nav.readingList")}
            </span>
          </div>
          <div className={styles["content-container"]}>{currentPage}</div>
        </div>
      </div>
    );
  }
}
