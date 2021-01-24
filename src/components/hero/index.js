import React, { Component } from "react";
import { ReactComponent as HeroSVG } from "../../images/heroImage.svg";
import style from "../hero/index.module.scss"

export default class Hero extends Component {

  render() {
    return (
      <div className={style.heroContainer}>
        <div className={style.heroLeft}>
          <h2>Do You Have What It Takes to Lead Conversations?</h2>
          <p>Answer These 6 Questions to Find Out</p>
          <button className={style.heroButton} onClick={()=> console.log("hello")}>Begin</button>
        </div>
        <HeroSVG className={style.heroImage}></HeroSVG>
      </div>
    );
  }
}
