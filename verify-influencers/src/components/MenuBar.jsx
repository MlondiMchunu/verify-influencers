import React from "react";
import {Home,Info,Contact} from "lucide-react";


export default function MenuBar(){
    return(
        <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">VerifyInfluencers</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-200">
            <a href="#home" className="flex items-center space-x-1">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#about" className="flex items-center space-x-1">
              <Info className="w-5 h-5" />
              <span>About</span>
            </a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#contact" className="flex items-center space-x-1">
              <Contact className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}