import React from "react";
import { MdVerified } from "react-icons/md";

const RecommendedVideo = ({ thumbnail, title, channel, views, uploadTime }) => {
  return (
    <div className="text-yt-white flex cursor-pointer mb-4">
      <img
        src="https://i.ytimg.com/vi/qEVUtrk8_B4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVJ5Y-F1UAd3aXRfhO2XpIMeMiag"
        className="h-24 w-34 rounded-xl object-contain"
      />
      <div className="pl-2">
        <h2 className="text-sm font-medium">
          John Wick : Chapter 4 / Keanu Reeves
        </h2>
        <p className="text-xs text-yt-gray pt-2 flex items-center">
          Movie Trailers
          <span className="pl-1">
            <MdVerified />
          </span>
        </p>
        <div className="flex">
            <p className="text-xs text-yt-gray pr-1">10M views</p>
            <p className="text-xs text-yt-gray pr-1">5 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
