import React from "react";

const LiveVideosItem = () => {
  return (
    <div className="flex flex-col w-[252px] h-auto ml-2 mb-10">
      <div className="w-full h-auto relative mb-2">
        <img
          src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[141.5px] rounded-xl"
          alt="video"
        />
        <div className="w-auto max-h-5 px-[6px] py-[1px] bg-black/80 absolute right-1 bottom-1 text-xs font-semibold text-yt-white">
          54.24
        </div>
      </div>
      <span className="text-sm font-semibold mb-2">
        Nevada Tour w Harley Davidson Electra Glide Ultra
      </span>
      <span className="text-[#aaa] text-xs font-semibold">
        8.9K Views | 3 hours ago
      </span>
    </div>
  );
};

export default LiveVideosItem;
