import React, { Component } from 'react';
import Chat from './Chat';
import Login from './Login';
import Matches from './Matches';
import Nav from './Nav';
import Profile from './Profile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
      login: false,
      profile: true,
      matches: false,
      chat: false,
    }
    this.activatePage = this.activatePage.bind(this);
  }

  activatePage(event, next, prev) {
    event.preventDefault();
    switch(next) {
      case 'LOGIN':
        this.setState({
          login: true,
          profile: false,
          matches: false,
          chat: false,
          nav: false
        });
        break;
      case 'PROFILE':
        this.setState({
          login: false,
          profile: true,
          matches: false,
          chat: false,
          nav: false
        });
        break;
      case 'MATCHES':
        this.setState({
          login: false,
          profile: false,
          matches: true,
          chat: false,
          nav: false,
        });
        break;
      case 'CHAT':
        this.setState({
          login: false,
          profile: false,
          matches: false,
          chat: true,
          nav: false
        });
        break;
      case 'NAV':
        this.setState({
          login: false,
          profile: false,
          matches: false,
          chat: false,
          nav: true
        });
        break;
      default:
      break;
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        {this.state.nav && <Nav activatePage={this.activatePage}/>}
        {this.state.login && <Login activatePage={this.activatePage}/>}
        {this.state.profile && <Profile activatePage={this.activatePage}/>}
        {this.state.matches && <Matches activatePage={this.activatePage}/>}
        {this.state.chat && <Chat activatePage={this.activatePage}/>}
      </div>
    );
  }
}

export default App;
