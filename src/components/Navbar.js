import React, { useState, useEffect } from "react";
import { MdMic } from "react-icons/md";
import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { PiUserCircleLight } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserService from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../store/mobileSidebar";
import { Icon } from "../static/Icons";

const Navbar = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { mobileSidebar } = useSelector((state) => state.mobileSidebar);

  useEffect(() => {
    if (localStorage.getItem("currentUser") !== "") {
      setUser(localStorage.getItem("currentUser"));
    }

    let userService = UserService.getInstance();
  });

  const signOut = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    navigate("/signin");
  };

  return (
    <div className={`${mobileSidebar ? "opacity-20 pointer-events-none" : ""} bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10 text-white`}>
      {/* LEFT START */}
      <div className="flex justify-start items-center h-full w-1/3 md:w-1/6 gap-x-3">
        <div
          onClick={() => dispatch(setMobileSidebar(!mobileSidebar))}
          className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer"
        >
          <HiOutlineBars3 />
        </div>
        <div className="w-32">
          <Icon name="logo" size={70}/>
        </div>
      </div>
      {/* LEFT FINISH */}

      {/* MIDDLE START */}
      <div className="md:justify-center md:items-center h-full md:w-4/6 hidden md:flex px-2">
        <div className="w-[60%] bg-yt-black flex border border-yt-light-black items-center rounded-3xl h-10">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-yt-black h-6 ml-6 text-yt-white text-start focus:outline-none pl-4"
          />
          <button className="w-16 h-10 bg-yt-light-black px-2 py-0.5 rounded-r-3xl border-l-2 border-yt-light-black">
            <HiMagnifyingGlass
              size={22}
              className="text-yt-white inline-block text-center font-thin"
            />
          </button>
        </div>
        <div className="text-yt-white bg-yt-light min-w-[40px] w-10 h-10 items-center flex justify-center rounded-full ml-4 hover:bg-yt-light-black cursor-pointer">
          <MdMic className="text-center " size={23} />
        </div>
      </div>
      {/* MIDDLE FINISH */}

      {/* RIGHT START */}
      <div className="flex justify-end items-center h-full w-2/3 md:w-1/6">
        <div className="mr-1 items-center cursor-pointer">
          {user ? (
            <div className="flex flex-row">
              <div className="mr-1 p-2 w-10 h-10 hover:bg-yt-light-black rounded-full cursor-pointer md:hidden">
                <HiMagnifyingGlass
                  size={25}
                  className="text-yt-white text-center"
                />
              </div>
              <div className="mr-1 p-2 w-10 h-10 hover:bg-yt-light-black rounded-full cursor-pointer md:hidden">
                <MdMic size={25} className="text-yt-white text-center" />
              </div>
              <div className="mr-1 p-2 w-10 h-10 hover:bg-yt-light-black rounded-full cursor-pointer">
                <BiVideoPlus size={25} className="text-yt-white text-center" />
              </div>
              <div className="flex items-center justify-center p-2 min-w-[40px] w-10 h-10 hover:bg-yt-light-black rounded-full cursor-pointer">
                <FaRegBell size={20} className="text-center text-yt-white" />
              </div>
              <button
                onClick={() => signOut()}
                className="py-1 px-2 text-yt-white rounded-md"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c2175b] font-semibold text-lg">
                  B
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-x-6">
              <button className="text-white">
                <BsThreeDotsVertical size={18} />
              </button>
              <button className="flex items-center justify-center gap-x-1 bg-transparent hover:bg-[#263850] w-24 h-9 py-1 px-2 rounded-3xl border border-[#424242]">
                <PiUserCircleLight size={25} className="text-[#41acf8]" />
                <span className="text-[#41acf8] text-sm font-[645]">
                  Sign in
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {/* RIGTH FINISH */}
    </div>
  );
};

export default Navbar;
