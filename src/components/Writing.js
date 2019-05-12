import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class Writing extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
          <h3>Writing</h3>
          Here be a showcase of: <br/>
          Poems <br/>
          Articles I wrote for media<br/>
          Write your own poem-app (link) <br/>
        </div>
      </div>
    )
  }
}
