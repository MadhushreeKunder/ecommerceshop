export const userReducer = (userState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        id: action.payload,
        wishList: [],
        cart: [],
        loading: "",
      };

    case "LOAD_USER_DETAILS":
      return {
        ...action.payload,
        loading: "",
        cart: action.payload.cart.map((item) => item.productId),
        wishList: action.payload.wishList.map(
          (item) => item.productId
        ),
      };

    case "STATUS":
      return {
        ...userState,
        loading: action.payload,
      };

    case "ADD_ADDRESS":
      return {
        ...userState,
        addresses: userState.addresses.concat(action.payload),
      };

    case "DELETE_ADDRESS":
      return {
        ...userState,
        addresses: action.payload,
      };

      case "EDIT_ADDRESS":
      return {
        ...userState,
        addresses: userState.addresses.map((item) => {
          return item._id === action.payload._id ? action.payload.address : item;
        }),
      };

    case "INCREMENT":
      return {
        ...userState,
        cart: userState.cart.map((item) => {
          return item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    case "DECREMENT":
      return {
        ...userState,
        cart: userState.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "ADD_TO_CART":
      return {
        ...userState,
        cart: userState.cart.concat({
          ...action.payload,
          quantity: 1,
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...userState,
        cart: userState.cart.filter((item) => {
          return item._id !== action.payload._id;
        }),
      };

      case "ADD_TO_WISHLIST":
        return {
          ...userState,
          wishList: userState.wishList.concat(action.payload),
        };
  
      case "REMOVE_FROM_WISHLIST":
        return {
          ...userState,
          wishList: userState.wishList.filter((item) => {
            return item._id !== action.payload._id;
          }),
        };

    default:
      return userState;
  }
};
