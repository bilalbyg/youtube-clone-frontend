import React from "react";
import { Icon } from "../../static/Icons";
import useColorThief from "use-color-thief";

const PlaylistItem = () => {
  const source =
    "https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const { color } = useColorThief(source, {
    format: "hex",
    colorCount: 10,
    quality: 10,
  });

  console.log(color);

  return (
    <div className="flex flex-col cursor-pointer group">
      <div className="w-[210px] h-[118px] ml-1 mt-6 relative">
        <img
          src="https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-full rounded-lg"
          alt="playlist"
        />
        <div
          style={{
            backgroundColor: `
  ${color}
`,
            opacity: "80%",
          }}
          className={`flex items-center justify-between px-2 w-full h-6 rounded-b-lg absolute bottom-0 text-white`}
        >
          <Icon name="playlist" size={20} />
          <span className="text-xs font-semibold">6 videos</span>
        </div>
        <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute left-0 top-0 bg-black/70 text-white font-semibold text-sm">
          <span className="flex items-center justify-center gap-x-1">
            <Icon name="play" /> PLAY ALL
          </span>
        </div>
      </div>
      <h3 className="text-yt-white font-semibold my-2 ml-1 text-[15px]">
        London VLOG
      </h3>
      <span className="font-semibold text-xs text-[#aaa] ml-1">
        View full playlist
      </span>
    </div>
  );
};

export default PlaylistItem;
