import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'

// Components
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Maps from './components/Maps';
import Rsvp from './components/Rsvp';
import Schedule from './components/Schedule';
import Lodging from './components/Lodging';
import Registry from './components/Registry';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Route path='/' render={(props) => (
          <NavBar />
        )} /> */}
        <NavBar />

        <Route path='/' render={(props) => (
          <Redirect to='/home' />
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

        <Route exact path='/registry' render={(props) => (
          <Registry />
        )} />

        <Route exact path='/info' render={(props) => (
          <Info />
        )} />
      
        <Footer />

      </div>
    );
  }
};

export default App;
