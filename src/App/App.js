import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import Events from "../Events/Events"
import Travel from "../Travel/Travel"
import Photos from "../Photos/Photos"
import Registry from "../Registry/Registry"
import Rsvp from "../Rsvp/Rsvp"

class App extends Component {
  constructor () {
    super ()
    this.state = {
      display: false
    }
  }

  handleNav = (evt) => {
    evt.preventDefault()
    this.setState({ display: !this.state.display })
  }
  
  renderNav = () => {
    if (this.state.display) {
      return (
          <nav className="navbar">
              <Link to="/events"><p className="navitem">events</p></Link>
              <Link to="/travel"><p className="navitem">travel</p></Link>
              <Link to="/photos"><p className="navitem">photos</p></Link>
              <Link to="/registry"><p className="navitem">registry</p></Link>
              <Link to="/rsvp"><p className="navitem">rsvp</p></Link>
          </nav>
      )
    }
  }
  render () {
    let nav
    if (this.state.display) {
      nav = this.renderNav()
    }
    return (
      <div className="App">
          <div className="header" onClick={this.handleNav}>
            <Link to="/"><h1 className="date">3.21</h1></Link>
            <p className="subtitle">the final countdown</p>
          </div>
          { nav }
          <main>
            <Switch>
              <Route exact path="/events" component={Events} />
              <Route exact path="/travel" component={Travel} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/registry" component={Registry} />
              <Route exact path="/rsvp" component={Rsvp} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
