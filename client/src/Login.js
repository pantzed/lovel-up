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
      <div>
        <Navbar props={this.props} activatePage={this.props.activatePage} active={'LOGIN'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-10 pt-5 text-center'>
            <h1>Welcome to Lovel Up</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;