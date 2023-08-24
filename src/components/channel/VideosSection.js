import React from "react";
import ChannelVideoSection from "./ChannelVideoSection";
import AllVideosItem from "./AllVideosItem";

const VideosSection = () => {
  return (
    <div className="w-full h-auto pb-10">
      <div className="h-auto w-full">
        <div className="">
          <button className="h-8 px-3 rounded-lg bg-white/20 text-sm">
            Latest
          </button>
          <button className="h-8 px-3 rounded-lg bg-white/20 text-sm ml-2">
            Popular
          </button>
          <button className="h-8 px-3 rounded-lg bg-white/20 text-sm ml-2">
            Oldest
          </button>
          <div className="flex flex-row flex-wrap w-full mt-10">
            {new Array(20).fill(<AllVideosItem />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
