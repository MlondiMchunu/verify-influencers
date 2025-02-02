import React from "react";
import { CircleCheckBig, Users } from "lucide-react";
import { useState } from 'react';

const influencers = [
  { rank: 1, name: "Dr. John Doe", category: "Nutrition", trustScore: 85, trend: "+2%", followers: "1.2M", verifiedClaims: 45 },
  { rank: 2, name: "Jane Smith", category: "Fitness", trustScore: 78, trend: "-1%", followers: "900K", verifiedClaims: 38 },
  { rank: 3, name: "Alex Carter", category: "Medicine", trustScore: 92, trend: "+5%", followers: "2.5M", verifiedClaims: 60 },
  { rank: 4, name: "Emily White", category: "Mental Health", trustScore: 80, trend: "+3%", followers: "750K", verifiedClaims: 42 },
  { rank: 5, name: "Dr. Brian Green", category: "Nutrition", trustScore: 74, trend: "0%", followers: "500K", verifiedClaims: 29 },
];

const InfluencerTrust = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button)
  }

  //state for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  //function to handle category filter
  const filteredInfluencers = activeFilter === "All"
    ? influencers
    : influencers.filter(influencer => influencer.category === activeFilter);

  var totalInfluencers = 0;
  influencers.forEach(arr => {
    totalInfluencers++
  })
  console.log("Total no of influencers : ", totalInfluencers);



  var avTrustScore;
  var trustScoreTot = 0;
  influencers.forEach(avg => {
    trustScoreTot += avg.trustScore
  })
  avTrustScore = trustScoreTot / totalInfluencers;
  // console.log("TrustScore total: ",trustScoreTot)
  //console.log("TrustScore total: ",avTrustScore)



  return (

    <>
      <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#101727] p-6 rounded-lg shadow-md">
        {/* Header */}
        <h2 className=" text-xl font-bold">Influencer Trust Leaderboard</h2>
        <p className="text-xs/5 mt-2 opacity-80">Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.</p>



        <div className="flex justify-between mt-4 text-white ">
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border-collapse border border-gray-600 border-opacity-50">
          <div className="flex col-2 gap-2">
              <span>
                <Users size={20} className="text-[#10b97f] mt-3" />
              </span>
              <span>
                <p className="text-lg font-semibold">{totalInfluencers}</p>
                <p className="text-xs text-gray-400">Active Influencers</p>
              </span>
            </div>
          </label>
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border-collapse border border-gray-600 border-opacity-50">
            <div className="flex col-2 gap-2">
              <span>
                <CircleCheckBig size={20} className="text-[#10b97f] mt-3" />
              </span>
              <span>
                <p className="text-lg font-semibold">--</p>
                <p className="text-xs text-gray-400">Claims Verified</p>
              </span>
            </div>
          </label>
          <label className="bg-[#1f2937] px-6 py-3 rounded-sm shadow border-collapse border border-gray-600 border-opacity-50">
            <p className="text-lg font-semibold">{avTrustScore}%</p>
            <p className="text-xs text-gray-400">Average Trust Score</p>
          </label>
        </div>


        <div className="w-1/2 mt-6 flex gap-2 text-xs/5 ">

          {["All", "Nutrition", "Fitness", "Medicine", "Mental Health"].map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 !bg-[#182130] opacity-80 ${activeFilter === category ? "bg-[#1db885] !bg-[#1db885] text-white" : "bg-[#182130] text-white"
                }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}

          {/**
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
          **/}
        </div>

        {/*Influencer Table */}
        <div className="mt-6 overflow-x-auti">
          <table className="w-full border-collapse border border-gray-600">
            {/*Table Head*/}
            <thead className="bg-[#182130] text-white text-xs/5 opacity-70">
              <tr>
                <th className=" border-gray-600 px-4 py-2">Rank</th>
                <th className=" border-gray-600 px-4 py-2">Influencer</th>
                <th className=" border-gray-600 px-4 py-2">Category</th>
                <th className="border-gray-600 px-4 py-2">Trust Score</th>
                <th className=" border-gray-600 px-4 py-2">Trend</th>
                <th className=" border-gray-600 px-4 py-2">Followers</th>
                <th className=" border-gray-600 px-4 py-2">Verified Claims</th>
              </tr>
            </thead>

            {/*Table Body*/}
            <tbody className="text-gray-200">
              {filteredInfluencers.map((influencer) => (
                <tr key={influencer.id} className="text-center hover:bg-[#1b2a41] transition-all duration-300 text-xs/5 bg-[#182130]">
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.rank}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.name}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.category}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.trustScore}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.trend}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.followers}</td>
                  <td className="border-b border-gray-600 px-4 py-2">{influencer.verifiedClaims}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default InfluencerTrust;
