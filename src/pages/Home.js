// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import { CategoryItems } from "../static/data";
// import { query, collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";
// import { Link } from "react-router-dom";
// import Video from "../components/Video";

// const Home = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, "videos"));
//     onSnapshot(q, (snapShot) => {
//       setVideos(
//         snapShot.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//       );
//     });
//   }, []);

//   return (
//     <div className="flex flex-row">
//       <Sidebar />
//       <div className="pt-16 bg-yt-black text-yt-white w-full">
//         <div className="w-full flex flex-row px-3 overflow-x-hidden relative scrollbar-none">
//           {CategoryItems.map((item, index) => {
//             return (
//               <h2 className="text-yt-white py-2 px-4 break-keep whitespace-nowrap bg-yt-light hover:bg-yt-light-black my-3 cursor-pointer rounded-xl text-sm font-semibold">
//                 {item}
//               </h2>
//             );
//           })}
//         </div>
//         <div className="pt-12 px-5 grid grid-cols-yt gap-x-3 gap-y-8">
//           {/* {videos.length === 0 ? (
//             <div className="h-[86vh]"></div>
//           ) : (
//             videos.map((video, index) => (
//               <Link to={`/video/${video.id}`} key={video.id}>
//                 <Video {...video} />
//               </Link>
//             ))
//           )} */}
//           {new Array(40).fill(<div><Video/></div>)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CategoryItems } from "../static/data";
import Video from "../components/Video";
import VideoService from "../services/videoService";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    let videoService = VideoService.getInstance();
    videoService.getVideos().then((res) => {
      setVideos(res.data);
    });
  }, [videos]);

  return (
    <div className="wrapper ">
      <Sidebar />
      <div className="w-[calc(100%-240px)]  h-[calc(100%-53px)] pt-16 bg-yt-black ml-60">
        <div className="flex flex-row px-3 overflow-x-hidden relative">
          {CategoryItems.map((item, i) => (
            <h2
              className="text-yt-white font-normal text-sm py-2 px-4 break-keep whitespace-nowrap bg-yt-light mr-3 cursor-pointer rounded-lg hover:bg-yt-light-1"
              key={i}
            >
              {item}
            </h2>
          ))}
        </div>

        <div className="pt-12 pb-6 px-5 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-8">
          {videos.map((video) => (
            <NavLink to={`/video/${video._id}`}>
              <Video videoData={video} channelData={channel} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
