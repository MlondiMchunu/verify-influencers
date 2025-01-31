import React from "react";
import Menubar from "./Menubar";
import { useState } from 'react';
import { ArrowLeft } from "lucide-react"
import MenuBar from "./components/MenuBar";
import Main from "./components/BodyComponent";
import BackToDashboard from './components/BackToDashboard';
import './App.css'
import BodyComponent from './components/BodyComponent';
import InfluencerNameComponent from './components/InfluencerNameComponent';

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Menubar */}
      <Menubar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to the Admin Panel</h1>
        <p className="mt-2 text-gray-300">
          Adjust the screen size to see the layout respond dynamically.
        </p>
      </div>
    </div>
  );
};

export default Main;
