import React, { Component } from 'react'

export default class SideBox extends Component {
  render() {
    return (
      <div className="main-side">
        <div class="col-1-of-2">
          <div class="main-side__composition">
            <img src="img/nat-1-large.jpg" 
                 alt="Photo 1" 
                 class="main-side__composition__photo main-side__composition__photo--p1"/>
            <img src="img/nat-2-large.jpg" 
                 alt="Photo 2" 
                 class="main-side__composition__photo main-side__composition__photo--p2"/>
            <img src="img/nat-3-large.jpg"
                 alt="Photo 3" 
                 class="main-side__composition__photo main-side__composition__photo--p3"/>
          </div>
        </div>
      </div>
    )
  }
}
