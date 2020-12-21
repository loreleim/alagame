import React, { Component } from "react";
import style from "../results/index.module.scss"
import store from "../../database";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  scrollToBottom = () => {
    this.resultsEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    console.log("this is the image link" + this.props.image);
    return (
      <div className={style.resultsContainer} ref={(el) => { this.resultsEnd = el}}>
        <div className={style.resultsHeader}>
          <h2>Your Strength Score!</h2>
          <p>{store.resultText[0].headerText}</p>
        </div>
        <div className={style.uniqueContainer}>
          <h4>{this.props.categoryProp}</h4>
          <div className={style.imageAndText}>
            <div className={style.resultsImage}>
            <img src={this.props.image} alt={"gif of results"}/>
            </div>
            <p>{this.props.messageProp}</p>
          </div>
        </div>
      </div>
    );
  }
}
