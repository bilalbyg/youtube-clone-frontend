import React from "react";
import PlaylistItem from "./PlaylistItem";

const PlaylistsSection = () => {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-auto  pt-3 pb-6">
        <>
          <div className="flex flex-row flex-wrap w-full mt-10">
            {new Array(20).fill(<PlaylistItem />)}
          </div>
        </>
      </div>
    </div>
  );
};

export default PlaylistsSection;
