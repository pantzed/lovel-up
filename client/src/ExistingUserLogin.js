import * as React from 'react';

const ExistingUserLogin = (props) => {
  return (
    <div>
      <div className='row d-flex justify-content-center'>
        <div className='col-10 mt-5'>
          <form onSubmit={props.handleSubmit}>
            <div className='form-group'>
              <input type='email' className='form-control' placeholder='Username' value={props.parentState.email} onChange={props.handleChange} name='username' required/>
              <input type='password' className='form-control mt-1' placeholder='Password' value={props.parentState.password} onChange={props.handleChange} name='password' required />
            </div>
            <button type='submit' className='btn btn-outline-light full-width shadow-md'>Login</button>
          </form>
        </div>
      </div>
      <div className='row mt-3 d-flex justify-content-center'>
        <div className='col-10 d-flex justify-content-between'>
          <span className='text-underline' onClick={(e) => props.activatePage(e, 'createProfile', 'login')}>Create Account</span>
          <span className='text-underline'>Forgot Password?</span>
        </div>
      </div>
    </div>
  )
}

export default ExistingUserLogin;