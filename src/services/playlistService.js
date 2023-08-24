import axios from "axios";

export default class PlaylistService {
  // Singleton Pattern
  static instance = null;
  static getInstance() {
    if (PlaylistService.instance === null) {
      PlaylistService.instance = new PlaylistService();
    }
    return this.instance;
  }

  getPlaylists(){
    return axios.get("http://localhost:5000/playlists");
  }

  getPlaylistById(id){
    return axios.get(`http://localhost:5000/playlists/${id}`);
  }

  getPlaylistByUserId(userId){
    return axios.get(`http://localhost:5000/playlists/user/${userId}`);
  }
}
