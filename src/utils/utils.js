export const backendURL = "https://coral-store-api-backend.madhushreekunde.repl.co";
// "https://coral-store-api.herokuapp.com/";
// "https://product-id-handler-middleware-timestamps-1.madhushreekunde.repl.co";

export const found = (array, id) => {
    return !!array.find((item) => item.id === id);
  };
  
  export const isProdInCart = (item, state, token) => {
    return token
      ? state?.cart.reduce((acc, value) => {
          if (item.id === value.id) {
            return "Go to Cart";
          } else {
            return acc;
          }
        }, "Add to Cart")
      : "Add to Cart";
  };
  
  export const isProdInWishList = (item, state, token) => {
    return token
      ? state?.wishList.reduce((icon, product) => {
          return product.id === item.id ? (icon = "fas fa-lg fa-heart") : icon;
        }, "far fa-lg fa-heart")
      : "far fa-lg fa-heart";
  };
  
  export const loginAlert = (msg, setShowModal) => {
    return setShowModal(true);
  };
  
  export const totalPrice = (state) => {
    return state?.cart.reduce((acc, value) => {
      return acc + value.quantity * value.price;
    }, 0);
  };
