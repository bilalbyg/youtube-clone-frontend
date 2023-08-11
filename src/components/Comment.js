import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import UserService from "../services/userService";
import { timeSinceUpload } from "../scripts/utils/timeSinceUpload";

const Comment = ({ comment }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let userService = UserService.getInstance();
    userService.getUserById(comment?.user_id).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  return (
    <div className="flex flex-row mb-3">
      <img
        className="w-10 h-10 rounded-full mr-3 object-cover"
        src={
          user?.profile_image
            ? user.profile_image
            : "https://cdn-icons-png.flaticon.com/256/149/149071.png"
        }
      />
      <div>
        <div className="flex items-center">
          <p className="text-xs font-semibold pr-2">@{user?.username}</p>
          <p className="text-xs text-yt-gray">{timeSinceUpload(comment?.comment_date)}</p>
        </div>
        <p className="text-sm pt-1">{comment?.text}</p>
        <div className="flex py-3 justify-between w-36">
          <div className="flex">
            <AiOutlineLike size={24} className="cursor-pointer" />
            <p className="text-sm px-2 text-yt-gray">24</p>
          </div>
          <AiOutlineDislike size={23} className="cursor-pointer" />
          <p className="text-xs font-semibold">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
