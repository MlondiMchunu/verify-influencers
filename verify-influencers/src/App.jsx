import { useState } from 'react';
import { ArrowLeft } from "lucide-react"
import React from "react"
import MenuBar from "./components/MenuBar";
import Main from "./components/BodyComponent";
import BackToDashboard from './components/BackToDashboard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MenuBar />
        <div className="relative top-[50px]">
        <BackToDashboard/>
        <Main/>
        </div>
        {/*<main className="p-4">
          <section id="home" className="my-8">
            <h1 className="text-2xl font-bold">Welcome to MyApp</h1>
            <p>Home section content.</p>
          </section>
          <section id="about" className="my-8">
            <h2 className="text-xl font-bold">About Us</h2>
            <p>About section content.</p>
          </section>
          <section id="contact" className="my-8">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>Contact section content.</p>
          </section>
        </main>
        */}
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
    </>
  )
}

export default App
