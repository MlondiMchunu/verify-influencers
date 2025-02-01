import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Menubar = () => {
  return (
    <nav className="w-full bg-[#182130] text-white p-4 flex justify-between items-center">
      {/* Logo or App Name (Optional) */}
      <div className="flex items-center space-x-2 text-[#10bb80] text-lg font-bold">
        <Shield />
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
