import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Menubar = () => {
  return (
    <nav className="w-full bg-[#182130] p-4 flex flex-wrap items-center justify-between">
      {/* Logo or App Name (Optional) */}
      <div className="flex items-center space-x-2 text-[#10bb80] text-sm font-bold">
        <Shield size={20} className="text-[#10bb80]"/>
        <span>VerifyInfluencers</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-xs/5 ">
        <Link to="/leaderboard" className="text-white !text-white hover:text-green-400 transition-colors ">Leaderboard</Link>
        <Link to="/products" className="text-white !text-white hover:text-green-400 transition-colors">Products</Link>
        <Link to="/monetization" className="text-white !text-white hover:text-green-400 transition-colors">Monetization</Link>
        <Link to="/about" className="text-white !text-white hover:text-green-400 transition-colors">About</Link>
        <Link to="/contact" className="text-white !text-white hover:text-green-400 transition-colors">Contact</Link>
        <Link to="/admin" className="text-white !text-white hover:text-green-400 transition-colors">Admin</Link>
      </div>
    </nav>
  );
};

export default Menubar;
