import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  //intializing the values as null at furst
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  //considering their are no errors at first
  const [errors, setErrors] = useState({});
  //intially setting the isSubmitting to false
  const [isSubmitting, setIsSubmitting] = useState(false);
// assigning the values as per the input
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
//setting Errors by calling validate function to the values
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (errors) {
      console.log("Invalid Details")
    }
    else if(errors == null){
    console.log("Invalid!!")
  }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        //fetching the json signupUsers and using method POST to add details 
        fetch("http://localhost:5000/signupUsers", {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            username: values.username,
            password: values.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;