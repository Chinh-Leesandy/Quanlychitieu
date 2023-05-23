import React, { useState } from "react";
import axios from "axios";
import "./assets/login.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    if (username.trim().length === 0 && password.trim().length === 0){
      setError("Vui lòng nhập username và password");
    }
    else if (password.trim().length === 0){
      setError("Vui lòng nhập password");
    }
    else if (username.trim().length === 0)  {
      setError("Vui lòng nhập username ");
    } else {
      axios
        .post("http://localhost:8080/login", data)
        .then((response) => {
          if (response.status === 200) {
            const userId = response.data;
            console.log(userId);
            window.location.href = "/home";
          }
        })
        .catch((error) => {
          setError("Tên đăng nhập hoặc mật khẩu không chính xác");
        });
    }
  };
  return (
    <div>
      <div class="container">
        <div class="day"></div>
        <div className="loginfrom">
          <div className="topic">
            <label className="text" htmlFor="text">
              Đăng nhập
            </label>{" "}
          </div>
          <br />
          <div className="username">
            <label htmlFor="text">Username: </label>
            <input
              required
              className="inp_user"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <br />
          </div>
          <div className="password">
            <label htmlFor="text">Password: </label>
            <input
              required
              className="inp_pass"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
          </div>
          <button className="btn_login" onClick={handleLogin}>
            Login
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};
