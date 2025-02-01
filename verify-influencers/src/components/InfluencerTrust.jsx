import React from "react";
import {useState} from 'react';

const InfluencerTrust = () => {

    const [actionButton,setActiveButton] = useState(null);
    
    const handleClick = (button)=>{
      setActiveButton(button)
    }
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
          <button className="bg-[#182130] !bg-[#182130] text-white  px-4 py-2 rounded-full whitespace-nowrap opacity-50 active:bg-[#1db885] focus:bg-[#1db885]">
            All
          </button>
          <button className="bg-[#182130] !bg-[#182130] text-white  px-4 py-2 rounded-full whitespace-nowrap opacity-50">
            Nutrition
          </button>
          <button className="bg-[#182130] !bg-[#182130] text-white px-4 py-2 rounded-full whitespace-nowrap opacity-50">
            Fitness
          </button>
          <button className="bg-[#182130] !bg-[#182130] text-white px-4 py-2 rounded-full whitespace-nowrap opacity-50">
            Medicine
          </button>
          <button className="bg-[#182130] !bg-[#182130] text-white px-4 py-2 rounded-full whitespace-nowrap opacity-50">
            Mental Health
          </button>
        </div>
      </div>
    </>
  );
};

export default InfluencerTrust;
