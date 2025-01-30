import React from 'react';
import { Settings } from "lucide-react";
import InfluencerNameComponent from './InfluencerNameComponent';
import ClaimsPerInfluencer from './ClaimsPerInfluencer'; 



export default function BodyComponent() {
    return (
        <>
            <div className="bg-[#182130] w-[calc(100vw-100px)] h-[calc(100vh-100px)] mx-auto my-[50px] rounded-sm flex items-center justify-center">
                <div className="absolute top-0 left-0 flex items-center gap-2 p-4">
                    <Settings className="w-3 h-3 text-[#1db687]" />
                    <p className="text-white text-sm text-lg font-bold">Research Configuration</p>
                </div>
                {/*Main content divided into two columns*/}

                <div className="mt-16 flex gap-2" >
                    {/*Left column*/}
                    <div className="flex-1 flex flex-col items-center">
                        {/*Left column content*/}

                        <label className="ml-[10px] w-full max-w-[1040px] min-h-[100px] bg-[#182130] border-1 border-gray-400 text-white px-6 py-4 rounded-sm mb-6 mt-[5px] flex flex-col items-center justify-center cursor-pointer text-center transition-all duration-300">
                            <span className="text-sm font-bold block">Specific Influencer</span>
                            <span className="text-xs/5 opacity-80 block mt-1">
                                Research a known health influencer by name
                            </span>
                        </label>

                        <div className="text-white text-xs/5 opacity-80"><p className="ml-[5px]">Time Range</p></div>
                        <div className="ml-[10px] grid grid-cols-2 gap-1 w-full max-w-[1040px] opacity-80">
                            {["Last Week", "Last Month", "Last Year", "All Time"].map((label, index) => (
                                <label
                                    key={index}
                                    className="w-full min-h-[30px] bg-[#182130] border-1 border-gray-400 text-white flex items-center justify-center text-xs/5 rounded-sm cursor-pointer text-center transition-all duration-300">
                                    {label}
                                </label>
                            ))}
                        </div>

                        <div className="text-white text-xs/5 opacity-80 mt-[20px]" ><p className="ml-[5px]">Influencer Name</p></div>
                        <div>
                            <InfluencerNameComponent/>
                        </div>
                        <div></div>

                    </div>

                    {/*Right Column*/}
                    <div className="flex-1">
                        {/*Right Column Content*/}
                        <p>This is the right column content.</p>
                    </div>
                </div>
            </div>
        </>
    );
}