import React, { useState } from "react";
import { SidebarItems } from "../static/data";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="yt-scrollbar w-60 h-[100vh] bg-yt-black top-0 left-0 text-yt-white p-3 pt-16 overflow-y-scroll">
      <div className="mb-4">
        {SidebarItems.Top.map((item, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
                item.name === active ? "bg-yt-light-black" : "bg-yt-black"
              }`}
              onClick={() => {setActive(item.name)}}
            >
              <span className="mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="border border-[#424242] h-px my-2" />
      <div className="mb-4">
        {SidebarItems.Middle.map((item, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
                item.name === active ? "bg-yt-light-black" : "bg-yt-black"
              }`}
              onClick={() => {setActive(item.name)}}
            >
              <span className="mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="border border-[#424242] h-px my-2" />
      <h2 className="px-3 pt-1">Explore</h2>
      <div className="mb-4">
        {SidebarItems.Explore.map((item, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
                item.name === active ? "bg-yt-light-black" : "bg-yt-black"
              }`}
              onClick={() => {setActive(item.name)}}
            >
              <span className="mr-5">{item.icon}</span>
              <p className="p-2 text-sm font-medium">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
