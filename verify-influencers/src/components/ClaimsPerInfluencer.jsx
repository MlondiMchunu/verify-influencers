import React from "react";
import { Search } from "lucide-react"; // import the Search icon

export default function ClaimsPerInfluencer(value, onChange) {
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-1">
      <div className="relative w-full">
        {/* Search input container */}
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder="Enter number of claims"
          className="flex w-full py-2 pr-4 rounded-sm bg-[#101727] text-white text-xs/5 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

      </div>
    </div>
  );
}
