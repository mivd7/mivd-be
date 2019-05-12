import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Carousel from './components/layout/Carousel';
import Item from './components/layout/Item';
import Header from './components/layout/Header';
import Skills from './components/Skills';
import Music from './components/Music';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Bio from './components/Bio';
import Writing from './components/Writing';

import musicalNote from './styles/svg/musical-note.svg';
import macbook from './styles/svg/macbook2.svg';
import glasses from './styles/svg/glasses.svg';
import avatar from './styles/svg/avatar.svg';
import writing from './styles/svg/writing.svg';
import backpacking from './styles/svg/backpacker-hiking.svg';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main-body">
          <div className="item-gallery">
          <Carousel title="" >
              <Item>
                <Link to={'/music'}>
                  <img src={musicalNote} className={"item-gallery__image"} alt="music"/>
                  <label className={"item-gallery item-gallery__label"}>Music</label>
                </Link>
                <Route exact path="/music" component={Music} />
              </Item>

              <Item>
                <Link to={'/skills'}>
                  <img src={macbook} className={"item-gallery__image"} alt="dev"/>
                  <label className={"item-gallery item-gallery__label"}>Web Development</label>
                </Link>
                <Route exact path="/skills" component={Skills} />
              </Item>

              <Item> 
                <Link to={'/exp'}>
                  <img src={backpacking} className={"item-gallery__image"} alt="exp"/>
                  <label className={"item-gallery item-gallery__label"}>Experience</label>
                </Link>
                <Route exact path="/exp" component={WorkExperience} />
              </Item>

              <Item>
                <Link to={'/education'}>
                  <img src={glasses} className={"item-gallery__image"} alt="education"/>
                  <label className={"item-gallery item-gallery__label"}>Education</label>
                </Link>
                <Route exact path="/education" component={Education} />
              </Item>

              <Item>
               <Link to={'/bio'}>
                  <img src={avatar} className={"item-gallery__image"} alt="bio"/>
                  <label className={"item-gallery item-gallery__label"}>Bio</label>
                </Link>
                <Route exact path="/bio" component={Bio} />
              </Item>

              <Item>
                <Link to={'/writing'}>
                  <img src={writing} className={"item-gallery__image"} alt="Writing"/>
                  <label className={"item-gallery item-gallery__label"}>Writing</label>
                </Link>
                <Route exact path="/Writing" component={Writing} />
              </Item>
          </Carousel>
          </div>
        </div>
        <footer className="footer">
        <iframe title="de la" width="560" height="315" src="https://www.youtube.com/embed/P8-9mY-JACM?start=30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
        <br/> © MIVD Web Development, 2019</footer>

        {/* routes */}
      </div>
    );
  }
}