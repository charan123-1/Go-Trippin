import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const useForm2 = (callback, validate) => {
    const [values2, setvalues2] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [users, setUsers] = useState([])
    const handleChange = e => {
        const { name, value } = e.target;
        setvalues2({
            ...values2,
            [name]: value
        });
    };
    const history = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values2));
        setIsSubmitting(true);
        try {
        
                fetch('http://localhost:5000/signupUsers?username={values2.username}&password={values2.password').then(res => {
                    return res.json();
                })
                    .then(data => {
                        console.log(data);
                        setUsers(data);
                    })
            alert("Successfly Logged In")
            history("/");
            
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

    return { handleChange, handleSubmit, values2, errors };
};

export default useForm2;