import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import ChannelService from "../services/channelService"
import { timeSinceUpload } from "../scripts/utils/timeSinceUpload";

const Video = ({videoData}) => {

  const [video, setVideo] = useState([])
  const [channel, setChannel] = useState([])

  useEffect(()=> {
    
    setVideo(videoData)

    let channelService = ChannelService.getInstance()
    channelService.getChannelById(videoData.channel_id).then((res) => {
      console.log(videoData.upload_date.split("T")[0]);
      setChannel(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col max-w-[440px] md:max-w-[270px] cursor-pointer">
      <div className="w-full relative">
        <img
          src={`${video?.thumbnail}`}
          alt=""
          className="h-full w-full md:h-[150px] md:w-[270px] overflow-hidden rounded-2xl object-cover"
        />
        <p className="absolute right-2 top-[85%] px-1 text-xs bg-yt-black text-yt-white rounded">
          {video?.duration}
        </p>
      </div>
      <div className="flex mt-3">
        <img src={channel?.cover_image} alt="" className="h-9 w-9 rounded-full object-cover" />
        <div className="ml-2">
          <h2 className="font-medium text-yt-white text-sm my-0 items-center line-clamp-1">
            {video?.name}
          </h2>
          <h3 className="text-yt-gray text-xs mt-1 flex items-center">
            {channel?.name}
            <span className="p-1">
              <MdVerified />
            </span>
          </h3>
          <p className="text-yt-gray font-medium text-xs">
          {video?.views} Views • {timeSinceUpload(videoData?.upload_date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
