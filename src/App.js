import React, { Component } from 'react';
import Carousel from './components/layout/Carousel';
import Item from './components/layout/Item';
import Header from './components/Header';
import musicalNote from './styles/svg/musical-note.svg';
import next from './styles/svg/next-1.svg';
import back from './styles/svg/back.svg';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
        </div>
        <p className="main-text-box">
          Swipe and click on a symbol to find out more about me
        </p>
        <Carousel
          title=""
        >
          <Item>
            {/* <img src={back} className={"item-nav"}/> */}
            <img src={musicalNote} className={"item-logo"}/>
            {/* <img src={next} className={"item-nav"}/> */}
          </Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
        </Carousel>
      </div>
    );
  }
}