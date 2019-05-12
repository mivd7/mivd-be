import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class Bio extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
        <h4>Born:</h4>Max Ivar van Deurzen (MIVD) 
          29/05/1990 
          Amsterdam, The Netherlands

        <h4>Current Residence:</h4>Betondorp, Amsterdam

        <h4>Occupations: </h4>Developer, Musician, Poet, Performer
        
        HERE BE CONTACT INFO / Buttons
        </div>
      </div>
    )
  }
}
