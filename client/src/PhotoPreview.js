import * as React from 'react';

const PhotoPreview = (props) => {
  const classes = `col-${props.col} p-0`;
  return (
    <div className={classes}>
      <div className='p-2'>
        <div id={props.id} className='image'>
          <img src={props.src}
            className='mainImgSize'
            alt='profile pic'/> 
        </div>
      </div>
    </div>
  )
}

export default PhotoPreview;