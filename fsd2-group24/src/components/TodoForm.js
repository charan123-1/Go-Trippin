import React, { useState, useEffect, useRef } from 'react';
// import { TiArrowMaximiseOutline } from 'react-icons/ti';
import './Todo.css';
import axios from 'axios'
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  // to add bucketlist into json api
  const handleSubmit = e => {
    e.preventDefault();
    var todolist = {
      'id': Math.floor(Math.random() * 10000),
      'text': input
    };
    axios.post('http://localhost:5000/todos',todolist).then(res=> console.log("Added bucket list!!"))
    props.onSubmit(todolist);
    setInput('');
  };
  const handleSubmitUpdate = e => {
    e.preventDefault();
    props.onSubmit({ 'text': input });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your list'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmitUpdate} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a bucket list'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;