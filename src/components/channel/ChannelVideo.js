import React from "react";

const ChannelVideo = () => {
  return (
    <div className="flex flex-col pb-1 gap-y-1 w-[220px] h-auto rounded-lg flex-shrink-0">
      <div className="w-full h-auto relative">
        <img
          alt="video"
          className="w-full h-[118px] object-cover rounded-lg flex-shrink-0"
          src="https://images.pexels.com/photos/2162170/pexels-photo-2162170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="w-auto max-h-5 px-[6px] py-[1px] bg-black/80 absolute right-1 bottom-1 text-xs font-semibold text-yt-white">
          54.24
        </div>
      </div>
      <span className="text-white text-sm font-semibold line-clamp-2">
        Day in The Life of a Small Farm
      </span>
      <span className="text-[#aaa] text-xs font-semibold">
        8.9K Views | 3 hours ago
      </span>
    </div>
  );
};

export default ChannelVideo;
