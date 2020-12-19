import React, { Component } from "react";
import style from "../quiz/index.module.scss"
import store from "../../database";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionCondition: false,
      clickedOption: 0,
      clickedCategory: 0,
    };
  }

  optionClick = (e, i) => {
    console.log("this is the answer: " + e);
    console.log("clicked option:" + i);
    this.setState({
      optionCondition: true,
      clickedOption: i,
      clickedCategory: e,
    });
  };

  render() {
    return (
      <div className={style.centerContainer}>
        {store.questions.map((questions, q) => (
          <div className={style.questionContainer}>
            <h2 className={style.questionText}>{questions.questionText}</h2>
            {questions.answerOptions.map((answerOptions, i) => (
              <div
                key={answerOptions.answerText}
                className={
                  this.state.optionCondition && i === this.state.clickedOption && q === this.state.clickedCategory
                    ? style.optionSelected
                    : style.optionNotSelected
                }
                onClick={() => this.optionClick(q, i)}
              >
                <h4>{answerOptions.answerText}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
