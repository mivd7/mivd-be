import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class Music extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
          <h3>Music</h3>
          Here be a showcase of: <br/>
          Music I made <br/>
          An interactive record collection app <br/>
          Soundcloud + last.fm + cantus maximus link<br/>
        </div>
      </div>
    )
  }
}
