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
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'login', 'nav')}>Login</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'profile', 'nav')}>Profile</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'matches', 'nav')}>Matches</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'createProfile', 'nav')}>Create Profile</button>
            <button type='button' className='mt-2 btn btn-outline-primary' onClick={(e) => this.props.activatePage(e, 'potentialMatches', 'nav')}>Potential Matches</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;