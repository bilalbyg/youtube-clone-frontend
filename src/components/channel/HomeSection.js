import React from "react";
import FeaturedVideo from "./FeaturedVideo";
import Divider from "../Divider";
import ChannelVideoSection from "./ChannelVideoSection";
import ScrollContainer from "react-indiana-drag-scroll";
import { NavLink } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="w-full h-auto pb-10">
      <FeaturedVideo />
      <Divider />
      <ChannelVideoSection title={"Popular videos"} />
      <ChannelVideoSection title={"Videos"} />
      <ChannelVideoSection title={"Popular videos"} />
      <ChannelVideoSection title={"Videos"} />
      <ChannelVideoSection title={"Popular videos"} />
      <ChannelVideoSection title={"Videos"} />
    </div>
  );
};

export default HomeSection;
