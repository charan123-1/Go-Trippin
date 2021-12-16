import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Item from './pages/Item';
import Feedback from './pages/Feedback';
import Travel from './pages/Travel';
import Adventure from './pages/Adventure';
import  MapContainer  from './components/maps';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/item" element={<Item />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/travelessential" element={<Travel />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/places" element={<MapContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

