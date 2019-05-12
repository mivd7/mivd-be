import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class WorkExperience extends Component {
  render() {
    return (
        <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
          <h3>REACT DEVELOPER • SPLASH LEASE • MARCH 2019 - NOW</h3>
          I’m currently working for two days a week on a new CRM-system for the company. I’m responsible for mostly the frontend part of this, build with React whilst also providing code for the API, using TypeScript and MS-SQL.
          <h3>INTERN DEVELOPER • ALEX VAN GRONINGEN • DECEMBER 2018 – JANUARY 2019</h3>
          For a month I got to have me first taste at developing in a professional setting, working on the frontend (React, HTML/CSS).
        </div>
      </div>
    )
  }
}
