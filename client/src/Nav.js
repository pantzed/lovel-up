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
        <div className='row d-flex justify-content-center'>
          <div className='col-12 mt-5 d-flex flex-column'>
            <h1>Navigation</h1>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'PROFILE', 'NAV')}>Profile</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'LOGIN', 'NAV')}>Login</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'MATCHES', 'NAV')}>Matches</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'CREATE_PROFILE', 'NAV')}>Create Profile</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;