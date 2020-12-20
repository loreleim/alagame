import React, { Component } from "react";
import style from "../results/index.module.scss"
import store from "../../database";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={style.resultsContainer}>
        <div className={style.resultsHeader}>
          <h2>Your Strength Score!</h2>
          <p>{store.resultText[0].headerText}</p>
        </div>
        <div className={style.uniqueContainer}>
        <h4>{this.props.categoryProp}</h4>
        <p>{this.props.messageProp}</p>
        </div>
      </div>
    );
  }
}
