import React, { useState } from "react";
import API from "../../api";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { useNavigate, Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const signin = useSignIn();
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated();

  const onChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginUser = (e: any) => {
    e.preventDefault();
    API.post("/token/", formData)
      .then((res) => {
        if (
          signin({
            token: res.data.access,
            expiresIn: 1440,
            tokenType: "Bearer",
            authState: { username: formData.username },
          })
        ) {
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return isAuth() ? (
    <Navigate to="/" replace />
  ) : (
    <form autoComplete="off" onSubmit={loginUser}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
