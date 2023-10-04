import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`md:hidden absolute top-16 right-0 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-transparent text-black p-4">
        <p className="text-[#003366] hover:text-[#FFA500] mb-2 cursor-pointer">Home</p>
        <p className="text-[#003366] hover:text-[#FFA500] mb-2 cursor-pointer">Product</p>
        <p className="text-[#003366] hover:text-[#FFA500] mb-2 cursor-pointer">Contact</p>
        <p className="text-[#003366] hover:text-[#FFA500] mb-2 cursor-pointer">About Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
