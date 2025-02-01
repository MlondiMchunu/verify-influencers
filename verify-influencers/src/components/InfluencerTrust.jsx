import React from "react";

const InfluencerTrust = () => {
    return (

        <>
            <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#182130] p-6 rounded-lg shadow-md">
                {/* Header */}
                <h2 className=" text-xl font-bold">Influencer Trust Leaderboard</h2>
                <p className="text-xs/5 mt-2 opacity-80">Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-poered analysis.</p>



                <div className="flex justify-between mt-4 text-white">
                    <label className="bg-[#1f2937] px-6 py-3 rounded-md shadow border border-white-50 border-opacity-50">
                        <p className="text-sm text-gray-400">Active Influencers</p>
                        <p className="text-lg font-semibold">--</p>
                    </label>
                    <label className="bg-[#1f2937] px-6 py-3 rounded-md shadow border border-white-50 border-opacity-50">
                        <p className="text-sm text-gray-400">Claims Verified</p>
                        <p className="text-lg font-semibold">--</p>
                    </label>
                    <label className="bg-[#1f2937] px-6 py-3 rounded-md shadow border border-white-50 border-opacity-50">
                        <p className="text-sm text-gray-400">Average Trust Score</p>
                        <p className="text-lg font-semibold">--</p>
                    </label>
                </div>
            </div>
        </>
    );
};

export default InfluencerTrust;
