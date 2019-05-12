import React, { Component } from 'react'
import logo from '../../styles/img/LogoMakr_25Gs2J.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} className="header__logo" alt="logo" />
        </a>

        <h1 className="header__text-box">HEADQUARTERS<br/> 
        </h1>
        
      </div>   
    )
  }
}
