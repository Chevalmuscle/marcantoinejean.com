import React, { Component } from "react";
import "./C01.css";

export default class C01 extends Component {
  render() {
    return (
      <div className="c01">
        <div className="row">
          <div className="left column">
            {this.props.leftColumn}
          </div>
          <div className="right column">
            {this.props.rightColumn}
          </div>
        </div>
      </div>
    );
  }
}
