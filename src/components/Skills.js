import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import close from '../styles/svg/cancel.svg'

export default class Skills extends Component {
  render() {
    return (
      <div className="item-box">
        <div className="item-box__closebtn">
          <Link to={`/`}><img src={close} alt="close"/></Link>
        </div>
        <div className="item-box__text">
          <h3>Coding</h3>
          Here be a showcase of: <br/>
          Coding skills <br/>
          A (giphy) gallery showing web apps I made <br/>
          Github link<br/>
        </div>
      </div>
    )
  }
}
