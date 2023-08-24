import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (value) => {
    setUsername(value);
  };  
  
  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSignin = () => {
    axios
      .post("http://localhost:5000/users/", {
        username : username,
        email: email,
        password: password,
        profile_image : "https://cdn-icons-png.flaticon.com/256/149/149071.png"
      })
      .then((response) => {
        navigate("/signin");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-full pb-14 pt-24 text-white">
      <div className="flex items-center justify-center w-[400px] h-[600px] backdrop-blur-md rounded-3xl border border-black/10 bg-gradient-to-br from-white/10 to-white/0">
        <Form
          onSubmit={handleSignin}
          className="flex flex-col gap-y-10 items-center justify-center w-full h-full"
        >
          <img className="w-1/3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png" />

          <input
            type="text"
            name="username"
            placeholder="Your username"
            className="text-yt-white w-4/5 h-10 rounded-3xl px-4 py-1 bg-transparent border border-yt-red"
            onChange={(e) => handleUsername(e.target.value)}
          />          
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="text-yt-white w-4/5 h-10 rounded-3xl px-4 py-1 bg-transparent border border-yt-red"
            onChange={(e) => handleEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="text-yt-white w-4/5 h-10 rounded-3xl px-4 py-1 bg-transparent border border-yt-red"
            onChange={(e) => handlePassword(e.target.value)}
          />
          <Button
            className="w-3/5 h-10 rounded-3xl px-4 py-1 bg-yt-red hover:bg-yt-black font-semibold text-sm text-yt-white"
            type="submit"
          >
            Sign up
          </Button>
          <p className="text-yt-white">Already have an account?</p>
          <NavLink to="/signin"><h1 className="bg-clip-text font-semibold text-transparent text-sm bg-gradient-to-bl from-red-500 to-red-800">Sign in</h1></NavLink>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

