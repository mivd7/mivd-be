import React, { Component } from 'react';
import Carousel from './components/layout/Carousel';
import Item from './components/layout/Item';
import Header from './components/Header';
import musicalNote from './styles/svg/musical-note.svg';
import macbook from './styles/svg/macbook2.svg';
import glasses from './styles/svg/glasses.svg';
import growth from './styles/svg/growth.svg';
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
          <div className="item-gallery">
          <Carousel title="" >
            
              <Item>
                <img src={musicalNote} className={"item-gallery__image"} alt="music"/>
                <label>MIVD makes music</label>
              </Item>

              <Item>
                <img src={macbook} className={"item-gallery__image"} alt="developer"/>
                <label>MIVD makes web apps</label>
              </Item>

              <Item>
                <img src={glasses} className={"item-gallery__image"} alt="education"/>
                <label>MIVD makes science</label>
              </Item>

              <Item>
                <img src={growth} className={"item-gallery__image"} alt="skills"/>
                <label>MIVD makes skills</label>
              </Item>

              <Item>
                <img src={avatar} className={"item-gallery__image"} alt="bio"/>
                <label>Short Bio</label>
              </Item>
          </Carousel>
          </div>
        </div>
      </div>
    );
  }
}