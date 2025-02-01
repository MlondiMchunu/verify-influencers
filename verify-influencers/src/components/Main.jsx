import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuBar from './MenuBar'

export default function Main() {
  return (
    <>

      <MenuBar />
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Menubar */}


        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Welcome to the Admin Panel</h1>
          <p className="mt-2 text-gray-300">
            Adjust the screen size to see the layout respond dynamically.
          </p>
        </div>
      </div>

    </>
  );

};

