import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuBar from './MenuBar';
import InfluencerTrust from "./InfluencerTrust";

export default function Main() {
  return (
    <>

      <MenuBar />
      <InfluencerTrust />
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Menubar */}


        {/* Main Content */}
        
      </div>

    </>
  );

};

