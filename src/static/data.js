import { Icon } from "./Icons";

export const SideBarItems= {
    Top : [
        { icon: <Icon name="home" />, name: "Home" },
        { icon: <Icon name="shorts" />, name: "Shorts" },
        { icon: <Icon name="subscriptions"/>, name: "Subscriptions" },
    ],
    Middle : [
        { icon: <Icon name="library" />, name: "Library" },
        { icon: <Icon name="history" />, name: "History" },
        { icon: <Icon name="yourVideos" />, name: "Your videos" },
        { icon: <Icon name="watchLater" />, name: "Watch later" },
        { icon: <Icon name="likedVideos" />, name: "Liked videos" },
    ],
    Expand : [
        { icon: <Icon name="playlist" />, name: "Playlist Name"}
    ],    
    
    Subscriptions : [
        { icon: <img className="w-6 h-6 rounded-full object-cover" src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="channel" />, name: "Delicious Food Advices"},
        { icon: <img className="w-6 h-6 rounded-full object-cover" src="https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="channel" />, name: "Chill Coffee Shop"},
        { icon: <img className="w-6 h-6 rounded-full object-cover" src="https://images.pexels.com/photos/15139464/pexels-photo-15139464/free-photo-of-siyah-ve-beyaz-bagbozumu-is-para.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="channel" />, name: "Daily News"},
    ],

    Explore : [
        { icon: <Icon name="trending" />, name: "Trending" },
        { icon: <Icon name="music" />, name: "Music" },
        { icon: <Icon name="live" />, name: "Live" },
        { icon: <Icon name="gaming" />, name: "Gaming" },
        { icon: <Icon name="sports" />, name: "Sports" },
    ],    
    
    MoreFromYoutube : [
        { icon: <Icon name="premium" />, name: "Youtube Premium" },
        { icon: <Icon name="studio" />, name: "Youtube Studio" },
        { icon: <Icon name="ytmusic" />, name: "Youtube Music" },
        { icon: <Icon name="kids" />, name: "Youtube Kids" },

    ],    
    
    YoutubeMenu : [
        { icon: <Icon name="settings" />, name: "Settings" },
        { icon: <Icon name="report" />, name: "Report history" },
        { icon: <Icon name="help" />, name: "Help" },
        { icon: <Icon name="feedback" />, name: "Send feedback" },

    ],

}

export const CategoryItems = [
    "All",
    "Music",
    "Mixes",
    "Silicon Valley",
    "T-Series",
    "Kollywood",
    "Tollywood",
    "Hollywood",
    "Sitcom",
    "Cricket",
    "Tech",
    "Gaming",
  ];