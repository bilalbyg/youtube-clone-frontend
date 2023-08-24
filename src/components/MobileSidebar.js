import React, { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { SideBarItems } from "../static/data";
import { Icon } from "../static/Icons";
import { setMobileSidebar } from "../store/mobileSidebar";
import { useDispatch, useSelector } from "react-redux";

const MobileSidebar = () => {
  const [active, setActive] = useState("Home");
  const [expandSidebar, setExpandSidebar] = useState(false);

  const { mobileSidebar } = useSelector((state) => state.mobileSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(mobileSidebar);
  }, []);

  return (
    <div
      className={`flex w-60 h-96 fixed bg-yt-black transition-all delay-150 duration-300 z-50 top-0 left-0 ${ mobileSidebar ? "" : "-translate-x-full duration-300 ease-in-out"}`}
    >
      <div className="flex flex-col h-full w-full pl-4 pr-5 pt-2">
        {/* TOP */}
        <div className="flex justify-start items-center gap-x-3">
          <div
            onClick={() => dispatch(setMobileSidebar(!mobileSidebar))}
            className="flex items-center justify-center text-yt-white p-2 w-10 h-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer"
          >
            <HiOutlineBars3 size={25} />
          </div>
          <div className="w-32">
            <Icon name="logo" size={50} />
          </div>
        </div>
        <div
          className={`overflow-x-hidden bg-yt-black w-60 h-[calc(100vh-53px)] block mt-14 top-0 left-0 text-yt-white p-3 fixed scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-lg`}
        >
          <div className="mb-4">
            {SideBarItems.Top.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium">{item.name}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <div className="mb-4">
            {SideBarItems.Middle.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium">{item.name}</p>
                </div>
              );
            })}
            {SideBarItems.Expand.length > 0 && (
              <div
                className={`h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black bg-yt-black
          ${expandSidebar ? "hidden" : "flex"}`}
                onClick={() => setExpandSidebar(true)}
              >
                <span className="mr-4">
                  <div>
                    <Icon name="arrowDown" />
                  </div>
                </span>
                <p className="p-2 text-sm font-medium">Show More</p>
              </div>
            )}

            {expandSidebar &&
              SideBarItems.Expand.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                      item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                    }`}
                    onClick={() => setActive(item.name)}
                  >
                    <span className="mr-4">{item.icon}</span>
                    <p className="p-2 text-sm font-medium">{item.name}</p>
                  </div>
                );
              })}
            {SideBarItems.Expand.length > 0 && (
              <div
                className={`h-10 justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black bg-yt-black
          ${expandSidebar ? "flex" : "hidden"}`}
                onClick={() => setExpandSidebar(false)}
              >
                <span className="mr-4">
                  <div className="rotate-180">
                    <Icon name="arrowDown" />
                  </div>
                </span>
                <p className="p-2 text-sm font-medium">Show Less</p>
              </div>
            )}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <h2 className="pt-1 px-3">Subscriptions</h2>
          <div className="mb-4">
            {SideBarItems.Subscriptions.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium line-clamp-1 leading-loose">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <h2 className="pt-1 px-3">Explore</h2>
          <div className="mb-4">
            {SideBarItems.Explore.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium line-clamp-1 leading-loose">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <h2 className="pt-1 px-3">More From Youtube</h2>
          <div className="mb-4">
            {SideBarItems.MoreFromYoutube.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium line-clamp-1 leading-loose">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <div className="mb-4">
            {SideBarItems.YoutubeMenu.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                    item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className="mr-4">{item.icon}</span>
                  <p className="p-2 text-sm font-medium line-clamp-1 leading-loose">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full h-px bg-[#424242] my-2" />
          <div className="flex flex-col items-start justify-start py-3 gap-y-5 pl-5">
            <div className="flex flex-col items-start justify-start gap-y-2">
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">About</span>
                <span className="text-xs font-bold text-[#aaa]">Press</span>
                <span className="text-xs font-bold text-[#aaa]">Copyright</span>
              </div>
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">
                  Contact us
                </span>
                <span className="text-xs font-bold text-[#aaa]">Creators</span>
              </div>
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">Advertise</span>
                <span className="text-xs font-bold text-[#aaa]">
                  Developers
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-y-2">
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">Terms</span>
                <span className="text-xs font-bold text-[#aaa]">Privacy</span>
                <span className="text-xs font-bold text-[#aaa]">
                  Policy & Safety
                </span>
              </div>
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">
                  How Youtube works
                </span>
              </div>
              <div className="flex flex-row gap-x-3">
                <span className="text-xs font-bold text-[#aaa]">
                  Test new features
                </span>
              </div>
            </div>
            <div className="text-[#717171] text-xs">© 2023 Google LLC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
