import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (value) => {
    setEmail(value)
  }

  const handlePassword = (value) => {
    setPassword(value)
  }

  const handleSignin = () => {
    axios
      .post("http://localhost:5000/users/login", {
        email : email,
        password : password,
      })
      .then((response) => {
        localStorage.setItem("tokenKey", "Bearer " + response.data.access_token);
        localStorage.setItem("currentUser", response.data._id);
        navigate("/")
      })
      .catch(function (error) {
        alert(error)
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-full pb-14 pt-24 text-white">
      <div className="w-[400px] h-[600px] backdrop-blur-md rounded-3xl border border-black/10 bg-gradient-to-br from-white/10 to-white/0">
        <Form onSubmit={handleSignin}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="text-black"
            onChange={(e) => handleEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="text-black"
            onChange={(e) => handlePassword(e.target.value)}
          />
          <Button type="submit">Sign in</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
