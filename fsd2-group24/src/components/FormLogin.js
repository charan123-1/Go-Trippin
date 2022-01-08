import React from 'react';
import validate from './validateInfo';
import useForm2 from './useForm2';
import './Form.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values2, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Let's go!!!!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values2.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values2.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Don't have an account? SignUp <a href='/sign-up'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;