// import React, { useState } from "react";
// import { SidebarItems } from "../static/data";

// const Sidebar = () => {
//   const [active, setActive] = useState("Home");

//   return (
//     <div className="yt-scrollbar w-60 h-[100vh] bg-yt-black top-0 left-0 text-yt-white p-3 pt-16 overflow-y-scroll">
//       <div className="mb-4">
//         {SidebarItems.Top.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
//                 item.name === active ? "bg-yt-light-black" : "bg-yt-black"
//               }`}
//               onClick={() => {setActive(item.name)}}
//             >
//               <span className="mr-5">{item.icon}</span>
//               <p className="p-2 text-sm font-medium">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>
//       <div className="border border-[#424242] h-px my-2" />
//       <div className="mb-4">
//         {SidebarItems.Middle.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
//                 item.name === active ? "bg-yt-light-black" : "bg-yt-black"
//               }`}
//               onClick={() => {setActive(item.name)}}
//             >
//               <span className="mr-5">{item.icon}</span>
//               <p className="p-2 text-sm font-medium">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>
//       <div className="border border-[#424242] h-px my-2" />
//       <h2 className="px-3 pt-1">Explore</h2>
//       <div className="mb-4">
//         {SidebarItems.Explore.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className={`cursor-pointer h-10 flex justify-start px-3 rounded-xl items-center hover:bg-yt-light-black my-1 text-white ${
//                 item.name === active ? "bg-yt-light-black" : "bg-yt-black"
//               }`}
//               onClick={() => {setActive(item.name)}}
//             >
//               <span className="mr-5">{item.icon}</span>
//               <p className="p-2 text-sm font-medium">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { SideBarItems } from "../static/data";
import "../App.css";
import { Icon } from "../static/Icons";
import PlaylistService from "../services/playlistService";
import ChannelService from "../services/channelService";
import UserService from "../services/userService";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const [user, setUser] = useState("");
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [subscribedChannels, setSubscribedChannels] = useState([]);

  const userId = localStorage.getItem("currentUser");

  useEffect(() => {
    let playlistService = PlaylistService.getInstance();
    playlistService.getPlaylistByUserId(userId).then((res) => {
      setUserPlaylists(res.data);
    });

    let userService = UserService.getInstance();
    userService.getUserById(userId).then((res) => {
      setUser(res.data);
      if (user !== "") {
        let channelService = ChannelService.getInstance();
        channelService
          .getChannelsByIDs(user.subscribed_channels)
          .then((response) => {
            setSubscribedChannels(response.data);
          });
      }
    });
  }, [user]);

  return (
    <div className="overflow-x-hidden w-60 bg-yt-black h-[calc(100vh-53px)] hidden md:block mt-14 top-0 left-0 text-yt-white p-3 fixed scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-lg">
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
        {userPlaylists.length > 0 && (
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
          userPlaylists.map((item, index) => {
            return (
              <div
                key={index}
                className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                  item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                }`}
                onClick={() => setActive(item.name)}
              >
                <span className="mr-4">
                  <Icon name="playlist" />
                </span>
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
        {/* {SideBarItems.Subscriptions.map((item, index) => {
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
        })}         */}
        {subscribedChannels.map((item, index) => {
          return (
            <NavLink to={`/channel/${item._id}`}>
              <div
                key={index}
                className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-yt-light-black ${
                  item.name === active ? "bg-yt-light-black" : "bg-yt-black"
                }`}
                onClick={() => setActive(item.name)}
              >
                <span className="">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={item.cover_image}
                    alt="cover"
                  />
                </span>
                <p className="p-2 text-sm font-medium line-clamp-1 leading-loose">
                  {item.name}
                </p>
              </div>
            </NavLink>
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
            <span className="text-xs font-bold text-[#aaa]">Contact us</span>
            <span className="text-xs font-bold text-[#aaa]">Creators</span>
          </div>
          <div className="flex flex-row gap-x-3">
            <span className="text-xs font-bold text-[#aaa]">Advertise</span>
            <span className="text-xs font-bold text-[#aaa]">Developers</span>
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
  );
};

export default Sidebar;
