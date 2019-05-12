import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

import Carousel from './layout/Carousel';
import Item from './layout/Item';
import Skills from './Skills';
import Music from './Music';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Bio from './Bio';
import Writing from './Writing';

import musicalNote from '../styles/svg/musical-note.svg';
import macbook from '../styles/svg/macbook2.svg';
import glasses from '../styles/svg/glasses.svg';
import avatar from '../styles/svg/avatar.svg';
import writing from '../styles/svg/writing.svg';
import backpacking from '../styles/svg/backpacker-hiking.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="item-gallery">
        <Carousel>
              <Item>
                <Link to={'/music'}>
                  <img src={musicalNote} className={"item-gallery__image"} alt="music"/>
                  <div className={"item-gallery__label"}>
                    <label >Music</label>
                  </div>
                </Link>
                <Route exact path="/music" component={Music} />
              </Item>

              <Item>
                <Link to={'/skills'}>
                  <img src={macbook} className={"item-gallery__image"} alt="dev"/>
                  <label className={"item-gallery__label"}>Web Development</label>
                </Link>
                <Route exact path="/skills" component={Skills} />
              </Item>

              <Item> 
                <Link to={'/exp'}>
                  <img src={backpacking} className={"item-gallery__image"} alt="exp"/>
                  <label className={"item-gallery__label"}>Experience</label>
                </Link>
                <Route exact path="/exp" component={WorkExperience} />
              </Item>

              <Item>
                <Link to={'/education'}>
                  <img src={glasses} className={"item-gallery__image"} alt="education"/>
                  <label className={"item-gallery__label"}>Education</label>
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
                  <label className={"item-gallery__label"}>Writing</label>
                </Link>
                <Route exact path="/Writing" component={Writing} />
              </Item>
          </Carousel>
      </div>
    )
  }
}
