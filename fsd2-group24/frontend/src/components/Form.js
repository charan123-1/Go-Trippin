import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import {Link} from 'react-router-dom';

const Form = () => {
  //setting the isSubmitted as false initially
  const [isSubmitted, setIsSubmitted] = useState(false);
  //onClicking setting the isSubmitted to true 
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'><Link to="/">×</Link></span>
        <div className='form-content-left'>
          <img className='form-img' src='../images/200w.webp' alt='spaceship' />
        </div>
        {/* On clicking the submit in the signup form after validation it will be redirected to FormSuccess page (i.e. if isSubmitted is True)*/}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;