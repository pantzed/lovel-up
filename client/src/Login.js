import * as React from 'react';
import ExistingUserLogin from './ExistingUserLogin';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      potentialMatches: [],
      loginError: false,
      errorMsg: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoginError = this.toggleLoginError.bind(this);
  }

  toggleLoginError() {
    this.setState({
      loginError: !this.state.loginError,
    })
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userData = {};
    userData.username = this.state.username;
    userData.password = this.state.password;
    
    fetch(`/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userData),
    })
    .then((res) => res.text())
    .then(text=> JSON.parse(text))
    .then(data => {
      if(data.error) {
        let errorMessage = new Error(data.error);
        return Promise.reject(errorMessage);
      }
      else {
        this.props.activateUser([data]);
      }
    })
    .then(()=>this.props.handlePotentialMatches())
    .then(()=>{
      // fetch(`/potentialMatches/${this.props.userData[0].id}`, {
      //   method: 'GET', 
      //   mode: 'cors',
      //   redirect: "follow",
      //   referrer: "no-referrer"
      // })
      // .then((res) => {
      //   return res.text()
      // })
      // .then((text) => JSON.parse(text))
      // .then((pMatches) => {
      //   if (pMatches) {
      //     this.props.userPotentialMatches(pMatches);
      //    }
      // })
      
      this.props.activatePage(null, 'profile', 'login');
    })
    .catch(error => {
      this.setState({
        loginError: true,
        errorMsg: 'Username does not exist!',
      });
      console.error('error: ', error.message);
    });
  }

  render() {
    return (
      <div className='row bg-colorful'>
        <div className='col-12'>
          <div className='row d-flex justify-content-center'>
            <div className='col-10 mt-5 text-center'>
              <img src='../lovel-up-logo-light-2.png' className='img img-fluid' alt='Love el up logo'></img>
              <span className='pt-2 text-light'>Lovel up, playa'</span>
            </div>
          </div>
          { 
            !this.state.loginError && 
            <ExistingUserLogin handleChange={this.handleChange} handleSubmit={this.handleSubmit} parentState={this.state} activatePage={this.props.activatePage}/>
          }
          {
            this.state.loginError &&
            <div className='row mt-5 d-flex justify-content-center'>
              <div className='col-10 d-flex flex-column justify-content-center border-light rounded'>
                <span className='login-error-msg text-center w-100 mt-2'>{this.state.errorMsg}</span>
                <button className='btn btn-light mt-3' onClick={(e) => this.props.activatePage(e, 'createProfile', 'login')}>Sign Up!</button>
                <button className='btn btn-outline-light mt-3' onClick={this.toggleLoginError}>Try Again</button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Login;