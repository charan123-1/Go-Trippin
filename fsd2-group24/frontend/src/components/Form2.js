import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';
import {Link} from 'react-router-dom';

const Form2 = () => {
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
        {/* On clicking the submit in the Login form after validation it will be redirected to FormSuccess page (i.e. if isSubmitted is True)*/}
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