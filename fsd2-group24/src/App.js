import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Item from './pages/Item';
// import Feedback from './pages/Feedback';
import Travel from './pages/Travel';
import Adventure from './pages/Adventure';
import  MapContainer  from './components/maps';
import MapContainerWarangal from './components/warmap';
import  MapContainerHyd  from './components/hydmap';
import  MapContainerTirupati  from './components/tirupatimap';
import MapContainerAraku from './components/Arakumap';
import Review from './components/Review';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/About';
//import Form from './components/Form';
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
          {/* <Route path="/feedback" element={<Feedback />} /> */}
          <Route path="/travelessential" element={<Travel />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/vizag" element={<MapContainer />} />
          <Route path="/hyderabad" element={<MapContainerHyd />} />
          <Route path="/tirupati" element={<MapContainerTirupati/>} />
          <Route path="/warangal" element={<MapContainerWarangal/>} />
          <Route path="/araku" element={<MapContainerAraku/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

