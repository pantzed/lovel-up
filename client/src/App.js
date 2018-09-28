import React, { Component } from 'react';
import Chat from './Chat';
import Login from './Login';
import Matches from './Matches';
import Nav from './Nav';
import Profile from './Profile';
import EditPictures from './EditPictures';
import CreateProfile from './CreateProfile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
      createProfile: true,
      login: false,
      profile: false,
      editPictures: false,
      matches: false,
      chat: false,
      currentMatch: null,
      userData: {},
    }
    this.activatePage = this.activatePage.bind(this);
    this.activateUser = this.activateUser.bind(this);
  }

  activatePage(event = null, next, prev, match = null) {
    if (event) {
      event.preventDefault();
    }
    switch(next) {
      case 'LOGIN':
        this.setState({
          login: true,
          createProfile: false,
          profile: false,
          editPictures: false,
          matches: false,
          chat: false,
          nav: false
        });
        break;
      case 'CREATE_PROFILE':
        this.setState({
          login: false,
          createProfile: true,
          profile: false,
          editPictures: false,
          matches: false,
          chat: false,
          nav: false
        });
        break;
        
      case 'PROFILE':
        this.setState({
          login: false,
          createProfile: false,
          profile: true,
          editPictures: false,
          matches: false,
          chat: false,
          nav: false
        });
        break;
      case 'EDIT_PICTURES':
        this.setState({
          login: false,
          createProfile: false,
          profile: false,
          editPictures: true,
          matches: false,
          chat: false,
          nav: false
        });
        break;
      case 'MATCHES':
        this.setState({
          login: false,
          createProfile: false,
          profile: false,
          editPictures: false,
          matches: true,
          chat: false,
          nav: false,
        });
        break;
      case 'CHAT':
        this.setState({
          login: false,
          createProfile: false,
          profile: false,
          editPictures: false,
          matches: false,
          chat: true,
          nav: false,
          currentMatch: match,
        });
        break;
      case 'NAV':
        this.setState({
          login: false,
          createProfile: false,
          profile: false,
          editPictures: false,
          matches: false,
          chat: false,
          nav: true
        });
        break;
      default:
      break;
    }
  }

  activateUser(userData) {
    this.setState({
      userData: userData,
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        {this.state.nav && <Nav activatePage={this.activatePage}/>}
        {this.state.createProfile && <CreateProfile activatePage={this.activatePage} activateUser={this.activateUser} />}
        {this.state.login && <Login activatePage={this.activatePage}/>}
        {this.state.profile && <Profile activatePage={this.activatePage}/>}
        {this.state.editPictures && <EditPictures activatePage={this.activatePage}/>}
        {this.state.matches && <Matches activatePage={this.activatePage}/>}
        {this.state.chat && <Chat activatePage={this.activatePage} match={this.state.currentMatch}/>}
      </div>
    );
  }
}

export default App;
