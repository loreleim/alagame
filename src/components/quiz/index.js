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

  calculateResuls = () => {
    for (var i = 0; i < store.questions.length; i++) {
      for (var j = 0; j < store.questions[i].answerOptions.length; j++) {
        let findAllTrue = store.questions[i].answerOptions[j].isSelected;
        if (findAllTrue === true) {
          this.state.userChoices.push(store.questions[i].answerOptions[j].category);
        }
      }
    }
    var count = {};
    this.state.userChoices.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    this.setState({resultsShown: true, selectedCategories: count})
  }

  decideHighest = () => {
    if (this.state.highestCategory === "event planning") {
      this.setState({
        imageProp: "https://media.giphy.com/media/121cS334yDC0Hm/giphy.gif",
        resultsMessage: "You don’t have to be a celebrity wedding planner to be able to plan for a successful conversation. You are already oriented to what it takes to think about the logistics of a good gathering, from working out the details of spaces, attendees, and speakers to making programs accessible, appealing, and culturally appropriate for all. Whether you’ve ever led a public program or not, you have the ability to think organizationally and focus your efforts on a clear goal, which are essential skills for creating a successful event."})
    }
    if (this.state.highestCategory === "community knowledge") {
      this.setState({
        imageProp: "https://media.giphy.com/media/3o6ozkeXSb0Cm25CzS/giphy.gif",
        resultsMessage: "Whether you are just good at getting to know people, you’ve lived here for years, or you’ve run for office in this town, you know this community! This is critical to leading strong conversations. You’ve shown that you have the background to build relationships and partnerships that strengthen your library’s programs and make the offerings of the library accessible to all."})
    }
    if (this.state.highestCategory === "creativity") {
      this.setState({
        imageProp: "https://media.giphy.com/media/3o6EhJCaTvilFWuy2I/giphy.gif",
        resultsMessage: "What’s great about you is that you see challenges as opportunities to make something new and interesting. You’re also adept at coming up with unique solutions to issues. That’s exactly what is needed to be able to facilitate a constructive conversation."})
    }
    if (this.state.highestCategory === "interpersonal skills") {
      this.setState({
        imageProp: "https://media.giphy.com/media/3o6EhCj5lUv8xv2l1K/giphy.gif",
        resultsMessage: "Facilitating a conversation will necessitate communication with potential partners, stakeholders, and community members at all steps of the process. Fortunately, you’re able to draw on your significant social skills and ability to meaningfully connect with others to make sure everyone has what they need to participate in a fruitful dialogue."})
    }
    if (this.state.highestCategory === "outreach & marketing") {
      this.setState({
        imageProp: "https://media.giphy.com/media/mwwEcxbodLHIk/giphy.gif",
        resultsMessage: "From friends, to family members, to patrons, you know who needs to hear about what! You’ve got essential skills to be able to connect and engage with others, which is what will help to bring a diverse group of patrons and partners in to participate in a robust conversation."})
    }
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

  /*check = () => {
    var localCheckArray = {};
    var checkUserChoices = this.state.userChoices[0],
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
  }*/

  renderResults = () => {
    return <Results countProp={this.state.selectedCategories} highestCatProp={this.state.highestCategory} messageProp={this.state.resultsMessage} image={this.state.imageProp}/>
  }

  render() {
    const {resultsShown} = this.state;
    return (
      <div>
        <div className={style.centerContainer}>
          <h3 className={style.instructionsContainer}>Read through the following and check all answers that apply to you!</h3>
          {store.questions.map((questions, q) => (
            <div key={q}>
            <div className={style.categoryContainer}>
            <h2 className={style.questionText}>{questions.questionText}</h2>
              {questions.answerOptions.map((answerOptions, i) => {
              if (q === 1 || q === 3 || q === 5)
              return <div className={style.imageCard} onClick={() => this.optionClick(answerOptions.category, i, q)}>
                <div className={style.imageCrop}>
                <img src={answerOptions.image} alt={"test"}/>
                </div>
                <div className={answerOptions.isSelected === false ? style.overlay: style.selectedOverlay}/>
                <div className={style.cardDetails} id = {q === 3 || q === 5 ? style.gifCaption : ""}>
                  <h5>{answerOptions.answerText}</h5>
                </div>
              </div>
              if (q === 0 || q === 2 || q === 4 || q === 6)
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
        <button className={style.calculateButton} onClick={this.calculateResuls}>Calculate Results</button>
        {resultsShown && this.renderResults()}
      </div>
    );
  }
}
