import * as React from 'react';

const BlankScreenMessage = (props) => {
  return (
    <div>
      <div className='pt-5'></div>
      <div className='mt-5 pt-5 d-flex justify-content-center align-items-center flex-column'>
        <img src='lovel-up.ico'
            className='p-2 img img-fluid'
            alt='lovel-up'/>
        <h3 className='p-2 text-center'>{ props.message }</h3>
        <h5 className='p-2 text-center text-secondary'>{props.subMessage}</h5>
      </div>
    </div>
  )
}

export default BlankScreenMessage;