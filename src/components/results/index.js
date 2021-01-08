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
              <div className={style.aboveTimelineContainer}>
                <h2 className={style.categoryTitle}>Event Planning</h2>
                <h2 className={style.skillRating}>{Math.round((this.props.countProp.event / store.questions.length) * 100)}% strength score</h2>
              </div>
              <div className={style.timelineContainer}>
                <div className={style.timeline}></div>
                <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.event / store.questions.length + ")"}}/>
              </div>
            </div>
            {/*Community Knowledge*/}
            <div className={style.scoreContainer}>
              <div className={style.aboveTimelineContainer}>
                <h2 className={style.categoryTitle}>Community Knowledge</h2>
                <h2 className={style.skillRating}>{Math.round((this.props.countProp.community / store.questions.length) * 100)}% strength score</h2>
              </div>
              <div className={style.timelineContainer}>
                <div className={style.timeline}></div>
                <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.community / store.questions.length + ")"}}/>
              </div>
            </div>
            {/*Creativity*/}
            <div className={style.scoreContainer}>
              <div className={style.aboveTimelineContainer}>
                <h2 className={style.categoryTitle}>Creativity</h2>
                <h2 className={style.skillRating}>{Math.round((this.props.countProp.creativity / store.questions.length) * 100)}% strength score</h2>
              </div>
              <div className={style.timelineContainer}>
                <div className={style.timeline}></div>
                <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.creativity / store.questions.length + ")"}}/>
              </div>
            </div>
            {/*Interpersonal*/}
            <div className={style.scoreContainer}>
              <div className={style.aboveTimelineContainer}>
                <h2 className={style.categoryTitle}>Interpersonal Skills</h2>
                <h2 className={style.skillRating}>{Math.round((this.props.countProp.interpersonal / store.questions.length) * 100)}% strength score</h2>
              </div>
              <div className={style.timelineContainer}>
                <div className={style.timeline}></div>
                <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.interpersonal / store.questions.length + ")"}}/>
              </div>
            </div>
            {/*Outreach*/}
            <div className={style.scoreContainer}>
              <div className={style.aboveTimelineContainer}>
                <h2 className={style.categoryTitle}>Outreach</h2>
                <h2 className={style.skillRating}>{Math.round((this.props.countProp.outreach / store.questions.length) * 100)}% strength score</h2>
              </div>
              <div className={style.timelineContainer}>
                <div className={style.timeline}></div>
                <div className={style.timelineFill} style={{transform: " translateY(-2vh) scaleX(" + this.props.countProp.outreach / store.questions.length + ")"}}/>
              </div>
            </div>
          </div>
          <h4>{this.props.highestCatProp}</h4>
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
