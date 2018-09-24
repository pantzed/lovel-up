import * as React from 'react';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <h1>Navigation</h1>
            <button type='button' className='btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'PROFILE', 'NAV')}>Profile</button>
            <button type='button' className='btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'LOGIN', 'NAV')}>Login</button>
            <button type='button' className='btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'CHAT', 'NAV')}>Chat</button>
            <button type='button' className='btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'MATCHES', 'NAV')}>Matches</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;