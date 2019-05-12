import React, { Component } from 'react'
import logo from '../styles/img/LogoMakr_25Gs2J.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <p className="App-header-text"> To learn more about Max van Deurzen<br/> 
        &#8617; SWIPE LEFT OR RIGHT &#8618;
        </p>
        
      </div>   
    )
  }
}
