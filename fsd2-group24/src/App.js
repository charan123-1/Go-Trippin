import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
