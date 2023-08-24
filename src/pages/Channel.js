import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FiChevronRight } from "react-icons/fi";
import HomeSection from "../components/channel/HomeSection";
import VideosSection from "../components/channel/VideosSection";
import AboutSection from "../components/channel/AboutSection";
import ChannelsSection from "../components/channel/ChannelsSection";
import CommunitySection from "../components/channel/CommunitySection";
import ShortsSection from "../components/channel/ShortsSection";
import LiveSection from "../components/channel/LiveSection";
import PlaylistsSection from "../components/channel/PlaylistsSection";
import MobileSidebar from "../components/MobileSidebar";
import ChannelService from "../services/channelService";
import { useParams } from "react-router-dom";

const Channel = () => {
  const [toggleState, setToggleState] = useState(1);
  const [channel, setChannel] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    let channelService = ChannelService.getInstance();
    channelService.getChannelById(id).then((res) => {
      setChannel(res.data);
    });
    console.log(channel);
  }, []);

  useEffect(() => {
    let channelService = ChannelService.getInstance();
    channelService.getChannelById(id).then((res) => {
      setChannel(res.data);
    });
  }, [id]);

  return (
    <div className="flex flex-row justify-between w-full overflow-x-hidden">
      <MobileSidebar />
      <div className="hidden xl:flex w-60 min-w-[240px] h-96">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full h-full text-white pt-14 pl-4 max-w-7xl">
        <div className="relative w-full h-full">
          <img
            src={channel.background_image}
            className="w-full h-[80px] md:h-[210px] object-cover"
          />
        </div>
        <div className="flex flex-row items-center justify-between px-5 md:px-20 py-5">
          <div className="flex flex-row items-center justify-center">
            <div className="hidden md:flex">
              <img
                className="rounded-full object-cover w-32 h-32"
                src={channel.cover_image}
                alt="cover"
              />
            </div>
            <div className="flex flex-col mx-5">
              <span className="text-lg md:text-3xl">{channel?.name}</span>
              <span className="text-[#aaa]">
                <span className="text-sm font-semibold tracking-tight mr-2">
                  @{channel.name}
                </span>
                506K subscribers 67 videos
              </span>
              <div className="flex flex-row items-center justify-start gap-x-3">
                <span className="text-[#aaa]">
                  {channel?.about?.split(" ")[0]}{" "}
                  {channel?.about?.split(" ")[1]}{" "}
                  {channel?.about?.split(" ")[2]}{" "}
                  {channel?.about?.split(" ")[3]}{" "}
                  {channel?.about?.split(" ")[4]}{" "}
                </span>
                <FiChevronRight className="text-[#aaa]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <button className="w-24 h-9 bg-[#f1f1f1] text-[#0f0f0f] text-sm font-semibold rounded-3xl">
              Subscribe
            </button>
            <button className="flex items-center justify-center hidden md:flex w-16 h-9 bg-transparent text-[#f1f1f1] text-sm font-semibold rounded-3xl border border-[#f1f1f1]">
              Join
            </button>
          </div>
        </div>
        <div className="px-5 md:px-20 py-5 overflow-x-hidden">
          <ul className="flex flex-row items-center justify-between">
            <li
              onClick={() => setToggleState(1)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 1
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => setToggleState(2)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 2
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Videos
            </li>
            <li
              onClick={() => setToggleState(3)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 3
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Shorts
            </li>
            <li
              onClick={() => setToggleState(4)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 4
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Live
            </li>
            <li
              onClick={() => setToggleState(5)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 5
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Playlists
            </li>
            <li
              onClick={() => setToggleState(6)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 6
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Community
            </li>
            <li
              onClick={() => setToggleState(7)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 7
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              Channels
            </li>
            <li
              onClick={() => setToggleState(8)}
              className={`w-[115px] h-12 px-8  flex items-center justify-center uppercase font-semibold text-sm hover:text-white cursor-pointer ${
                toggleState === 8
                  ? "border-b-2 border-b-white text-white"
                  : "text-[#aaa]"
              }`}
            >
              About
            </li>
          </ul>
        </div>
        <div className="px-5 md:px-20 py-5 overflow-x-hidden">
          <div className={toggleState === 1 ? "flex" : "hidden"}>
            <HomeSection />
          </div>
          <div className={toggleState === 2 ? "flex" : "hidden"}>
            <VideosSection />
          </div>
          <div className={toggleState === 3 ? "flex" : "hidden"}>
            <ShortsSection />
          </div>
          <div className={toggleState === 4 ? "flex" : "hidden"}>
            <LiveSection />
          </div>
          <div className={toggleState === 5 ? "flex" : "hidden"}>
            <PlaylistsSection />
          </div>
          <div className={toggleState === 6 ? "flex" : "hidden"}>
            <CommunitySection />
          </div>
          <div className={toggleState === 7 ? "flex" : "hidden"}>
            <ChannelsSection />
          </div>
          <div className={toggleState === 8 ? "flex" : "hidden"}>
            <AboutSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
