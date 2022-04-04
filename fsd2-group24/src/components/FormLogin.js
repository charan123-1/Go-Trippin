import React,{useState, useContext} from 'react';
// import validate from './validateInfo';
// import useForm2 from './useForm2';
import axios from 'axios';
import './Form.css';
import { UserContext } from '../App';
import { Link, useNavigate } from 'react-router-dom';
const FormLogin = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values2, errors } = useForm2(
  //   submitForm,
  //   validate
  // );
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      // navigate("/login")

      localStorage.setItem("token", res.data)
      dispatch({type:"USER",payload:true})
      console.log(res.message)
      console.log("User logged In")
      console.log(state)
      navigate("/")
    } catch (error) {
      // state = !state;
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Let's go!!!!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter your username'
            value={data.email}
            onChange={handleChange}
          />
          {/* If their is error in username it will appeared after clicking Log In button */}
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
          {/* If their is error in password it will appeared after clicking Log In button */}
          {/* {errors.password && <p>{errors.password}</p>} */}
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