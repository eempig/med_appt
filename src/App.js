// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            {/* Example routes */}
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/appointments" element={<h1>Appointments Page</h1>} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/" element={<h1>Welcome to StayHealthy</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;