// import {
//   createContext,
//   useState,
//   useContext,
//   useEffect,
//   useReducer,
// } from "react";
// import React from "react";
// import axios from "axios";
// import { useAuth } from "../auth/authContext";
// import { useNavigate } from "react-router-dom";
// import { cartReducer } from "../reducers/cartReducer";
// import { backendURL } from "../utils/utils";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const { token } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axios.get(
//          `${backendURL}/user-details`,
//           { headers: { authorization: token } }
//         );
//         setUser(response.data);
//       } catch (error) {
//         // if (error.response.status === 401) {
//         //   navigate("/login");
//         // }
//         console.log("cartcontext error:", error.response)
//         setUser("error");
//       }
//     })();
//   }, [token, navigate]);

//   const [state, dispatch] = useReducer(cartReducer, {
//     itemsInCart: [],
//     itemsInWishList: [],
//     _id: "1",
//     addresses: [],
//     loading: "",
//   });

//   return (
//     <CartContext.Provider value={{ itemsInCart: state.itemsInCart, 
//     itemsInWishList: state.itemsInWishList, dispatch  }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }


// ------------------------------------cart func--------------------------


  // const { itemsInCart, setItemsInCart } = useCart();

  // const incrementQuantity = (itemId) => {
  //   setItemsInCart((products) =>
  //     products.map((product) =>
  //       product.id === itemId
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  // };

  // const removeItemFromCart = (removeItem) => {
  //   setItemsInCart(itemsInCart.filter((product) => product !== removeItem));
  // };

  // const decrementQuantity = (itemId) => {
  //   setItemsInCart((products) =>
  //     products.map((product) =>
  //       product.quantity <= 1
  //         ? removeItemFromCart(product)
  //         : itemId === product.id
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product
  //     )
  //   );
  // };