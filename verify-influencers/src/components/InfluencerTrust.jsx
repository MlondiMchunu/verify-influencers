import React from "react";
import { useState } from 'react';

const influencerData = [
  { rank: 1, name: "Dr. John Doe", trustScore: 85, trend: "+2%", followers: "1.2M", verifiedClaims: 45, filter: "Nutrition" },
  { rank: 2, name: "Jane Smith", trustScore: 78, trend: "-1%", followers: "900K", verifiedClaims: 38, filter: "Fitness" },
  { rank: 3, name: "Alex Carter", trustScore: 92, trend: "+5%", followers: "2.5M", verifiedClaims: 60, filter: "Medicine" },
  { rank: 4, name: "Emily White", trustScore: 80, trend: "+3%", followers: "750K", verifiedClaims: 42, filter: "Mental Health" },
  { rank: 5, name: "Dr. Brian Green", trustScore: 74, trend: "0%", followers: "500K", verifiedClaims: 29, filter: "Nutrition" },
];

const InfluencerTrust = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button)
  }

  const [activeFilter, setActiveFilter] = useState("All");

  return (

    <>
      <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#101727] p-6 rounded-lg shadow-md">
        {/* Header */}
        <h2 className=" text-xl font-bold">Influencer Trust Leaderboard</h2>
        <p className="text-xs/5 mt-2 opacity-80">Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.</p>



        <div className="flex justify-between mt-4 text-white ">
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border border-white-50 border-opacity-50">
            <p className="text-xs text-gray-400">Active Influencers</p>
            <p className="text-lg font-semibold">--</p>
          </label>
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border border-white-50 border-opacity-50">
            <p className="text-xs text-gray-400">Claims Verified</p>
            <p className="text-lg font-semibold">--</p>
          </label>
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border border-white-50 border-opacity-50">
            <p className="text-xs text-gray-400">Average Trust Score</p>
            <p className="text-lg font-semibold">--</p>
          </label>
        </div>


        <div className="w-1/2 mt-6 flex gap-2 text-xs/5">
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap 
          ${activeButton === 'All' ? '!bg-[#1db885]' : '!bg-[#182130]'} 
          text-white`}
            onClick={() => handleClick('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap  
          ${activeButton === 'Nutrition' ? '!bg-[#1db885]' : '!bg-[#182130]'} 
          text-white`}
            onClick={() => handleClick('Nutrition')}
          >
            Nutrition
          </button>
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap 
          ${activeButton === 'Fitness' ? '!bg-[#1db885]' : '!bg-[#182130]'} 
          text-white`}
            onClick={() => handleClick('Fitness')}
          >
            Fitness
          </button>
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap 
          ${activeButton === 'Medicine' ? '!bg-[#1db885]' : '!bg-[#182130]'} 
          text-white`}
            onClick={() => handleClick('Medicine')}
          >
            Medicine
          </button>
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap 
          ${activeButton === 'Mental Health' ? '!bg-[#1db885]' : '!bg-[#182130]'} 
          text-white`}
            onClick={() => handleClick('Mental Health')}
          >
            Mental Health
          </button>
        </div>
      </div>
    </>
  );
};

export default InfluencerTrust;
