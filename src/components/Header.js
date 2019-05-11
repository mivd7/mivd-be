import React, { Component } from 'react'
import logo from '../styles/img/LogoMakr_25Gs2J.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p className="App-header-text">
          Max van Deurzen
          <br/>
          Developer / Historian / Musician / Poet 
          <br/>
        </p>
      </div>   
    )
  }
}
