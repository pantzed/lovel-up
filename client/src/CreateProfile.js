import * as React from 'react';
import './CreateProfile.css';
import SignUpForm from './SIgnUpForm';



class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      birthdate: '',
      password: '',
      gender: '',
      preference: '',
      photo_1: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/users', { 
      method: 'POST', 
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(this.state)
    })
    .then((res, error) => {
      if (res.status === 500) {
        return Promise.reject(new Error("Username already exists!"))
      }
      else {
        return res.text();
      }
    })
    .then((text) => JSON.parse(text))
    .then((data) => {
      this.props.activateUser(data);
    })
    .then(() => {
      this.props.activatePage(null, 'profile', 'createProfile');
    })
    .catch((error) => {
      console.error(error.message);
    });
  }

  handleChange(event) {
    const prop = event.target.getAttribute('name') || event.target.name;
    const value = event.target.getAttribute('value') || event.target.value;
    this.setState({
      [prop]: value
    });
  }

  render() {
    return (
      <div className='row bg-colorful'>
        <div className='col-12'>
          <div className='row d-flex justify-content-center'>
            <div className='col-10 mt-5 text-center'>
              <img src='../lovel-up-logo.png' className='img img-fluid' alt='Love el up logo'></img>
              <span className='pt-2 text-light'>Lovel up, playa'</span>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12'>
              <form onSubmit={this.handleSubmit}>
                <SignUpForm id={'first'} type={'text'} placeholder={'First Name'} handleChange={this.handleChange}/>
                <SignUpForm id={'last'} type={'text'} placeholder={'Last Name'} handleChange={this.handleChange}/>
                <SignUpForm id={'username'} type={'email'} placeholder={'Email'} handleChange={this.handleChange}/>
                <SignUpForm id={'password'} type={'password'} placeholder={'Password'} handleChange={this.handleChange}/>
                <SignUpForm id={'location'} type={'text'} placeholder={'Zip Code'} handleChange={this.handleChange}/>
                <SignUpForm id={'birthdate'} type={'date'} placeholder={'Birthday'} handleChange={this.handleChange}/>
                <div className='row'>
                  <div className='col-6'>
                    <h4 className='text-light'>Gender</h4>
                    <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                      <label className='btn btn-secondary' name='gender' value='m' onClick={(e) => {this.handleChange(e)}}>
                        <input type='radio' id='gender-male' name='gender' autoComplete='off' value='male'/> Male
                      </label>
                      <label className='btn btn-secondary' name='gender' value='f' onClick={(e) => {this.handleChange(e)}}>
                        <input type='radio' id='gender-female' name='gender' autoComplete='off' value='female'/> Female
                      </label>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div>
                      <h4 className='text-light'>Preference</h4>
                    </div>
                    <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                      <label className='btn btn-secondary' name='preference' value='m' onClick={(e) => {this.handleChange(e)}}>
                        <input type='radio' id='preference-male' name='preference' autoComplete='off' defaultChecked/> Male
                      </label>
                      <label className='btn btn-secondary' name='preference' value='f' onClick={(e) => {this.handleChange(e)}}>
                        <input type='radio' id='preference-female' name='preference' autoComplete='off' /> Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className='form-row pb-5 d-flex justify-content-center'>
                  <div className='col-12'>
                    <button type='submit' className='mt-4 maxWidth btn btn-primary'>Submit!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='row mt-3 mb-5'>
          <div className='col-11'>
            <span className='text-underline' onClick={(e) => this.props.activatePage(e, 'login', 'createProfile')}> Back to Login Page</span>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default CreateProfile;