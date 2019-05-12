import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class Education extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
        <h3>CODE ACADEMY • JUL 2018 • CODAISSEUR</h3>
         Seen that skillslist?l earned this during two months doing this intense bootcamp, to finally become the software developer I am today. This bootcamp has above proven to me I can learn new things very fast.
        <h3>MA AMERICAN STUDIES • AUG 2014 • UNIVERSITY OF AMSTERDAM</h3>
        My final thesis entitled ‘Modern Madness and Tribal Truth: How Jazz invaded the Netherlands: 1926-1939’ was nominated in 2015 for the national TRAHA thesis award for best American Studies thesis.
        <h3>BA HISTORY • AUG 2012 • UNIVERSITY OF AMSTERDAM</h3>
        I studied History, specializing in American History and Culture.
        </div>
      </div>
    )
  }
}
