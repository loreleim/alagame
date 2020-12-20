import React, { Component } from "react";
import { ReactComponent as ALALogo } from "../../images/alaLogo.svg";
import style from "../footer/index.module.scss"

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className={style.footerContainer}>
            <ALALogo className={style.alaLogo}></ALALogo>
        </div>
      </footer>
    );
  }
}
