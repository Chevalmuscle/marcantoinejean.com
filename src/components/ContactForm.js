import React, { Component } from "react";

import "./ContactForm.module.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(stateProp, value) {
    this.setState({ [stateProp]: value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Nom</label>
        <input type="text" name="name" onChange={(e) => this.handleOnChange("name", e.target.value)} />
        <label>Email</label>
        <input type="text" name="email" onChange={(e) => this.handleOnChange("message", e.target.value)} />
        <label>Message</label>
        <textarea type="text" name="message" onChange={(e) => this.handleOnChange("email", e.target.value)} />
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
