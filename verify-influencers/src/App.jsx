import { useState } from 'react';
import { ArrowLeft } from "lucide-react"
import React from "react"
import MenuBar from "./components/MenuBar";
import Main from "./components/BodyComponent"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#101724]">
          <button className="absolute top-4 left flex items-center gap-2 bg-transparent text-white border border-white rounded-lg py-2 px-4 hover:bg-opacity-50 focus:outline-none">
            <ArrowLeft className="w-5 h-5" />
            <span>back to dashboard</span>
          </button>
        </div>
      <div>
        <MenuBar />
        <Main />
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
