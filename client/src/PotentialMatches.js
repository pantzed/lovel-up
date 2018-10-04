import * as React from 'react';
import './PotentialMatches.css';
import Navbar from './Navbar';
import FormGroup from './FormGroup';


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
                // else {
                //   this.props.activateUser([data]);
                // }
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
      console.log('potentialMacthesList: ', this.state.potentialMatches);
      const user = this.state.potentialMatches[0];

      const dateNow = Date.now();
      const birthdateParsed = Date.parse(user.birthdate);
      const years = Math.floor((dateNow - birthdateParsed)/1000/60/60/24/365);
      

      return (
        <div>
          <Navbar props={this.props} activatePage={this.props.activatePage} active={'PROFILE'} />
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
                <div>
                </div>

              </div>
            </div>
       

        </div>
    
      );
    }
  }
  
  export default PotentialMatches;