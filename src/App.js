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

  handleClick(route) {
    history.push(route);
    this.setState({ currentPage: route });
  }

  render() {
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
        <div id={styles["cover"]}></div>
        <div id={styles["main-container"]}>
          <div>
            <h1>Marc-Antoine Jean</h1>
            <p>
              Bacon ipsum dolor amet pig bacon swine jowl, brisket prosciutto ribeye fatback t-bone beef meatloaf ground
              round. Ground round porchetta ham hock jerky pork drumstick frankfurter landjaeger.
            </p>
          </div>
          <div className={styles["navbar"]}>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.HOME)}>
              Me
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.EMAIL)}>
              Email
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.RESUME)}>
              Resume
            </span>
            <span className={styles["navbar-item"]} onClick={() => this.handleClick(ROUTES.READING_LIST)}>
              Reading List
            </span>
          </div>
          <div className={styles["content-container"]}>{currentPage}</div>
        </div>
      </div>
    );
  }
}
