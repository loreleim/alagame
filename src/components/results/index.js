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
    return (
      <div className={style.resultsContainer} ref={(el) => { this.resultsEnd = el}}>
        <div className={style.resultsHeader}>
          <h2>Your Strength Score!</h2>
          <p>{store.resultText[0].headerText}</p>
        </div>
        <div className={style.uniqueContainer}>
          <div className={style.calculationsContainer}>
            {/*Event Planning*/}
            <div className={style.scoreContainer}>
              <div className={style.imageAndText}>
                <div className={style.resultsImage}>
                <img src="https://media.giphy.com/media/121cS334yDC0Hm/giphy.gif" alt={"gif of results"}/>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.aboveTimelineContainer}>
                  <h2 className={style.categoryTitle}>Event Planning</h2>
                  <h2 className={style.skillRating}>{Math.round((this.props.countProp.event / store.questions.length) * 100)}% strength score</h2>
                </div>
                <div className={style.timelineContainer}>
                  <div className={style.timeline}></div>
                  <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.event / store.questions.length + ")"}}/>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{store.resultText[0].answerOptions[0].answerText}</p>
                </div>
              </div>
            </div>
            <hr/>
            {/*Community Knowledge*/}
            <div className={style.scoreContainer}>
              <div className={style.imageAndText}>
                <div className={style.resultsImage}>
                <img src="https://media.giphy.com/media/3o6ozkeXSb0Cm25CzS/giphy.gif" alt={"gif of results"}/>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.aboveTimelineContainer}>
                  <h2 className={style.categoryTitle}>Community Knowledge</h2>
                  <h2 className={style.skillRating}>{Math.round((this.props.countProp.community / store.questions.length) * 100)}% strength score</h2>
                </div>
                <div className={style.timelineContainer}>
                  <div className={style.timeline}></div>
                  <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.community / store.questions.length + ")"}}/>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{store.resultText[0].answerOptions[1].answerText}</p>
                </div>
              </div>
            </div>
            <hr/>
            {/*Creativity*/}
            <div className={style.scoreContainer}>
              <div className={style.imageAndText}>
                <div className={style.resultsImage}>
                <img src="https://media.giphy.com/media/3o6EhJCaTvilFWuy2I/giphy.gif" alt={"gif of results"}/>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.aboveTimelineContainer}>
                  <h2 className={style.categoryTitle}>Creativity</h2>
                  <h2 className={style.skillRating}>{Math.round((this.props.countProp.creativity / store.questions.length) * 100)}% strength score</h2>
                </div>
                <div className={style.timelineContainer}>
                  <div className={style.timeline}></div>
                  <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.creativity / store.questions.length + ")"}}/>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{store.resultText[0].answerOptions[2].answerText}</p>
                </div>
              </div>
            </div>
            <hr/>
            {/*Interpersonal*/}
            <div className={style.scoreContainer}>
              <div className={style.imageAndText}>
                <div className={style.resultsImage}>
                <img src="https://media.giphy.com/media/3o6EhCj5lUv8xv2l1K/giphy.gif" alt={"gif of results"}/>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.aboveTimelineContainer}>
                  <h2 className={style.categoryTitle}>Interpersonal Skills</h2>
                  <h2 className={style.skillRating}>{Math.round((this.props.countProp.interpersonal / store.questions.length) * 100)}% strength score</h2>
                </div>
                <div className={style.timelineContainer}>
                  <div className={style.timeline}></div>
                  <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.interpersonal / store.questions.length + ")"}}/>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{store.resultText[0].answerOptions[3].answerText}</p>
                </div>
              </div>
            </div>
            <hr/>
            {/*Outreach*/}
            <div className={style.scoreContainer}>
              <div className={style.imageAndText}>
                <div className={style.resultsImage}>
                <img src="https://media.giphy.com/media/mwwEcxbodLHIk/giphy.gif" alt={"gif of results"}/>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.aboveTimelineContainer}>
                  <h2 className={style.categoryTitle}>Outreach &amp; Marketing</h2>
                  <h2 className={style.skillRating}>{Math.round((this.props.countProp.outreach / store.questions.length) * 100)}% strength score</h2>
                </div>
                <div className={style.timelineContainer}>
                  <div className={style.timeline}></div>
                  <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.outreach / store.questions.length + ")"}}/>
                </div>
                <div className={style.descriptionContainer}>
                  <p>{store.resultText[0].answerOptions[4].answerText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
