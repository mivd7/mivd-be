import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Carousel from './components/layout/Carousel';
import Item from './components/layout/Item';
import Header from './components/Header';
import musicalNote from './styles/svg/musical-note.svg';
import macbook from './styles/svg/macbook2.svg';
import glasses from './styles/svg/glasses.svg';
import growth from './styles/svg/growth.svg';
import avatar from './styles/svg/avatar.svg';
import writing from './styles/svg/writing.svg';
import backpacking from './styles/svg/backpacker-hiking.svg';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <div className="item-gallery">
          <Carousel title="" >
              <Item>
                <img src={musicalNote} className={"item-gallery__image"} alt="music"/>
                <label className="item-gallery item-gallery__label">Music</label>
              </Item>

              <Item>
                <img src={macbook} className={"item-gallery__image"} alt="developer"/>
                <label className="item-gallery item-gallery__label">Web Development</label>
              </Item>

              <Item>
                <img src={backpacking} className={"item-gallery__image"} alt="EXP"/>
                <label className="item-gallery item-gallery__label">Work Experience</label>
              </Item>

              <Item>
                <Link to={'/skills'}>
                  <img src={growth} className={"item-gallery__image"} alt="skills"/>
                  <label className="item-gallery item-gallery__label">Skills</label>
                </Link>
              </Item>

              <Item>
                <img src={glasses} className={"item-gallery__image"} alt="education"/>
                <label className="item-gallery item-gallery__label">Education</label>
              </Item>

              <Item>
                <img src={avatar} className={"item-gallery__image"} alt="bio"/>
                <label className="item-gallery item-gallery__label">Bio</label>
              </Item>

              <Item>
                <img src={writing} className={"item-gallery__image"} alt="writing"/>
                <label className="item-gallery item-gallery__label">Writing</label>
              </Item>
          </Carousel>
          </div>
        </div>
        <footer className="App-footer">
        <iframe title="de la" width="560" height="315" src="https://www.youtube.com/embed/P8-9mY-JACM?start=30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
        <br/> © MIVD Web Development, 2019</footer>
      </div>
    );
  }
}