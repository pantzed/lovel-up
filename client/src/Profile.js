import * as React from 'react';
import FormGroup from './FormGroup';
import Navbar from './Navbar';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar props={this.props} activatePage={this.props.activatePage} active={'PROFILE'} />
        <div className='row d-flex justify-content-center'>
          <div className='col-12 text-center'>
            <h2>My Profile</h2>
            <img src='https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
                 className='img img-fluid' 
                 alt='your profile' /> 
            <div className='text-right'>
              <button type='button' className='btn btn-light btn-sm n-mt-6 mr-2 shadow'>Edit Pictures</button>
            </div>
          </div>
        </div>
        <div className='row mb-5 d-flex justify-content-center'>
          <div className='col-11'>
            <form>
              <FormGroup id={'age'} type={'number'} label={'Age'} value={'26'} readOnly={true}/>
              <FormGroup id={'location'} type={'text'} label={'Location'} value={'Austin, TX'} readOnly={false} />
              <FormGroup id={'ethnicity'} type={'text'} label={'Ethnicity'} value={'White Boi'} readOnly={false} />
              <FormGroup id={'religion'} type={'text'} label={'Religion'} value={'Agnostic'} readOnly={true} />
              <FormGroup id={'occupation'} type={'text'} label={'Occupation'} value={'Full-stack Developer'} readOnly={false} />
              <FormGroup id={'school'} type={'text'} label={'School'} value={'University of Texas'} readOnly={true} />
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