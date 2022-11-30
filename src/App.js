import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import './index.css'


const App = () => {
  return (
    <>
       <Router>
      <div>
        <Navbar/>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/" element={<Profile />} />
       <Route path="/weather" element={<WeatherCard />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />


        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App