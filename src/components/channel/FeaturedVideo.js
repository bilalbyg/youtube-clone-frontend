import React from "react";
import { MdVerified } from "react-icons/md";

const FeaturedVideo = () => {
  return (
    <div className="w-full h-[186px] pt-3 pb-6">
      <div className="flex flex-row max-w-[862px] h-full bg-yt-black">
        <div className="flex flex-shrink-0 w-[246px] mr-4 bg-black h-full relative">
          <img
            src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
          <div className="w-auto max-h-5 px-[6px] py-[1px] bg-black/80 absolute right-1 bottom-1 text-xs font-semibold text-yt-white">
            54.24
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold">Cooking Delicious Meal</h3>
          <div className="flex flex-row justify-start items-center text-xs text-[#aaa] font-semibold">
            <span className="mr-1">Channel name</span>
            <MdVerified />
            <span className="mx-2">74K Views</span>
            <span className="mr-2 w-1 h-1 bg-white rounded-full" />
            <span className="mr-2">23 hours ago</span>
          </div>
          <span className="text-xs mt-2 line-clamp-2 text-[#aaa] font-semibold">
            Minim anim non labore excepteur elit ad. Qui est fugiat
            reprehenderit esse incididunt nulla qui sit anim. Eiusmod dolore ut
            nulla deserunt fugiat ad nisi consectetur ut deserunt cillum irure
            culpa incididunt.Nulla fugiat excepteur amet cupidatat occaecat amet
            ut. Id anim dolore et sit nisi adipisicing do nulla fugiat ea anim.
            Nisi quis velit fugiat Lorem commodo reprehenderit. Duis anim tempor
            irure ipsum tempor adipisicing excepteur. Quis veniam proident velit
            commodo ipsum consectetur tempor magna deserunt aute occaecat
            incididunt veniam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
