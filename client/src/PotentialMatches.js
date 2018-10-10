import * as React from 'react';
import './PotentialMatches.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class PotentialMatches extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: this.props.userData,
        potentialMatches: this.props.potentialMatches,
      };
    }

    nextUser(event, match){
        let matches=this.state.potentialMatches;

        
        if(match){
          console.log('potential match PATCH',matches[0]);

            fetch(`/matches/${this.props.userData[0].id}`, {
                method: "PATCH",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(matches[0]),
              })
              .then((res) => res.text())
              .then(text=> JSON.parse(text))
              .then(data => {
                if(data.error) {
                  let errorMessage = new Error(data.error);
                  return Promise.reject(errorMessage);
                }

              })
              .catch((error) => {
                console.error(error.message);
              });
            
        }
        matches.shift();
        this.setState({
            potentialMatches: matches
        });
        this.props.userPotentialMatches(matches);
    }
  
    render() {
      let matches;
      if(this.state.potentialMatches.length>0){
        console.log('potentialMacthesList: ', this.state.potentialMatches);
        const user = this.state.potentialMatches[0];
  
        const dateNow = Date.now();
        const birthdateParsed = Date.parse(user.birthdate);
        const years = Math.floor((dateNow - birthdateParsed)/1000/60/60/24/365);
        
        matches = <div>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 text-center'>
            <h2>{`${user.first}'s Profile`}</h2>
            <img src='https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
                  className='img img-fluid' 
                  alt='your profile' /> 
          </div>
        </div>
          <div className='row mb-5 d-flex justify-content-center'>
            <div className='col-11'>
            <div className='mt-4'>{user.first}</div>
            <div className='border-bottom'>{years}, {user.location}</div>

            <div className='text-secondary mt-4'>Occupation</div>
            <div className='mb-4 text-dark'>{user.occupation}</div>

            <div className='text-secondary'>Ethnicity</div>
            <div className='mb-4 text-dark'>{user.ethnicity}</div>

            <div className='text-secondary'>Religion</div>
            <div className='mb-4 text-dark'>{user.religion}</div>

            <div className='text-secondary'>School</div>
            <div className='mb-4 text-dark'>{user.school}</div>

            <div className='text-secondary border-top'>Bio</div>
            <div className='mb-4 text-dark border-bottom'>{user.description}</div>

            <div className='d-flex justify-content-between'>
              <button type='button' className='btn btn-outline-danger full-width shadow-md col-5' onClick={(e) => this.nextUser(e, false)} >Pass</button>
              <button type='button' className='btn btn-outline-primary full-width shadow-md col-5'onClick={(e) => this.nextUser(e, true)}>Like</button>
            </div>
            <div className='botSpace mb-5 pb-5'></div>

            </div>
          </div>
        </div>
      }
      else { 
          
        matches=<div>
          <div className=''>
          <div className='pt-5'></div>
          <div className='mt-5 pt-5 d-flex justify-content-center align-items-center flex-column'>
            <img src='lovel-up.ico'
                className='p-2 img img-fluid'
                alt='lovel-up'/>
            <h3 className='p-2 text-center'>Looks like you're out of players to match with!</h3>
            <h5 className='p-2 text-center text-secondary'>Check back soon!</h5>
          </div>
          </div>
          </div>;
      }
    
      return (
        <div>
          <nav className="p-2 d-flex justify-content-around fixed-bottom navbar-light bg-light">
            <div className='row fullWidth'>
              <a className='text-dark text-center col-4' role="button" onClick={(e) => this.props.activatePage(e, 'profile', 'potentialMatch')}> <FontAwesomeIcon icon='user' className='iconSize'/><div className='fontSize'>Me</div></a>
              <a className='text-dark text-center col-4' role="button" onClick={(e) => this.props.activatePage(e, 'matches', 'potentialMatch')}> <FontAwesomeIcon icon='comment' className='iconSize'/><div className='fontSize'>Chats</div></a>
              <a className='text-primary text-center col-4' role="button"> <FontAwesomeIcon icon='list' className='iconSize'/><div className='fontSize'>Discover</div></a>
            </div>
          </nav>
          {matches}
        </div>
      );
    }
  }
  
  export default PotentialMatches;