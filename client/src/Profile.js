import * as React from 'react';
import FormGroup from './FormGroup';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/users/${this.state.user[0].id}`, { 
      method: 'PATCH', 
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state.user[0])
    })
    .then((res, error) => {
      if (res.status === 500) {
        return Promise.reject(new Error("Something went wrong. Please try again"))
      }
      else {
        return res.text();
      }
    })
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.props.activateUser(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
  }

  handleChange(event) {
    event.preventDefault();

    let userData = this.state.user;
    userData[0][event.target.name] = event.target.value
    this.setState({
        user: userData
      }); 
    };

  render() {

    const fakeImage = 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg';
    const user = this.state.user[0];
    const dateNow = Date.now();
    const birthdateParsed = Date.parse(user.birthdate);
    const years = Math.floor((dateNow - birthdateParsed)/1000/60/60/24/365);

    return (
      <div>
        <Navbar props={this.props} activatePage={this.props.activatePage} active={'profile'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-12 text-center'>
            <h2>{`${user.first}'s Profile`}</h2>
            <img src={user.photo_1 || fakeImage}
                 className='img profile-photo' 
                 alt='your profile' /> 
            <div className='text-right'>
              <button onClick={(e) => this.props.activatePage(e, 'editPictures', 'profile')} type='button' className='btn btn-light btn-sm n-mt-6 mr-2 shadow-lg'>Edit Pictures</button>
            </div>
          </div>
        </div>
        <ProgressBar width={100} height={10} userData={user} justify={'center'} alignText={'center'}/>
        <div className='row mb-5 mt-4 d-flex justify-content-center'>
          <div className='col-5 text-center'>
            <h6>Total Exp</h6>
            <span>{user.total_exp}</span>
          </div>
          <div className='col-5 text-center'>
            <h6>Current Lovel</h6>
            <span>{user.level}</span>
          </div>
        </div>
        <div className='row mb-5 d-flex justify-content-center'>
          <div className='col-11'>
          <h4>User Info:</h4>
            <form onSubmit={this.handleSubmit}>
              <FormGroup id={'age'} type={'number'} label={'Age'} value={years} readOnly={true}/>
              <FormGroup id={'location'} type={'text'} label={'Location'} value={user.location} readOnly={false} />
              <FormGroup id={'occupation'} type={'text'} label={'Occupation'} value={user.occupation} handleChange={this.handleChange} readOnly={false} />
              <FormGroup id={'ethnicity'} type={'text'} label={'Ethnicity'} value={user.ethnicity} handleChange={this.handleChange} readOnly={false} />
              <FormGroup id={'religion'} type={'text'} label={'Religion'} value={user.religion} handleChange={this.handleChange} readOnly={false} />
              <FormGroup id={'school'} type={'text'} label={'School'} value={user.school} handleChange={this.handleChange} readOnly={false} />
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='text-right'>
                <button type='submit' className='btn btn-outline-primary'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;