export const backendURL =
  "https://coral-store-api-backend.madhushreekunde.repl.co";
// "https://coral-store-api.herokuapp.com/";
// "https://product-id-handler-middleware-timestamps-1.madhushreekunde.repl.co";

export const found = (array, id) => {
  return !!array.find((item) => item._id === id);
};

export const isProdInCart = (item, userState, token) => {
  return token
    ? userState?.cart.reduce((acc, value) => {
        if (item._id === value._id) {
          return "Go to Cart";
        } else {
          return acc;
        }
      }, "Add to Cart")
    : "Add to Cart";
};

// export const isProdInCart1 = (item, userState, token) => {
//   return token ? userState?.cart.find((item) => item._id === product._id) ? "Go to Cart" : "Add to Cart" : "Add to Cart"
// }

// userState.wishList.find(
//   (item) => item._id === product._id
// )
//   ? deleteFromWishListApi(product, userDispatch)
//   : addToWishListApi(product, userDispatch);

// (state = {
//   ...state,
//   itemsInCart: state.itemsInCart.find((item) =>
//     item.id === action.payload.id
//       ? { ...item, quantity: item.quantity + 1 }
//       : { ...item, quantity: item.quantity }
//   )
// });

export const isProdInWishList = (item, userState, token) => {
  return token
    ? userState?.wishList.reduce((icon, product) => {
        return product._id === item._id ? (icon = "fas fa-heart") : icon;
      }, "far  fa-heart")
    : "far fa-heart";
};

// export const isProdInWishList = (item, userState, token) => {
//   return token
//     ? userState?.wishList.reduce((color, product) => {
//         return product._id === item._id ? (color = "red") : color;
//       }, "transparent")
//     : "transparent";
// };


export const totalPrice = (userState) => {
  return userState?.cart.reduce((acc, value) => {
    return acc + value.quantity * value.price;
  }, 0);
};

export const totalItems = (userState) => {
  return userState?.cart.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);
};
