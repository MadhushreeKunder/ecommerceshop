import React from "react";
import { useAuth } from "../auth/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const { status, loginUserWithCredentials } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "", message:"", showPassword:""})
  
  const loginUser = async () => {
          // 1: login

    if (loginCredentials.username && loginCredentials.password) {
      const result = await loginUserWithCredentials(
        loginCredentials.username,
        loginCredentials.password
      );
        // 2: navigate to the page we were going to before you sent us to /login page
    // navigate(state?.from ? state.from : "/");
      if (result.success) {
        navigate(state?.from ? state.from : "/");
      }
    } else {
      setLoginCredentials({
        ...loginCredentials,
        message: "Username & Password required",
      });
    }
  };
  
  return (
    <>
      <h1> Login/Logout toggle </h1>
      <button onClick={loginHandler}>
        {isUserLogin ? "I am logged In" : "I am logged out"}
      </button>
    </>
  );

  function loginHandler() {
    isUserLogin ? logout() : loginUserWithCredentials("aman", "kanishk");


  }
}

