import * as React from 'react';
import Profile from './Profile';
import './Login.css';
import './EditPictures.css';

class EditPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // let mainPic = document.getElementById('mainPictureContainer');
    // mainPic.setAttribute('style', `height: ${mainPic.offsetWidth}px`)
  }


  render() {
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
            <div className='col-8 p-0'>
              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                   className='mainImgSize'
                   alt='your profile'/> 
                </div>
              </div>
            </div>

            <div className='col-4 p-0'>
              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                   className='mainImgSize'
                   alt='your profile'/> 
                   </div>
              </div>
          

              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                   className='mainImgSize'
                   alt='your profile'/> 
                </div>
              </div>
            </div>
            {/* <div className='text-right'>
              <button type='button' className='btn btn-light btn-sm n-mt-6 mr-2 shadow'>Edit Pictures</button>
            </div> */}
          </div>

          <div className='row'>
            <div className='col-4 p-0'>
              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                   className='mainImgSize'
                   alt='your profile'/> 
                   </div>
                </div>
            </div>

            <div className='col-4 p-0'>
              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                  className='mainImgSize'
                  alt='your profile'/> 
                  </div>
              </div>
            </div>

            <div className='col-4 p-0'>
              <div className='p-2'>
                <div id='' className='image'>
                  <img src='https://www.hhcenter.org/wp-content/uploads/2017/02/person-placeholder.jpg'
                  className='mainImgSize'
                  alt='your profile'/> 
                  </div>
              </div>
            </div>

          </div>
        
      </div>
    );
  }
}

export default EditPictures;