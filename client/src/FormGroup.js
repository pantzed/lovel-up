import * as React from 'react';
import './FormGroup.css';

const FormGroup = (props) => {
  return (
    <div className='form-group row border-bottom'>
      <label htmlFor={props.id} className='col-5 col-form-label'> {props.label} </label>
      <div className='col-7'>
        <input id={props.id}
               type={props.type}
               className='form-control-plaintext'
               defaultValue={props.value}
               readOnly={props.readOnly}
               name={props.id}
               onChange={(e) => props.handleChange(e)}
               />
      </div>
    </div>
  );
}

export default FormGroup;