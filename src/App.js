import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom'

// Components
import Home from './components/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Route path='/' render={() => (
          <Redirect to='/home' exact />
        )} />

        <Route exact path='/home' render={(props) => (
          <Home />
        )} />

      </div>
    );
  }
}

export default App;
