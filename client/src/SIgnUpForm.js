import * as React from 'react';

const SignUpForm = (props) => {
    return (
           <div className='form-group row'>
               <label htmlFor={props.id} className='col-sm-2 col-form-label'></label>
               <div className='col-sm-10'>
               <input type={props.type} className='form-control' id={props.id} placeholder={props.placeholder}/>
               </div>
           </div>
       );
    }

export default SignUpForm;