import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';
import {Link} from 'react-router-dom';

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'><Link to="/">×</Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='../images/rocket.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form2;