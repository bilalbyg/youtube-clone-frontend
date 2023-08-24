import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ChannelVideo from "./ChannelVideo";
import { Icon } from "../../static/Icons";
import Divider from "../Divider";

const ChannelVideoSection = ({title}) => {
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-x-2 my-5">
        <span className="font-semibold">{title}</span>
        <button className="flex items-center justify-center w-[101px] h-9 rounded-3xl hover:bg-white/20 text-sm tracking-tight font-semibold">
          <Icon name="play" />
          Play all
        </button>
      </div>

      <ScrollContainer className="flex w-full h-auto overflow-x-hidden gap-x-1">
        {new Array(20).fill(<ChannelVideo />)}
      </ScrollContainer>
      <Divider />
    </>
  );
};

export default ChannelVideoSection;
