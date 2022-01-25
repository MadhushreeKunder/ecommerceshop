import axios from "axios";
import { backendURL } from "../utils/utils";

export const addToCartApi = async (product, dispatch) => {
  try {
    dispatch({ type: "STATUS", payload: "Item Adding to Cart...." });
    const response = await axios.post(`${backendURL}/user-details/cart`, {
      id: product._id,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  } catch (error) {
    dispatch({ type: "STATUS", payload: "Couldn't add item to cart.." });
  }
};

export const removeFromCartApi = async (product, dispatch) => {
  try {
    dispatch({
      type: "STATUS",
      payload: "Removing Item from Cart....",
    });
    const response = await axios.delete(
      `${backendURL}/user-details/cart/${product._id}`
    );
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }
  } catch (error) {
    dispatch({
      type: "STATUS",
      payload: "Couldn't remove item to cart..",
    });
  }
};

export const incrementQuantityCartApi = async (product, dispatch) => {
  try {
    dispatch({
      type: "STATUS",
      payload: "Increasing Quantity..",
    });
    const response = await axios.post(
      `${backendURL}/user-details/cart/${product._id}`,
      {
        ...product,
        quantity: product.quantity + 1,
      }
    );
    if (response.status === 200) {
      dispatch({ type: "INCREMENT_QUANTITY", payload: product });
    }
  } catch (error) {
    dispatch({
      type: "STATUS",
      payload: "Couldn't increase quantity in the cart..",
    });
  }
};

export const decrementQuantityCartApi = async (product, dispatch) => {
  try {
    dispatch({
      type: "STATUS",
      payload: "Decreasing Quantity..",
    });
    const response = await axios.post(
      `${backendURL}/user-details/cart/${product._id}`,
      {
        ...product,
        quantity: product.quantity - 1,
      }
    );
    if (response.status === 200) {
      dispatch({ type: "DECREMENT_QUANTITY", payload: product });
    }
  } catch (error) {
    dispatch({
      type: "STATUS",
      payload: "Couldn't decrease quantity in the cart..",
    });
  }
};

export const addToWishListApi = async (product, dispatch) => {
  try {
    dispatch({ type: "STATUS", payload: "Item Adding to Wishlist...." });
    const response = await axios.post(`${backendURL}/user-details/wishlist`, {
      id: product._id,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  } catch (error) {
    dispatch({ type: "STATUS", payload: "Couldn't add item to Wishlist.." });
  }
};

export const deleteFromWishListApi = async (product, dispatch) => {
  try {
    dispatch({ type: "STATUS", payload: "Removing Item from Wishlist...." });
    const response = await axios.delete(
      `${backendURL}/user-details/wishlist/${product._id}`
    );
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    }
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: "STATUS",
      payload: "Couldn't remove item to Wishlist..",
    });
  }
};