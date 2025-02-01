import { useState } from 'react';
import { ArrowLeft } from "lucide-react"
import React from "react"
import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import BackToDashboard from './components/BackToDashboard';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>
     {/*
      <div>
        <MenuBar />
        <div className="relative top-[50px]">
          <BackToDashboard />

          <BodyComponent/>
        </div>
       
      </div>
      <div>

      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/}
    </>
  )
}

export default App
