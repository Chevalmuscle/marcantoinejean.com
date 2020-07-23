import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Spinner } from "./Spinner";
import { MAILING_SERVER_URL } from "../config";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      fetchInProgress: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    toast.configure({
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: false,
      pauseOnHover: true,
    });
  }

  handleOnChange(stateProp, value) {
    this.setState({ [stateProp]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { t } = this.props;

    // prevent spam click
    if (this.state.fetchInProgress) return;
    // TODO add recaptcha v3
    this.setState({ fetchInProgress: true });
    axios
      .post(`${MAILING_SERVER_URL}/mail`, {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
      .then((response) => {
        toast.success(`${t("email.success")} 🚀`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${t("email.error")} 🥺`);
      })
      .finally(() => {
        this.setState({ fetchInProgress: false });
      });
  }

  render() {
    const { t } = this.props;

    return (
      <div className={styles["contact-section"]}>
        <form className={styles["contact-form-container"]} onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">{t("email.name")}</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={(e) => this.handleOnChange("name", e.target.value)}
            required
          />
          <label htmlFor="email">{t("email.email")}</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => this.handleOnChange("email", e.target.value)}
            required
          />
          <label htmlFor="message">{t("email.message")}</label>
          <textarea
            id="message"
            type="text"
            name="message"
            onChange={(e) => this.handleOnChange("message", e.target.value)}
            required
          />
          <div className={styles["sent-button-container"]}>
            <input type="submit" value={t("email.send")} />
            {this.state.fetchInProgress && (
              <div className={styles["is-fetching-spinner"]}>
                <Spinner />
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export { ContactForm };
