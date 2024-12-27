// filepath: /Users/eee/projects/med_appt/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/appointments" element={<h1>Appointments Page</h1>} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/sign_up" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing_Page />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;