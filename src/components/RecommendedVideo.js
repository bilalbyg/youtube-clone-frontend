import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import ChannelService from "../services/channelService";
import { timeSinceUpload } from "../scripts/utils/timeSinceUpload";

const RecommendedVideo = ({ video }) => {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    if (video) {
      let channelService = ChannelService.getInstance();
      channelService.getChannelById(video.channel_id).then((res) => {
        setChannel(res.data);
      });
    }
  }, []);

  return (
    <div className="text-yt-white flex cursor-pointer mb-4">
      <img
        src={video?.thumbnail}
        className="h-[96px] w-[144px] rounded-xl object-cover"
      />
      <div className="pl-2">
        <h2 className="text-sm font-medium">{video?.name}</h2>
        <p className="text-xs text-yt-gray pt-2 flex items-center">
          {channel.name}
          <span className="pl-1">
            <MdVerified />
          </span>
        </p>
        <div className="flex">
          <p className="text-xs text-yt-gray pr-1">{video?.views} views</p>
          <p className="text-xs text-yt-gray pr-1">{timeSinceUpload(video?.upload_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
