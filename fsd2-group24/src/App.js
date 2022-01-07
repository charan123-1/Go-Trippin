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
import MapContainer from './components/maps';
import MapContainerWarangal from './components/warmap';
import MapContainerHyd from './components/hydmap';
import MapContainerTirupati from './components/tirupatimap';
import MapContainerAraku from './components/Arakumap';
import Review from './components/Review';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/About';

//import Form from './components/Form';
import Accommodation from './components/Accommodation';
import { Cart } from './components/Cart';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Backpack from './pages/Backpack';
import Clothing from './pages/Clothing';
import Charger from './pages/Charger';
import Wallet from './pages/Wallet';
import Flashtorch from './pages/Flashtorch';
import Skincare from './pages/Skincare';
import Medication from './pages/Medication';
import Toiletrie from './pages/Toiletrie';
import Trekking from './pages/Trekking';
import Skydiving from './pages/Skydiving';
import Surfing from './pages/Surfing';
import Scubadiving from './pages/Scubadiving';
import Cycling from './pages/Cycling';
import Swimming from './pages/Swimming';

function App() {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/item" element={<Item />} />
            <Route path="/travelessential" element={<Travel />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/vizag" element={<MapContainer />} />
            <Route path="/hyderabad" element={<MapContainerHyd />} />
            <Route path="/tirupati" element={<MapContainerTirupati />} />
            <Route path="/warangal" element={<MapContainerWarangal />} />
            <Route path="/araku" element={<MapContainerAraku />} />
            <Route path="/review" element={<Review />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />

            <Route path="/item" element={<Item />} />
            <Route path="/backpack" element={<Backpack />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/chargers" element={<Charger />} />
            <Route path="/wallets" element={<Wallet />} />
            <Route path="/flashtorches" element={<Flashtorch />} />
            <Route path="/skincare" element={<Skincare />} />
            <Route path="/medication" element={<Medication />} />
            <Route path="/toiletries" element={<Toiletrie />} />
            <Route path="/trekking" element={<Trekking />} />
            <Route path="/skydiving" element={<Skydiving />} />
            <Route path="/surfing" element={<Surfing />} />
            <Route path="/scubadiving" element={<Scubadiving />} />
            <Route path="/cycling" element={<Cycling />} />
            <Route path="/swimming" element={<Swimming />} />
            {/* <Route path="/feedback" element={<Feedback />} /> */}
            <Route path="/travelessential" element={<Travel />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/places" element={<MapContainer />} />
            <Route path="/accommodation" element={<Accommodation />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

