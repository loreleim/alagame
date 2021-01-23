import React, { Component } from "react";
import style from "../quiz/index.module.scss"
import store from "../../database";
import Results from "../results";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOption: -1,
      clickedCategory: -1,
      userChoices: [],
      selectedCategories: [],
      resultsShown: false, 
      highestCategory: "",
      resultsMessage: "",
      imageProp: "",
    };
  }

  optionClick = (questionIndex, selectedChoiceIndex, categoryIndex) => {

    this.setState({
      clickedOption: selectedChoiceIndex,
      clickedCategory: categoryIndex,
    });

    store.questions[categoryIndex].answerOptions[selectedChoiceIndex].isSelected = !store.questions[categoryIndex].answerOptions[selectedChoiceIndex].isSelected;
  };

  calculateResults = () => {
    for (var i = 0; i < store.questions.length; i++) {
      for (var j = 0; j < store.questions[i].answerOptions.length; j++) {
        let findAllTrue = store.questions[i].answerOptions[j].isSelected;
        if (findAllTrue === true) {
          this.state.userChoices.push(store.questions[i].answerOptions[j].category);
        }
      }
    }
    var count = {};
    this.state.userChoices.forEach((i) => { count[i] = (count[i]||0) + 1;});

    //this.decideHighest();

    this.setState({resultsShown: true, selectedCategories: count})
  }

  decideHighest = () => {
    var localCheckArray = {};
    var checkUserChoices = this.state.userChoices,
      maxCount = 1;
    for (var i = 0; i < this.state.userChoices.length; i++) {
      var individualString = this.state.userChoices[i];
      if (localCheckArray[individualString] == null) localCheckArray[individualString] = 1;
      else localCheckArray[individualString]++;
      if (localCheckArray[individualString] > maxCount) {
        checkUserChoices = individualString;
        maxCount = localCheckArray[individualString];
      }
    }
    this.setState({highestCategory: checkUserChoices})
  }

  renderResults = () => {
    return <Results countProp={this.state.selectedCategories} highestCatProp={this.state.highestCategory} messageProp={this.state.resultsMessage} image={this.state.imageProp}/>
  }

  render() {
    const {resultsShown} = this.state;
    return (
      <div>
        <div className={style.centerContainer}>
          <h3 className={style.instructionsContainer}>Check all answers that apply!</h3>
          {store.questions.map((questions, q) => (
            <div key={q}>
            <div className={style.categoryContainer}>
            <h2 className={style.questionText}>{questions.questionText}</h2>
              {questions.answerOptions.map((answerOptions, i) => {
              if (q === 1 || q === 2 || q === 4)
              return <div className={style.imageCard} onClick={() => this.optionClick(answerOptions.category, i, q)}>
                <div className={style.imageCrop}>
                <img src={answerOptions.image} alt={"test"}/>
                </div>
                <div className={answerOptions.isSelected === false ? style.overlay: style.selectedOverlay}/>
                <div className={style.cardDetails} id = {q === 3 || q === 5 ? style.gifCaption : ""}>
                  <h5>{answerOptions.answerText}</h5>
                </div>
              </div>
              if (q === 0 || q === 3 || q === 5)
                return (
                  <div className={answerOptions.isSelected === false ? style.optionNotSelected: style.optionSelected}
                    id = {q === 2 ? style.quoteContainer : "" || q === 4 ? style.dayContainer : "" || q === 6 ? style.patronContainer: ""}
                    onClick={() => this.optionClick(answerOptions.category, i, q)}>
                    <h5>{answerOptions.answerText}</h5>
                  </div>
                );
                return <div></div>
            })}
            </div>
            </div>
          ))}
        </div>
        <button className={style.calculateButton} onClick={this.calculateResults}>Calculate Results</button>
        {resultsShown && this.renderResults()}
      </div>
    );
  }
}
