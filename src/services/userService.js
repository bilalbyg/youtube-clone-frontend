import axios from "axios";

export default class UserService {
  // Singleton Pattern
  static instance = null;
  static getInstance() {
    if (UserService.instance === null) {
      UserService.instance = new UserService();
    }
    return this.instance;
  }

  getUsers(){
    return axios.get("http://localhost:5000/users");
  }  
  
  getUserById(id){
    return axios.get(`http://localhost:5000/users/${id}`);
  }
}
