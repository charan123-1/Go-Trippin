import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css';
import axios from 'axios';
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);

  };

 // updating data in json and displaying
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    axios.put('http://localhost:5000/todos/' + todoId, {
      "id": todoId,
      "text":newValue.text
    })
      .then(res => {
        console.log(newValue.text);
      })
      .catch((err) => {
        console.log(err);
      })
    console.log(newValue)
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //To delete data from json file
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
    axios.delete("http://localhost:5000/todos/" + id).then(res => {
      console.log("Bucket list deleted!!");
      alert("Bucket list Deleted!!")
    }).catch(error => {
      console.log(error);
    })
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  //Reading json data
  useEffect(() => {
    fetch('http://localhost:5000/todos').then(res => {
      return res.json();
    })
      .then(data=> {
        console.log(data);
        setTodos(data);
    })
  }, [])

  return (
      <div className ="todolist">
      <h1 className='h1-todo'>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
      </div>
  );
}

export default TodoList;