import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import ChannelService from "../services/channelService"
import { timeSinceUpload } from "../scripts/utils/timeSinceUpload";

const Video = ({videoData}) => {

  const [video, setVideo] = useState([])
  const [channel, setChannel] = useState([])

  // const timeSinceUpload = () => {
  //   let uploadDate = videoData.upload_date.split("T")[0]
  //   const diffInMs = new Date() - new Date(uploadDate)
  //   const diffInDays = parseInt(diffInMs / (1000 * 60 * 60 * 24));
    
  //   let returnedValue = "";

  //   if(diffInDays >= 365){
  //     returnedValue = parseInt(diffInDays / 365) + " years ago"
  //   }
  //   else if(diffInDays >= 30){
  //     returnedValue = parseInt(diffInDays / 30) + " months ago"
  //   }else if(diffInDays >= 7){
  //     returnedValue = parseInt(diffInDays / 7) + " weeks ago"
  //   }else if(diffInDays >= 1){
  //     returnedValue = diffInDays + " days ago"
  //   }else{
  //     returnedValue = "a few hours ago"        
  //   }
  //   return returnedValue + "/" + diffInDays
  // }

  useEffect(()=> {

    setVideo(videoData)

    let channelService = ChannelService.getInstance()
    channelService.getChannelById(videoData.channel_id).then((res) => {
      console.log(videoData.upload_date.split("T")[0]);
      setChannel(res.data)
    })
  }, [])

  return (
    <div className="flex flex-col max-w-[260px] cursor-pointer">
      <div className="w-full relative">
        <img
          src={`${video?.thumbnail}`}
          alt=""
          className="h-[146px] w-[260px] overflow-hidden rounded-2xl object-cover"
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
