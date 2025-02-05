import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import InfluencerTrust from './components/InfluencerTrust';
import Main from "./components/Main";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Main />
      
    </>
  )
}

export default App
