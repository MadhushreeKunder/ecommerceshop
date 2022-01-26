import { createContext, useContext, useEffect, useReducer } from "react";
import React from "react";
import axios from "axios";
import { useAuth } from "../auth/authContext";
import { userReducer } from "../reducers/userReducer";
import { backendURL } from "../utils/utils";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get(`${backendURL}/user-details`);
          const data = response.data.user;
          userDispatch({ type: "LOAD_USER_DETAILS", payload: data });
        } catch (error) {
          console.log("UserContext error:", error.response);
        }
      })();
    }
  }, [token]);

  const [userState, userDispatch] = useReducer(userReducer, {
    cart: [],
    wishList: [],
    _id: "1",
    addresses: [],
    loading: "",
  });

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
