import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Spinner } from "./Spinner";
import { MAILING_SERVER_URL } from "../config";

const ContactContainer = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin: 20px 5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;

const ContactFormContainer = styled.form`
  width: min(80%, 800px);

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Label = styled.label`
  color: var(--text-color);
`;

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.02);
  font-size: 0.8em;
  border: 1px solid black;
  width: 100%;
  padding: 12px 15px;
  margin: 4px 0 12px 0;
  box-sizing: border-box;
  border-radius: 2px;

  &:focus {
    outline: none !important;
    background-color: white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

const TextArea = styled(Input)`
  resize: vertical;
  height: 100px;
  min-height: 39px;
`;

const Submit = styled.input.attrs({ type: "submit" })`
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-size: 1em;
  padding: 5px 30px;
  border-radius: 2px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SpinnerContainer = styled.div`
  margin: 0px 20px;
  height: 40px;
  width: 40px;
`;

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
      <ContactContainer>
        <ContactFormContainer onSubmit={this.handleOnSubmit}>
          <Label htmlFor="name">{t("email.name")}</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={(e) => this.handleOnChange("name", e.target.value)}
            required
          />
          <Label htmlFor="email">{t("email.email")}</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={(e) => this.handleOnChange("email", e.target.value)}
            required
          />
          <Label htmlFor="message">{t("email.message")}</Label>
          <TextArea
            id="message"
            type="text"
            name="message"
            onChange={(e) => this.handleOnChange("message", e.target.value)}
            required
          />
          <SubmitButtonContainer>
            <Submit type="submit" value={t("email.send")} />
            {this.state.fetchInProgress && (
              <SpinnerContainer>
                <Spinner />
              </SpinnerContainer>
            )}
          </SubmitButtonContainer>
        </ContactFormContainer>
      </ContactContainer>
    );
  }
}

export { ContactForm };
