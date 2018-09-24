import * as React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='row d-flex justify-content-center'>
        <div className='col-10 pt-5 text-center'>
          <h1>Welcome to Lovel Up</h1>
        </div>
      </div>
    );
  }
}

export default Login;