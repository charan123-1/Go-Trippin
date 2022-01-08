import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Thanks for Signing Up! <br /> Your account has been created</h1>
      <img className='form-img-2' src='../images/success.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;