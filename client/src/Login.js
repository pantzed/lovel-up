import * as React from 'react';
import Navbar from './Navbar';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <form action='/users' method='POST'>
                <div className='form-group'>
                  <input type='email' className='form-control' placeholder='Username' required/>
                  <input type='password' className='form-control mt-1' placeholder='Password' required />
                </div>
                <button type='submit' className='btn btn-outline-light full-width shadow-md'>Login</button>
              </form>
            </div>
          </div>
          <div className='row mt-3 d-flex justify-content-center'>
            <div className='col-10 d-flex justify-content-between'>
              <span className='text-underline' onClick={(e) => this.props.activatePage(e, 'CREATE_PROFILE', 'NAV')}>Create Account</span>
              <span className='text-underline'>Forgot Password?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;