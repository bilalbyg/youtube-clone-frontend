import React from "react";
import { Icon } from "../../static/Icons";

const CommunitySectionItem = () => {
  return (
    <div className="flex flex-row w-full h-auto max-w-[852px] rounded-xl border border-solid border-[#424242] pt-4 pb-2 px-4 mt-6">
      <img
        src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="author"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col w-full pl-3">
        <span className="text-sm font-semibold cursor-pointer">
          MasterBarista
          <span className="text-xs font-semibold text-[#aaa] hover:text-yt-white pl-2 cursor-pointer">
            9 days ago (edited)
          </span>
        </span>
        <span className="mt-1">
          💡 Officia occaecat ullamco nulla culpa enim do ea anim magna
          cupidatat sit amet labore. Dolor ut cupidatat excepteur non labore ea
          est commodo. Reprehenderit ex consectetur ullamco nostrud officia
          laboris veniam. 🐂 Voluptate quis id ad proident Lorem est officia in
          voluptate enim qui irure dolore. Pariatur deserunt quis ut mollit
          proident aute id labore velit amet excepteur dolore ea 👀.
        </span>
        <img
          className="w-full h-fit object-cover mt-10"
          alt="coffee"
          src="https://images.pexels.com/photos/7487375/pexels-photo-7487375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="flex flex-row items-center justify-start gap-x-4 my-3">
          <button className="flex items-center justify-center gap-x-1">
            <Icon name="like" />
            <span className="text-[#aaa] text-xs">71</span>
          </button>
          <button>
            <Icon name="dislike" />
          </button>
          <button className="flex items-center justify-center gap-x-1">
            <Icon name="comment" size={16} />
            <span className="text-white text-xs">3</span>
          </button>
        </div>
      </div>
      <div className="w-fit">
        <Icon name="tridots" />
      </div>
    </div>
  );
};

export default CommunitySectionItem;
