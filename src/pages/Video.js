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
import UserService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollContainer from "react-indiana-drag-scroll";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const Video = () => {
  const { id } = useParams();

  const userId = localStorage.getItem("currentUser");

  const [video, setVideo] = useState("");
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [channel, setChannel] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [userComment, setUserComment] = useState("");

  const commentEmptyNotify = () =>
    toast.error("Comment shouldn't be empty", {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleComment = (value) => {
    console.log(value);
    setUserComment(value);
  };

  const handleSubmitComment = () => {
    if (userComment.trim() === "") {
      commentEmptyNotify();
      return;
    }
    axios.post("http://localhost:5000/comments/", {
      text: userComment,
      comment_date: new Date().toISOString(),
      channel_id: channel._id,
      video_id: video._id,
      user_id: user._id,
    });
    console.log(new Date());
    console.log(channel._id);
    console.log(video._id);
    console.log(user._id);

    setUserComment("");
  };

  useEffect(() => {
    if (userId) {
      let userService = UserService.getInstance();
      userService.getUserById(userId).then((res) => {
        setUser(res.data);
      });
    }

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
        setComments(res.data);
      });
    }
  }, [video]);

  useEffect(() => {
    let videoService = VideoService.getInstance();
    videoService.getVideos().then((res) => {
      setRecommendedVideos(res.data);
    });

    console.log(user);
  }, []);

  return (
    <div className="py-20 px-9 bg-yt-black flex flex-row h-full">
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <div className="left flex-1">
        <div className="flex justify-center">
          <VideoPlayer source={video.video_url} />
        </div>
        <h2 className="text-yt-white font-semibold text-lg mt-3 mb-1">
          {video?.name}
        </h2>
        <div className="flex w-full">
          <div className="flex items-center w-full">
            <img
              className="w-10 h-10 rounded-full"
              src={channel?.cover_image}
              alt="channel"
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
              {video?.views}
              <span className="pl-1 text-xs">Views</span>
            </p>
            <p className="font-medium pr-3">
              {timeSinceUpload(video?.upload_date)}
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
          {user && (
            <Form
              className="flex flex-row w-[800px] pt-4 items-start"
              onSubmit={handleSubmitComment}
            >
              <img
                src={
                  user?.profile_image !== ""
                    ? user?.profile_image
                    : "https://cdn-icons-png.flaticon.com/256/149/149071.png"
                }
                className="rounded-full mr-3 w-12 h-12"
                alt="profile"
              />
              <div className="w-full">
                <input
                  placeholder="Add a comment"
                  type="text"
                  name="text"
                  minLength={1}
                  value={userComment}
                  onChange={(e) => handleComment(e.target.value)}
                  className="peer focus:w-full bg-transparent border-b border-b-yt-light-black outline-none text-sm p-1"
                />
                <div className="gap-x-2 items-center justify-end flex">
                  <Button className="bg-transparent font-semibold text-[14px] px-4 py-2 rounded-3xl hover:bg-[#3f3f3f]">
                    Cancel
                  </Button>
                  <Button
                    className="bg-[#3ea6ff] text-[#0f0f0f] text-[14px] font-semibold px-3 py-2 rounded-3xl hover:bg-[#65b8ff] peer-invalid:bg-black"
                    type="submit"
                  >
                    Comment
                  </Button>
                </div>
              </div>
            </Form>
          )}

          <div className="mt-4">
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </div>
      <div className="right px-3 overflow-y-hidden flex-[0.4]">
        <div>
          <ScrollContainer className="flex flex-row px-3 overflow-x-scroll relative scroll-container">
            {CategoryItems.map((item, i) => (
              <h2
                className="text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light mr-3 cursor-pointer focus:cursor-grab rounded-lg hover:bg-yt-light-1"
                key={i}
              >
                {item}
              </h2>
            ))}
          </ScrollContainer>
        </div>
        <div className="pt-8">
          {recommendedVideos.map((recommendedVideo) => (
            <RecommendedVideo video={recommendedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
