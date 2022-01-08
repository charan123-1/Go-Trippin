import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    try {
        const response = fetch("http://localhost:5000/signupUsers", {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            username: values.username,
            password:values.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      alert("Successfly Signed In")
      } catch (err) {
        console.log(err);
      }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;