import React from "react";
import {ArrowLeft} from "lucide-react";

export default function BackToDashboard(){
    return(
        <button
            className="fixed top-[60px] left-[50px] bg-transparent hover:bg-gray-800 text-white p-2 rounded-full shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={()=> window.history.back()}>
                <ArrowLeft className="w-6 h-6"/>
            </button>
    );
}
