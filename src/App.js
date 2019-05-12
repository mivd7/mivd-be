import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/HomeScreen';
import Footer from './components/layout/Footer';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>

        <div className="main-body">
          <Home/>
        </div>
        <Footer/>

      </div>
    );
  }
}