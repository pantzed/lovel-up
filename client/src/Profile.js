import * as React from 'react';
import Navbar from './Navbar';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar props={this.props} activatePage={this.props.activatePage} active={'PROFILE'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-12 mt-3'>
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;