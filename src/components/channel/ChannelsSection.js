import React from "react";
import ChannelsSectionItem from "./ChannelsSectionItem";

const ChannelsSection = () => {
  return (
    <div className="w-full h-auto pb-10 pt-3">
      <div className="flex flex-row flex-wrap w-full ml-2">
        {new Array(20).fill(<ChannelsSectionItem />)}
      </div>
    </div>
  );
};

export default ChannelsSection;
