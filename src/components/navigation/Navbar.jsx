import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-[#D1E8E2] relative">
        <div className="max-w-[1200px] mx-auto py-4 px-10 flex justify-between items-center">
          <img src="./download.png" alt="logo" className="w-20" />
          <div className="hidden md:flex items-center gap-5">
            <p className="text-[#003366] hover:text-[#FFA500]">Home</p>
            <p className="text-[#003366]">Product</p>
            <p className="text-[#003366]">Contact</p>
            <p className="text-[#003366]">About Us</p>
          </div>
          <FaBars
            className="md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
