import * as React from 'react';
import PhotoPreview from './PhotoPreview';
import FormGroup from './FormGroup';
import './Login.css';
import './EditPictures.css';

class EditPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let element = event.target;
    let elementName = event.target.name;
    let elementValue = event.target.value;
    fetch(`${elementValue}`)
    .then((res) => {
      if (res.status !== 200) {
        element.classList.add('border', 'border-danger');
        return Promise.reject(new Error('The image you requested is unavailable'));
      }
      else {
        let userData = this.state.user;
        userData[elementName] = elementValue;
        this.setState({
          user: userData
        });
        element.classList.remove('border', 'border-danger');
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const updateData = {
      photo_1: this.state.user.photo_1,
      photo_2: this.state.user.photo_2,
      photo_3: this.state.user.photo_3,
      photo_4: this.state.user.photo_4,
      photo_5: this.state.user.photo_5,
    }
    fetch(`/users/${this.state.user.id}/dynamic`, { 
      method: 'PATCH', 
      mode: 'cors',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(updateData)
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
      this.props.activateUser([data]);
    })
    .catch((error) => {
      console.error(error.message);
    });
  }


  render() {

    const user = this.state.user;
    const fakeImage = 'https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg';

    return (
      <div>
        <div className='d-flex justify-content-end mt-2 py-3'>
          <button type='button' className='btn btn-outline-primary btn-sm'onClick={(e) => this.props.activatePage(e, 'PROFILE', 'EDIT_PICTURES')}>Back</button>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 text-center'>
            <h2>Edit Pictures</h2>
          </div>
        </div>
          <div className='row d-flex justify-content-between'>
            <PhotoPreview id={'photo_1'} col={8} src={user.photo_1 || fakeImage}/>
            <div className='col-4'>
              <div className='row'>
                <PhotoPreview id={'photo_1'} col={12} src={user.photo_2 || fakeImage}/>
                <PhotoPreview id={'photo_1'} col={12} src={user.photo_3 || fakeImage}/>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-between'>
            <PhotoPreview id={'photo_1'} col={4} src={user.photo_4 || fakeImage}/>
            <PhotoPreview id={'photo_1'} col={4} src={user.photo_5 || fakeImage}/>
            <PhotoPreview id={'photo_1'} col={4} src={user.photo_6 || fakeImage}/>
          </div>
          <hr />
          <h4 className='mt-3'>Update Photos</h4>
          <form className='d-flex flex-column mb-5'>
            <FormGroup id={'photo_1'} type={'url'} label={'Photo 1:'} value={user.photo_1} readOnly={false} handleChange={this.handleChange}/>
            <FormGroup id={'photo_2'} type={'url'} label={'Photo 2:'} value={user.photo_2} readOnly={false} handleChange={this.handleChange}/>
            <FormGroup id={'photo_3'} type={'url'} label={'Photo 3:'} value={user.photo_3} readOnly={false} handleChange={this.handleChange}/>
            <FormGroup id={'photo_4'} type={'url'} label={'Photo 4:'} value={user.photo_4} readOnly={false} handleChange={this.handleChange}/>
            <FormGroup id={'photo_5'} type={'url'} label={'Photo 5:'} value={user.photo_5} readOnly={false} handleChange={this.handleChange}/>
            <FormGroup id={'photo_6'} type={'url'} label={'Photo 6:'} value={user.photo_6} readOnly={false} handleChange={this.handleChange}/>
            <button type='submit' className='btn btn-primary align-self-end' onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
    );
  }
}

export default EditPictures;