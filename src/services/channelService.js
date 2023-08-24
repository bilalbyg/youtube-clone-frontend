import axios from "axios";

export default class ChannelService {
  // Singleton Pattern
  static instance = null;
  static getInstance() {
    if (ChannelService.instance === null) {
      ChannelService.instance = new ChannelService();
    }
    return this.instance;
  }

  getChannels() {
    return axios.get("http://localhost:5000/channels");
  }

  getChannelById(id) {
    return axios.get(`http://localhost:5000/channels/${id}`);
  }

  getChannelsByIDs(ids) {
    return axios.post("http://localhost:5000/channels/ids", {ids});
  }
}
