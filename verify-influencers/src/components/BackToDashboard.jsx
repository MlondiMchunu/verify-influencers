import React from "react";
import {ArrowLeft} from "lucide-react";

export default function BackToDashboard(){
    return(
        <button
            className="absolute -left-[20px] -top-[50px] flex items-center gap-2 bg-red-800 text-[#1db687] p-2 rounded-lg"
            onClick={()=> window.history.back()}>
                <ArrowLeft className="w-6 h-6"/>
                <span className="text-sm">Back to Dashboard</span>
            </button>
    );
}
