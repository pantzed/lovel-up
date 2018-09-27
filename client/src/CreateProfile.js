import * as React from 'react';
import './CreateProfile.css';
import Navbar from './Navbar';
import SignUpForm from './SIgnUpForm';



class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='row bg-colorful'>
        <div className='col-12'>
          <Navbar props={this.props} activatePage={this.props.activatePage} active={'PROFILE'} />
          <div className='row d-flex justify-content-center'>
            <div className='col-10 mt-5 text-center'>
              <img src='../lovel-up-logo.png' className='img img-fluid' alt='Love el up logo'></img>
              <span className='pt-2 text-light'>Lovel up, playa'</span>
            </div>
          </div>

          <form>

            <SignUpForm id={'firstName'} type={'text'} placeholder={'First Name'}/>
            <SignUpForm id={'lastName'} type={'text'} placeholder={'Last Name'}/>
            <SignUpForm id={'birthday'} type={'date'} placeholder={'Birthday'}/>
            <SignUpForm id={'username'} type={'email'} placeholder={'Email'}/>
            <SignUpForm id={'password'} type={'password'} placeholder={'Password'}/>
            <div className='row'>
              <div className='col-6'>
                <div>
                  <h4 className='text-light'>Gender</h4>
               </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary">
                    <input type="radio" id="male" autocomplete="off" checked/> Male
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" id="female" autocomplete="off"/> Female
                  </label>
                </div>
              </div>

              <div className='col-6'>
                <div>
                  <h4 className='text-light'>Preference</h4>
                </div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary">
                    <input type="radio" id="male" autocomplete="off" checked/> Male
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" id="female" autocomplete="off"/> Female
                  </label>
                </div>
              </div>
            </div>

            <div className='form-row d-flex justify-content-center'>
              <div className='col-12'>
                <button type="submit" class="mt-2 maxWidth btn btn-primary" >Submit!</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default CreateProfile;