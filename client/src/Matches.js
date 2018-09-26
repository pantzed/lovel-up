import * as React from 'react';
import Navbar from './Navbar';
import './Matches.css';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [{name: 'Emma', lvl: 3}, {name: 'April', lvl: 2}, {name: 'Jenny', lvl: 8}, {name: 'Sarah', lvl: 4}],
    };
  }
  render() {
    return (
      <div>
        <Navbar activatePage={this.props.activatePage} active={'MATCHES'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-11 mt-3'>
            <h1>Matches</h1>
            {
              this.state.matches.map((match, index) => {
                return (
                  <div className='row mt-3 d-flex align-items-center border rounded' 
                       key={index} 
                       onClick={(e) => this.props.activatePage(e, 'CHAT', 'NAV', match)}>
                    <div className='col-3 p-2'>
                      <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg' 
                          className='img img-fluid rounded-circle border'
                          alt='match'>
                      </img>
                    </div>
                    <div className='col-6'>
                      <span>{match.name}</span>
                    </div>
                    <div className='col-3 d-flex flex-column align-items-center'>
                      <div>lvl</div>
                      <div>{match.lvl}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Matches;