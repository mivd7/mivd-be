import React, { Component } from 'react'
import musicalNote from '../styles/svg/musical-note.svg'

export default class Music extends Component {
  render() {
    return (
      <div>
        <img src={musicalNote}/>
      </div>
    )
  }
}
