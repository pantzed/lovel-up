import * as React from 'react';
import Navbar from './Navbar';
import './Matches.css';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar props={this.props} activatePage={this.props.activatePage} active={'MATCHES'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-12 mt-3'>
            <h1>Matches</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Matches;