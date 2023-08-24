import React from "react";

const ShortsItem = () => {
  return (
    <div className="flex flex-col w-[210px] h-[373px] ml-[2px] mt-10">
      <img
        src="https://images.pexels.com/photos/2117239/pexels-photo-2117239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="w-full h-full rounded-xl"
        alt="shorts"
      />
      <span className="text-sm font-semibold text-yt-white mt-3">Vintage Albums</span>
      <span className="text-sm font-semibold text-yt-white">#vintage #80s</span>
      <span className="text-sm font-semibold text-[#aaa]">6.4K Views</span>
    </div>
  );
};

export default ShortsItem;
