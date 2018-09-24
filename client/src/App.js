import React, { Component } from 'react';
import Chat from './Chat';
import Login from './Login';
import Matches from './Matches';
import Navbar from './Navbar';
import Profile from './Profile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      profile: false,
      matches: false,
      chat: true,
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
          chat: false
        });
        break;
      case 'PROFILE':
        this.setState({
          login: false,
          profile: true,
          matches: false,
          chat: false
        });
        break;
      case 'MATCHES':
        this.setState({
          login: false,
          profile: false,
          matches: true,
          chat: false
        });
        break;
      case 'CHAT':
        this.setState({
          login: false,
          profile: false,
          matches: false,
          chat: true
        });
        break;
      default:
      break;
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <Navbar props={this.props} />
        {this.state.login && <Login activatePage={this.activatePage}/>}
        {this.state.profile && <Profile activatePage={this.activatePage}/>}
        {this.state.matches && <Matches activatePage={this.activatePage}/>}
        {this.state.chat && <Chat activatePage={this.activatePage}/>}
      </div>
    );
  }
}

export default App;
