import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import React from "react";
import axios from "axios";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";
import { userReducer } from "../reducers/userReducer";
import { backendURL } from "../utils/utils";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${backendURL}/user-details`
          // { headers: { authorization: token } }
        );
        const data = response.data.user;
        dispatch({ type: "LOAD_USER_DETAILS", payload: data });
      } catch (error) {
        // if (error?.response.status === 401) {
        //   //   navigate("/login");
        //   console.error("error from usercontext");
        // }
        console.log("UserContext error:", error.response);
      }
    })();
  }, [
    token,
    // navigate
  ]);

  const [state, dispatch] = useReducer(userReducer, {
    itemsInCart: [],
    itemsInWishList: [],
    id: "1",
    addresses: [],
    loading: "",
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
