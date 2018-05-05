import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Maps from './components/Maps';
import Rsvp from './components/Rsvp';
import Schedule from './components/Schedule';
import Lodging from './components/Lodging';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />

        <Route exact path='/' render={(props) => (
          <Home />
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

        <Route exact path='/lodging' render={(props) => (
          <Lodging />
        )} />

        <Route exact path='/schedule' render={(props) => (
          <Schedule />
        )} />

        <Route exact path='/info' render={(props) => (
          <Info />
        )} />

      </div>
    );
  }
};

export default App;
