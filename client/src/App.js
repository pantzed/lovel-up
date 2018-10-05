import React, { Component } from 'react';
import Chat from './Chat';
import Login from './Login';
import Matches from './Matches';
import Nav from './Nav';
import Profile from './Profile';
import EditPictures from './EditPictures';
import CreateProfile from './CreateProfile';
import './App.css';
import PotentialMatches from './PotentialMatches';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
      createProfile: false,
      login: true,
      profile: false,
      editPictures: false,
      matches: false,
      chat: false,
      currentMatch: null,
      potentialMatch: false,
      userData: [{}],
      potentialMatches: [{}],
  }
    this.activatePage = this.activatePage.bind(this);
    this.activateUser = this.activateUser.bind(this);
    this.potentialMatches = this.potentialMatches.bind(this);
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
          nav: false,
          potentialMatch: false
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
          nav: false,
          potentialMatch: false
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
          nav: false,
          potentialMatch: false
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
          nav: false,
          potentialMatch: false
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
          potentialMatch: false
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
          potentialMatch: false
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
          nav: true,
          potentialMatch: false
        });
        break;
      case 'POTENTIAL_MATCHES':
        this.setState({
          login: false,
          createProfile: false,
          profile: false,
          editPictures: false,
          matches: false,
          chat: false,
          nav: false,
          potentialMatch: true
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
  potentialMatches(potentialUserData){
    this.setState({
      potentialMatches: potentialUserData
    })
  }

  addPoints(value) {
    const nextUserData = this.state.userData[0];
    nextUserData.total_exp += value;
    nextUserData.level = (Math.floor(nextUserData.total_exp / 20) + 1);

    fetch(`/users/${this.state.userData[0].id}/points`, { 
      method: 'PATCH', 
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(nextUserData)
    })
    .then((res, error) => {
      if (res.status === 500) {
        return Promise.reject(new Error("Something went wrong. Please try again"))
      }
      else {
        return res.text();
      }
    })
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        userData: [data]
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
  }

  render() {
    return (
      <div className='container-fluid full-height'>
        {this.state.nav && <Nav activatePage={this.activatePage}/>}
        {this.state.createProfile && <CreateProfile activatePage={this.activatePage} activateUser={this.activateUser} />}
        {this.state.login && <Login activatePage={this.activatePage} activateUser={this.activateUser} userData={this.state.userData} userPotentialMatches={this.potentialMatches} potentialMatches={this.state.potentialMatches}/>}
        {this.state.profile && <Profile activateUser={this.activateUser} activatePage={this.activatePage} userData={this.state.userData}/>}
        {this.state.editPictures && <EditPictures activateUser={this.activateUser} activatePage={this.activatePage} userData={this.state.userData[0]}/>}
        {this.state.matches && <Matches activatePage={this.activatePage} userData={this.state.userData}/>}
        {this.state.potentialMatch && <PotentialMatches activateUser={this.activateUser} activatePage={this.activatePage} userData={this.state.userData} potentialMatches={this.state.potentialMatches} userPotentialMatches={this.potentialMatches}/>}
        { this.state.chat && 
          <Chat activatePage={this.activatePage} 
                match={this.state.currentMatch} 
                userData={this.state.userData}
                addPoints={this.addPoints}
        />}
      </div>
    );
  }
}

export default App;
