// import React, { useState, useEffect } from 'react';
// import TodoForm from './TodoForm';
// import Todo from './Todo';
// import './Todo.css';
// import axios from 'axios';
// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = todo => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }
//     const newTodos = [todo, ...todos];
//     setTodos(newTodos);
//     console.log(...todos);

//   };

//  // updating data in json and displaying
//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }
//     axios.put('http://localhost:5000/todos/' + todoId, {
//       "id": todoId,
//       "text":newValue.text
//     })
//       .then(res => {
//         console.log(newValue.text);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     console.log(newValue)
//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
//   };

//   //To delete data from json file
//   const removeTodo = id => {
//     const removedArr = [...todos].filter(todo => todo.id !== id);
//     setTodos(removedArr);
//     axios.delete("http://localhost:5000/todos/" + id).then(res => {
//       console.log("Bucket list deleted!!");
//       alert("Bucket list Deleted!!")
//     }).catch(error => {
//       console.log(error);
//     })
//   };

//   const completeTodo = id => {
//     let updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };
  
//   //Reading json data
//   useEffect(() => {
//     fetch('http://localhost:5000/todos').then(res => {
//       return res.json();
//     })
//       .then(data=> {
//         console.log(data);
//         setTodos(data);
//     })
//   }, [])

//   return (
//       <div className ="todolist">
//       <h1 className='h1-todo'>What's the Plan for Today?</h1>
//       <TodoForm onSubmit={addTodo} />
//       <Todo todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//         />
//       </div>
//   );
// }

// export default TodoList;

import React, { useState, useEffect, useRef } from 'react';
// import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';
import './Todo.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import axios from 'axios';

function TodoList() {
  // const [todos, setTodos] = useState([]);
  const [todoList, settodoList] = useState([])
  const [newText, setnewText] = useState("")
  const [load, setLoad] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const inputRef = useRef(null);
  const [text, setText] = useState(edit ? edit.value : '');

  // const addTodo = todo => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }
  //   const newTodos = [todo, ...todos];
  //   setTodos(newTodos);
  //   console.log(...todos);

  // };

  // updating data in json and displaying
  // const updateTodo = (todoId, newValue) => {
  //   if (!newValue.text || /^\s*$/.test(newValue.text)) {
  //     return;
  //   }
  //   axios.put('http://localhost:4000/todos/' + todoId, {
  //     "text":newValue.text
  //   })
  //     .then(res => {
  //       console.log(newValue.text);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   console.log(newValue)
  //   setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  // };

  //To delete data from json file
  // const removeTodo = id => {
  //   const removedArr = [...todos].filter(todo => todo.id !== id);
  //   setTodos(removedArr);
  //   axios.delete("http://localhost:4000/todos/" + id).then(res => {
  //     console.log("Bucket list deleted!!");
  //     alert("Bucket list Deleted!!")
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // };

  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  //Reading json data
  // useEffect(() => {
  //   fetch('http://localhost:4000/todos').then(res => {
  //     return res.json();
  //   })
  //     .then(data => {
  //       console.log(data)
  //       setTodos(data);
  //   })
  // }, [])
  // useEffect(() => {

  //   axios.get('http://localhost:4000/todos').then((res) => {
  //     console.log(res);
  //   })
  // }, []);
  useEffect(() => {
    axios.get("http://localhost:4000/todos").then((res) => {
      settodoList(res.data)
      console.log(res)
    })
  }, [])

  const addToList = async () => {
    await axios.post('http://localhost:4000/todos/', { text: text }).then(res => console.log("Added bucket list!!"))
    setText('')
    alert("Bucketlist item added!!")
    window.location.reload(false);
  }
  const updateList = async (id) => {
    await axios.put(`http://localhost:4000/todos/${id}`, {
      newText: newText
    })
    alert("Bucketlist updated")
    setnewText('')
    window.location.reload(false);
  }
  const DeleteList = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`)
    alert("Bucketlist item deleted!!")
    window.location.reload(false);
  }
  const updateSubmit = (id) => {
    setEdit({ id: id })
  }
  return (
    <div className="todolist">
      <h1 className='h1-todo'>What's the Plan for Today?</h1>
      {/* <TodoForm /> */}
      <><input
        placeholder='Add a bucket list'
        type="text"
        name="text"
        className='todo-input'
        value={text}
        ref={inputRef}
        onChange={(event) => {
          event.preventDefault();
          setText(event.target.value)
        }}
      />
        <button className='todo-button' onClick={addToList}>
          Add
        </button>
      </>

      <br />

      {edit.id ? <><input
        placeholder='Update your list'
        className='todo-input-edit'
        ref={inputRef}
        onChange={(event) => {
          setnewText(event.target.value);
        }} /><button className='todo-button edit' onClick={() => updateList(edit.id)}>
          Update
        </button></> : ''}

      {todoList.map((val, key) => {
        return <div
          className={val.isComplete ? 'todo-row complete' : 'todo-row'}
          key={key}
        >
          {val.text}
          <div className='icons'>
            {/* Onclick it will remove the bucketlist item */}
            <RiCloseCircleLine
              className='delete-icon'
              onClick={() => DeleteList(val._id)}
            />
            {/* Onclick it will update the bucketlist item from db*/}
            <TiEdit
              onClick={() => updateSubmit(val._id)}
              className='edit-icon'
            />
          </div>


        </div>
      }

      )}
    </div>
  );
}

export default TodoList;