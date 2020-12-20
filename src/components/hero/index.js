import React, { Component } from "react";
import { ReactComponent as HeroSVG } from "../../images/heroImage.svg";
import style from "../hero/index.module.scss"

export default class Hero extends Component {

  optionClick = () => {
    console.log("begin");
  };

  render() {
    return (
      <div className={style.heroContainer}>
        <h2>Planning And Facilitating A Community Program Can Feel Intimidating,</h2>
        <p>and many of us don't feel like we're prepared. The following quiz can help you investigate which of the facilitation skills you already have, even if you've never thought about them before!</p>
        <HeroSVG className={style.heroImage}></HeroSVG>
      </div>
    );
  }
}
