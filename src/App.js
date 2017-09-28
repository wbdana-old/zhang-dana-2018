import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom'

// Components
import Home from './components/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Maps from './components/Maps'
import Rsvp from './components/Rsvp'
import Schedule from './components/Schedule'
import Accommodation from './components/Accommodation'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path='/' render={(props) => (
          <NavBar />
        )} />

        <Route exact path='/home' render={(props) => (
          <Home />
        )} />

        <Route exact path='/contact' render={(props) => (
          <Contact />
        )} />

        <Route exact path='/maps' render={(props) => (
          <Maps />
        )} />

        <Route exact path='/rsvp' render={(props) => (
          <Rsvp />
        )} />

        <Route exact path='/accommodation' render={(props) => (
          <Accommodation />
        )} />

        <Route exact path='/schedule' render={(props) => (
          <Schedule />
        )} />

      </div>
    );
  }
}

export default App;
