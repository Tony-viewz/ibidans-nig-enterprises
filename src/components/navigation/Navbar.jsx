import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" bg-[#D1E8E2]">
      <div className=" max-w-[1200px] mx-auto py-4 px-10 flex justify-between items-center">
        <img src="./download.png" alt="logo" className=" w-20" />
        <div className="hidden md:flex items-center gap-5 ">
          <p className="text-[#003366] hover:text-[#FFA500]">Home</p>
          <p className="text-[#003366]">Product</p>
          <p className="text-[#003366]">Contact</p>
        </div>
        <FaBars className="md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
