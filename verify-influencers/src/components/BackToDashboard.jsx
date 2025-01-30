import React from "react";
import {ArrowLeft} from "lucide-react";

export default function BackToDashboard(){
    return(
        <div className="absolute -left-[20px] -top-[50px] flex items-center gap-4">
      {/* Back Button */}
      <label
        className="bg-[#101727] text-[#1db687] p-3 rounded-lg flex items-center gap-2 shadow-md cursor-pointer"
        onClick={() => window.history.back()} // Navigate back
      >
        <ArrowLeft className="w-6 h-6 text-[#1db687]" />
        <span className="text-sm">Back to Dashboard</span>
      </label>

      {/* Research Tasks Header */}
      <h2 className="text-white text-lg font-semibold">Research Tasks</h2>
    </div>
    );
}
