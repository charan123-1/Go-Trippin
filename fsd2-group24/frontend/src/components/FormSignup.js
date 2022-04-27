import React from 'react';
import { useState,useContext } from 'react';
// import validate from './validateInfo';
// import useForm from './useForm';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import axios from 'axios';
import { UserContext } from '../App';
const FormSignup = () => {
  //Taking all the functions from useForm component
  // const { errors } = useForm(
  //   submitForm,
  //   validate
  // );
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState({
    username: "",
    email: "",
    password:""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/users";
      const { data: res } = await axios.post(url, data);
      dispatch({ type: "USER", payload: true })
      console.log(state)
      console.log(res.message)
      navigate("/")
    } catch (error) {
      // state = !state;
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={data.email}
            onChange={handleChange}
          />
          {/* If their is error in email it will appeared after clicking SignUp button */}
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={data.username}
            onChange={handleChange}
          />
          {/* If their is error in username it will appeared after clicking SignUp button */}
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={data.password}
            onChange={handleChange}
          />
          {/* If their is error in password it will appeared after clicking SignUp button */}
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        {/*<div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Confirm your password'
            value={data.password}
            onChange={handleChange}
  />*/}
          {/* If their is error in confirm password it will appeared after clicking SignUp button */}
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        {/*</div> */}
        {error && <div className='error_msg'>{error} </div>}
        <button className='form-input-btn' type='submit' >
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;