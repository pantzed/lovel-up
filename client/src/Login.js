import * as React from 'react';
import Navbar from './Navbar';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(userData), // body data type must match "Content-Type" header
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
    .then(()=>this.props.activatePage(null, 'PROFILE', 'LOGIN'))
    .catch(error => {
      console.error('error: ', error.message);
    });
  }

  render() {
    return (
      <div className='row bg-colorful'>
        <div className='col-12'>
          <Navbar props={this.props} activatePage={this.props.activatePage} active={'LOGIN'} />
          <div className='row d-flex justify-content-center'>
            <div className='col-10 mt-5 text-center'>
              <img src='../lovel-up-logo.png' className='img img-fluid' alt='Love el up logo'></img>
              <span className='pt-2 text-light'>Lovel up, playa'</span>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='col-10 mt-5'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <input type='email' className='form-control' placeholder='Username' value={this.state.email} onChange={this.handleChange} name='username' required/>
                  <input type='password' className='form-control mt-1' placeholder='Password' value={this.state.password} onChange={this.handleChange} name='password' required />
                </div>
                <button type='submit' className='btn btn-outline-light full-width shadow-md'>Login</button>
              </form>
            </div>
          </div>
          <div className='row mt-3 d-flex justify-content-center'>
            <div className='col-10 d-flex justify-content-between'>
              <span className='text-underline' >Create Account</span>
              <span className='text-underline'>Forgot Password?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;