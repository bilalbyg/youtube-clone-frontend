import axios from "axios";

export default class VideoService {
  // Singleton Pattern
  static instance = null;
  static getInstance() {
    if (VideoService.instance === null) {
      VideoService.instance = new VideoService();
    }
    return this.instance;
  }

  getVideos(){
    return axios.get("http://localhost:5000/videos");
  }

  getVideoById(id){
    return axios.get(`http://localhost:5000/videos/${id}`);
  }
}
