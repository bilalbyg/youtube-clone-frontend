import axios from "axios";

export default class CommentService {
  // Singleton Pattern
  static instance = null;
  static getInstance() {
    if (CommentService.instance === null) {
      CommentService.instance = new CommentService();
    }
    return this.instance;
  }

  getComments(){
    return axios.get("http://localhost:5000/comments");
  }

  getCommentById(id){
    return axios.get(`http://localhost:5000/comments/${id}`);
  }  
  
  getCommentByVideoId(videoId){
    return axios.get(`http://localhost:5000/comments/video/${videoId}`);
  }
}
