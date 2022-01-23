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
import { cartReducer } from "../reducers/cartReducer";
import { backendURL } from "../utils/utils";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [user, setUser] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
         `${backendURL}/user`,
          { headers: { authorization: token } }
        );
        setUser(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/login");
        }
        setUser("error");
      }
    })();
  }, [token, navigate]);

  const [state, dispatch] = useReducer(cartReducer, {
    itemsInCart: [],
    // itemsInWishList: [],
    _id: "1",
    // addresses: [],
    // loading: "",
  });

  return (
    <CartContext.Provider value={{ itemsInCart: state.itemsInCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
