import React, { Component } from 'react'
import mivdGuitar from '../../styles/img/mivd-guitar.jpg';
import mivdMic from '../../styles/img/mivd-mic.jpg';
import mivdReading from '../../styles/img/mivd-reading.jpg';
import boomschors from '../../styles/img/boomschors.jpg';


export default class SideBox extends Component {
  render() {
    return (
        <div className="col-1-of-2">
          <div className="main-side__composition">
            <img src={mivdMic}
                 alt="my ass three" 
                 className="main-side__composition__photo main-side__composition__photo--p1"/>
            <img src={mivdGuitar} 
                 alt="my ass too" 
                 className="main-side__composition__photo main-side__composition__photo--p2"/>
            <img src={mivdReading}
                 alt="my ass"
                 className="main-side__composition__photo main-side__composition__photo--p3"/>
            <img src={boomschors}
                 alt="my ass fo sho!"
                 className="main-side__composition__photo main-side__composition__photo--p4"/>    
          </div>
        </div>
    )
  }
}
