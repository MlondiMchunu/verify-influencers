import React from "react";
import { Search } from "lucide-react"; // import the Search icon

export default function InfluencerNameComponent() {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-8">
      <div className="relative w-full">
        {/* Search input container */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        {/* Search Icon */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
