import React, { Component } from 'react';
import Carousel from './components/layout/Carousel';
import Item from './components/layout/Item';
import Header from './components/Header';
import musicalNote from './styles/svg/musical-note.svg';
import macbook from './styles/svg/macbook2.svg';
import glasses from './styles/svg/glasses.svg';
import avatar from './styles/svg/avatar.svg';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <p className="main-text-box">
            Swipe and click on a symbol to find out more about me
          </p>
          <Carousel title="" >
            <Item>
              <img src={musicalNote} className={"item-logo"} alt="music"/>
              <label>Music</label>
            </Item>

            <Item>
              <img src={macbook} className={"item-logo"} alt="developer"/>
              <label>Coding</label>
            </Item>

            <Item>
              <img src={glasses} className={"item-logo"} alt="historian"/>
              <label>Education</label>
            </Item>

            <Item>
              <img src={avatar} className={"item-logo"} alt="bio"/>
              <label>Bio</label></Item>
          </Carousel>
        </div>
      </div>
    );
  }
}