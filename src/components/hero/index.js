import React, { Component } from "react";
import { ReactComponent as HeroSVG } from "../../images/heroImage.svg";
import style from "../hero/index.module.scss";
import Quiz from "../quiz";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizShown: false, 
    };
  }

  beginButton = () => {
    this.setState({quizShown: true})
  }

  renderQuiz = () => {
    return <Quiz/>
  }

  render() {
    const {quizShown} = this.state;
    return (
      <div>
        <div className={style.heroContainer}>
          <div className={style.heroLeft}>
            <h2>Do You Have What It Takes to Lead Conversations?</h2>
            <p>Answer These 6 Questions to Find Out</p>
            <button className={style.heroButton} onClick={()=> this.beginButton()}>Begin</button>
          </div>
          <HeroSVG className={style.heroImage}></HeroSVG>
        </div>
        {quizShown && this.renderQuiz()}
      </div>
    );
  }
}
