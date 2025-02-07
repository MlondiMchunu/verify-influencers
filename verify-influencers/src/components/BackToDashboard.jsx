import React from "react";
import {ArrowLeft} from "lucide-react";

export default function BackToDashboard(){
    return(
        <div className="absolute -left-[20px] -top-[50px] flex items-center gap-4">
      {/* Back Button */}
      <label
        className="bg-[#101727] text-[#1db687] rounded-lg inline-flex items-center gap-2 shadow-md cursor-pointer ml-5 py-2 whitespace-nowrap"
        onClick={() => window.history.back()} // Navigate back
      >
        <ArrowLeft size={20} className=" text-[#1db687]" />
        <span className="text-xs/3">Back to Dashboard</span>
      </label>

    </div>
    );
}
