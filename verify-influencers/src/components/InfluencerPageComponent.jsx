import React from "react";
import { useLocation } from "react-router-dom";

export default function InfluencerPageComponent() {



    const location = useLocation();

    //retrieve influencer data from local storage
    const storedData = localStorage.getItem("selectedInfluencer");
    const parseData = storedData ? JSON.parse(storedData) : null;
    let influencer = location.state?.influencer || parseData;

    if (!influencer) {
        if (storedData) {
            influencer = JSON.parse(storedData)
        }
    }

    console.log("Received influencer data:", location.state?.influencer)

    return (
        <>
            <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#101727] p-6 rounded-lg shadow-md">

                {/*Profile section*/}
                <div className="flex items-start gap-6">
                    {/*Left Column - Profile Picture*/}
                    <div className="w-18 h-18 flex-shrink-0">
                        <img
                            src={influencer.profilePicture || "src/assets/andrew.jpg"}
                            alt={influencer.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/*Right Column -Info */}
                    <div className="flex-1">
                        {/*Influencer Name*/}
                        <h2 className="text-xl font-bold">{influencer.name || "Influencer Name"}</h2>

                        {/*Categories*/}
                        <div className="mt-3 flex-wrap gap-2">
                            {influencer.categories?.length > 0 ? (
                                influencer.categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className="px-3 py-1 mr-4 !bg-[#182130] text-white !rounded-full !text-xs/3">
                                        {category}
                                    </button>
                                ))
                            ) : (<p className="text-gray-400 text-xs/5">No categories available</p>)
                            }
                        </div>

                        {/*Profile Description */}
                        <p className="mt-1 text-gray-300 text-xs/5">
                            {influencer.description || "No profile description available. No profile description available. No profile description available"}
                        </p>
                    </div>

                </div>

                {/*New Labels Section*/}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
                    {/* Trust Score */}
                    <div className="p-4 bg-[#182130] rounded-lg">
                        <p className="text-xs font-bold text-white text-left">Trust Score</p>
                        <p className="text-lg font-bold text-[#14b983] text-left">{influencer.trustScore}%</p>
                        <p className="text-xs/2  text-gray-400 mt-2">Based on x verified claims</p>

                    </div>

                    {/* Yearly Revenue */}
                    <div className="p-4 bg-[#182130] rounded-lg text-left">
                        <p className="text-xs font-bold text-white text-left">Yearly Revenue</p>
                        <p className="text-lg font-bold text-[#14b983] ">{influencer.yearlyRevenue}%</p>
                        <p className="text-xs/2  text-gray-400 mt-2">Estimated earnings</p>

                    </div>

                    {/* Products */}
                    <div className="p-4 bg-[#182130] rounded-lg text-left">
                        <p className="text-xs font-bold text-white">Products</p>
                        <p className="text-lg font-bold text-[#14b983]">{influencer.products}</p>
                        <p className="text-xs/2  text-gray-400 mt-2">Recommended products</p>

                    </div>

                    {/* Followers */}
                    <div className="p-4 bg-[#182130] rounded-lg text-left">
                        <p className="text-xs font-bold text-white">Followers</p>
                        <p className="text-lg font-bold text-[#14b983]">{influencer.followers}</p>
                        <p className="text-xs/2  text-gray-400 mt-2">Total following</p>

                    </div>
                </div>


            </div>
        </>
    )
}