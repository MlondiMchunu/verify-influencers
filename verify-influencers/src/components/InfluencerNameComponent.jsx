import React from "react";
import { Search } from "lucide-react"; // import the Search icon

export default function InfluencerNameComponent() {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-1">
      <div className="relative w-full">
        {/* Search input container */}
        <input
          type="text"
          placeholder="Enter influencer name"
          className="w-full py-2 pl-10 pr-4 rounded-sm bg-[#182130] text-white text-xs/5 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        {/* Search Icon */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>
    </div>
  );
}
