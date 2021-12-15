import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import TodoList from './components/TodoList';


import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Item from './pages/Item';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/todo" element={ <TodoList/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/item" element={<Item/>}/>
        </Routes>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;

