import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import Comment from "../components/Comment";
import { CategoryItems } from "../static/data";
import RecommendedVideo from "../components/RecommendedVideo";
import { useParams } from "react-router";
import VideoService from "../services/videoService";
import ChannelService from "../services/channelService";
import CommentService from "../services/commentService";
import { timeSinceUpload } from "../scripts/utils/timeSinceUpload";
import VideoPlayer from "../components/VideoPlayer";

const Video = () => {
  const { id } = useParams();

  const [video, setVideo] = useState("");
  const [channel, setChannel] = useState([]);
  const [comments, setComments] = useState([])

  useEffect(() => {
    let videoService = VideoService.getInstance();
    videoService.getVideoById(id).then(async (res) => {
      setVideo(res.data);
    });

    if (video) {
      let channelService = ChannelService.getInstance();
      channelService.getChannelById(video?.channel_id).then((res) => {
        setChannel(res.data);
      });

      let commentService = CommentService.getInstance();
      commentService.getCommentByVideoId(video?._id).then((res) => {
        console.log(res.data);
        setComments(res.data)
      })
    }
  }, [video]);

  return (
    <div className="py-20 px-9 bg-yt-black flex flex-row h-full">
      <div className="left flex-1">
        <div className="flex justify-center">
            <VideoPlayer source={video.video_url}/>
        </div>
        <h2 className="text-yt-white font-semibold text-lg mt-3 mb-1">
          {video?.name}
        </h2>
        <div className="flex w-full">
          <div className="flex items-center w-full">
            <img
              className="w-10 h-10 rounded-full"
              src={channel?.cover_image}
            />
            <div className="px-3">
              <h3 className="text-yt-white font-medium">{channel?.name}</h3>
              <p className="text-xs font-semibold text-yt-gray">
                {channel?.subscribers?.length} subscribers
              </p>
            </div>
            <button className="bg-yt-white px-3 py-2 rounded-3xl font-bold tracking-tight text-sm ml-3">
              Subscribe
            </button>
            <div className="flex pl-28">
              <div className="flex px-3 bg-yt-light-black items-center rounded-3xl h-10 mx-1 hover:bg-yt-light-1">
                <div className="flex px-1 items-center border-r-2 border-r-yt-light-1 cursor-pointer">
                  <AiOutlineLike className="text-yt-white text-xl font-extralight" />
                  <p className="text-yt-white pl-1 pr-2 text-sm font-semibold">
                    300
                  </p>
                </div>
                <div className="flex px-1 items-center cursor-pointer">
                  <AiOutlineDislike className="text-yt-white text-xl font-extralight" />
                </div>
              </div>
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 cursor-pointer hover:bg-yt-light-1">
                <div className="flex flex-row px-3 items-center justify-center cursor-pointer gap-x-2">
                  <PiShareFatLight className="text-yt-white text-xl font-bold" />
                  <p className="text-yt-white text-sm font-semibold">Share</p>
                </div>
              </div>
              <div className="flex bg-yt-light-black items-center rounded-3xl h-10 mx-1 cursor-pointer hover:bg-yt-light-1">
                <div className="flex flex-row px-3 items-center justify-center cursor-pointer gap-x-2">
                  <TfiDownload className="text-yt-white text-lg font-bold" />
                  <p className="text-yt-white text-sm font-semibold">
                    Download
                  </p>
                </div>
              </div>
              <div className="flex bg-yt-light-black hover:bg-yt-light-1 cursor-pointer items-center rounded-full text-2xl justify-center w-10 h-10 text-yt-white">
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl bg-yt-light-black mt-4 p-3 rounded-2xl text-sm text-yt-white">
          <div className="flex">
            <p className="font-medium pr-3">
              {video?.views}<span className="pl-1 text-xs">Views</span>
            </p>
            <p className="font-medium pr-3">
              {timeSinceUpload(video?.upload_date)} days ago
            </p>
          </div>
          <span className="text-center font-medium">
            {video?.description}
          </span>
        </div>
        <div className="text-yt-white mt-5">
          <div className="flex items-center">
            <h1>30 Comments</h1>
            <div className="flex items-center mx-10">
              <MdOutlineSort size={30} className="mx-3" />
              <h5 className="text-sm font-semibold">Sort by : </h5>
            </div>
          </div>
          <form className="flex w-[800px] pt-4 items-start">
            <img
              src="https://cdn-icons-png.flaticon.com/256/149/149071.png"
              className="rounded-full mr-3 w-12 h-12"
            />
            <input
              placeholder="Add a comment"
              type="text"
              className="bg-transparent border-b border-b-yt-light-black outline-none text-sm p-1"
            />
          </form>
          <div className="mt-4">{comments.map((comment) => (<Comment comment={comment}/>))}</div>
        </div>
      </div>
      <div className="right px-3 overflow-y-hidden flex-[0.4]">
        <div>
          <div className="flex flex-row px-3 overflow-x-scroll relative">
            {CategoryItems.map((item, i) => (
              <h2
                className="text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light mr-3 cursor-pointer rounded-lg hover:bg-yt-light-1"
                key={i}
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
        <div className="pt-8">{new Array(20).fill(<RecommendedVideo />)}</div>
      </div>
    </div>
  );
};

export default Video;
