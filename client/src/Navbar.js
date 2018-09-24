import * as React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='row py-2 bg-dark text-light'>
        <div className='col-12 d-flex justify-content-between align-items-center'>
          <span> Lovel Up </span>
          <button type='button' className='btn btn-outline-light'><FontAwesomeIcon icon='bars'/></button>
        </div>
      </div>
    )
  }
}

export default Navbar;