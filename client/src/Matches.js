import * as React from 'react';
import './Matches.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlankScreenMessage from './BlankScreenMessage';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      matches: [],
    };
  }

  componentDidMount() {
    let userId = this.props.userData[0].id;
    fetch(`matches/${userId}`, { 
      method: 'GET', 
      mode: 'cors',
      redirect: "follow",
      referrer: "no-referrer",
    })
    .then((res) => {
      return res.text()
    })
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.setState({
        matches: data
      })
    })
  }

  render() {

    const fakePhoto = 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg';

    return (
      <div>
        <nav className="p-2 d-flex justify-content-around fixed-bottom navbar-light bg-light">
          <div className='row fullWidth'>
            <a className='text-dark text-center col-4' role="button" onClick={(e) => this.props.activatePage(e, 'profile', 'matches')}> <FontAwesomeIcon icon='user' className='iconSize'/><div className='fontSize'>Me</div></a>
            <a className='text-primary text-center col-4' role="button"> <FontAwesomeIcon icon='comment' className='iconSize'/><div className='fontSize'>Chats</div></a>
            <a className='text-dark text-center col-4' role="button" onClick={(e) => this.props.activatePage(e, 'potentialMatch', 'matches')}> <FontAwesomeIcon icon='list' className='iconSize'/><div className='fontSize'>Discover</div></a>
          </div>
        </nav>
        <div className='row d-flex justify-content-center'>
          <div className='col-11 text-center'>
            <h2 className='pb-4 pt-5'>Matches</h2>
            {this.state.matches.length > 0 &&
              this.state.matches.map((match, index) => {
                return (
                  <div className='row mt-3 d-flex align-items-center border rounded' 
                       key={index} 
                       onClick={(e) => this.props.activatePage(e, 'chat', 'matches', match)}>
                    <div className='col-3 p-2'>
                      <img src={match.photo_1 || fakePhoto}
                          className='img img-fluid rounded-circle border'
                          alt='match'>
                      </img>
                    </div>
                    <div className='col-6'>
                      <span>{`${match.first} ${match.last}`}</span>
                    </div>
                    <div className='col-3 d-flex flex-column align-items-center'>
                      <div>lvl</div>
                      <div>{match.level}</div>
                    </div>
                  </div>
                )
              })
            }
            {
              this.state.matches.length < 1 && 
              <BlankScreenMessage message={'Looks like you haven\'t matched with anyone yet!'} 
                                  subMessage={'Go to the discover page and find a match!'}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Matches;