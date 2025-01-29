import React from 'react';
import {Settings} from "lucide-react";



export default function BodyComponent(){
    return (
        <>
        <div className="bg-[#182130] w-[calc(100vw-100px)] h-[calc(100vh-100px)] mx-auto my-[50px] rounded-2xl flex items-center justify-center">
            <div className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-[#1db687]"/>
                <h2 className="text-xl fint-semibold">Research Configuration</h2>
            </div>
            <div className="mt-6">
                <p>WElcome to Research Configuration Panel.</p>
            </div>
        </div>
        </>
    );
}