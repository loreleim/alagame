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
      userChoices: [],
    };
  }

  optionClick = (questionIndex, selectedChoiceIndex, selectedCategory) => {
    console.log("this is the category: " + selectedCategory);
    console.log("this is the answer: " + questionIndex);
    console.log("clicked option:" + selectedChoiceIndex);
    let newArray = this.state.userChoices;
    newArray[questionIndex] = selectedCategory;
    this.setState({
      optionCondition: true,
      clickedOption: selectedChoiceIndex,
      clickedCategory: questionIndex,
      userChoices: newArray
    });

    this.check();

    if (this.state.highestCategory === "event planning") {
      this.setState({
        resultsMessage: "You don’t have to be a celebrity wedding planner to be able to plan for a successful conversation. You are already oriented to what it takes to think about the logistics of a good gathering, from working out the details of spaces, attendees, and speakers to making programs accessible, appealing, and culturally appropriate for all. Whether you’ve ever led a public program or not, you have the ability to think organizationally and focus your efforts on a clear goal, which are essential skills for creating a successful event."})
    }
    if (this.state.highestCategory === "community knowledge") {
      this.setState({
        resultsMessage: "Whether you are just good at getting to know people, you’ve lived here for years, or you’ve run for office in this town, you know this community! This is critical to leading strong conversations. You’ve shown that you have the background to build relationships and partnerships that strengthen your library’s programs and make the offerings of the library accessible to all."})
    }
    if (this.state.highestCategory === "creativity") {
      this.setState({
        resultsMessage: "What’s great about you is that you see challenges as opportunities to make something new and interesting. You’re also adept at coming up with unique solutions to issues. That’s exactly what is needed to be able to facilitate a constructive conversation.",
        resultsShown: true})
    }
    if (this.state.highestCategory === "interpersonal skills") {
      this.setState({
        resultsMessage: "Facilitating a conversation will necessitate communication with potential partners, stakeholders, and community members at all steps of the process. Fortunately, you’re able to draw on your significant social skills and ability to meaningfully connect with others to make sure everyone has what they need to participate in a fruitful dialogue."})
    }
    if (this.state.highestCategory === "outreach & marketing") {
      this.setState({
        resultsMessage: "From friends, to family members, to patrons, you know who needs to hear about what! You’ve got essential skills to be able to connect and engage with others, which is what will help to bring a diverse group of patrons and partners in to participate in a robust conversation."})
    }
    if (this.state.userChoices.length === 7) {
      this.setState({resultsShown: true})
    }
  };

  check = () => {
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
  }

  renderResults = () => {
    return <Results categoryProp={this.state.highestCategory} messageProp={this.state.resultsMessage} />
  }

  render() {
    return (
            <h2 className={style.questionText}>{questions.questionText}</h2>
        {resultsShown && this.renderResults()}
      </div>
    );
  }
}
