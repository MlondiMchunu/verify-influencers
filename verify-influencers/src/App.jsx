import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./components/Main";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Main />
      <Routes>
        <Route path="/leaderboard" element={<div>Leaderboard Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/monetization" element={<div>Monetization Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/admin" element={<div>Admin Page</div>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
