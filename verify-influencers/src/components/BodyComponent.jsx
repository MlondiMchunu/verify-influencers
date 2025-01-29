import React from 'react';
import {Settings} from "lucide-react";



export default function BodyComponent(){
    return (
        <>
        <div className="bg-[#3A4752] w-[calc(100vw-100px)] h-[calc(100vh-100px)] mx-auto my-[50px] rounded-2xl flex items-center justify-center">
            <div className="absolute top-0 left-0 flex items-center gap-2 p-4">
                <Settings className="w-3 h-3 text-[#1db687]"/>
                <p className="text-white text-sm text-lg font-bold">Research Configuration</p>
                </div>
            {/*Main content divided into two columns*/}

            <div className="mt-16 flex gap-8">
            {/*Left column*/}
            <div className="flex-1">
                {/*Left column content*/}
                <p>This is the left column content.</p>
            </div>


            </div>
        </div>
        </>
    );
}