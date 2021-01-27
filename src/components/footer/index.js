import React, { Component } from "react";
import { ReactComponent as ALALogo } from "../../images/alaLogo.svg";
import style from "../footer/index.module.scss"

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className={style.footerContainer}>
            <ALALogo className={style.alaLogo}></ALALogo>
            <p>This interactive tool was developed for the American Library Association by Convergence Design Lab, LLC as part of the Libraries Transforming Communities: Facilitation Skills for Small and Rural Libraries,
              a project made possible in part by the Institute of Museum and Library Services RE-17-19-0041-19.</p>
        </div>
      </footer>
    );
  }
}
