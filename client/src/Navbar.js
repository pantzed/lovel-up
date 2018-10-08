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
      <div className='row py-3 text-dark'>
        <div className='col-12 d-flex justify-content-end align-items-center'>
          <button type='button' className='btn btn-outline-light' onClick={(e) => this.props.activatePage(e, 'nav', `${this.props.active}`)}>
            <FontAwesomeIcon icon='bars' className='text-dark'/>
          </button>
        </div>
      </div>
    )
  }
}

export default Navbar;