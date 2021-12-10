import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import TodoList from './components/TodoList';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/todo" element={ <TodoList/>}/>
        </Routes>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;

