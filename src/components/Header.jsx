import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideMenuBar = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        onClick={hideMenuBar}
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[8px] shadow text-[#686b78] bg-amber-200  sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[100px]">
            <Link to={"/"}><img className="w-full" src="images/logo.png" alt="Logo" /></Link>
          
          </div>

          {/* Location */}
          <div>
            <span className="font-bold border-b-[3px]"> Ratanada</span>
            Jodhpur, Rajasthan, India{" "}
            <IoIosArrowDown
              onClick={showSideMenu}
              fontSize={20}
              className="font-bold inline text-[#fc8019] cursor-pointer"
            />
          </div>

          {/* Navigation */}
          <nav className="flex list-none gap-10 ml-auto text-[18px]">
            <li className="flex items-center gap-2 hover:text-[#fc8019]">
              <IoSearch  onClick={()=>setIsSearch(true)}/>
              <Link to="/search">Search</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#fc8019]">
              <BiSolidOffer />
              <Link to="/offers">Offers</Link>
              <sup>New</sup>
            </li>
            <li className="flex items-center gap-2 hover:text-[#fc8019]">
              <IoHelpBuoyOutline />
              <Link to="/help">Help</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#fc8019]">
              <MdOutlineAssignmentInd />
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#fc8019]">
              <FaCartArrowDown />
              <Link to="/cart">Cart</Link>
              <sup>(2)</sup>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
