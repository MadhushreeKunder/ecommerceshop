export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        _id: action.payload,
        wishlist: [],
        cart: [],
        loading: "",
      };

    case "LOAD_USER_DETAILS":
      return {
        ...action.payload,
        loading: "",
        cart: action.payload.cart.map((item) => item.productId),
        wishList: action.payload.wishList.map((item) => item.productId),
      };

    case "STATUS":
      return {
        ...state,
        loading: action.payload,
      };

    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.concat(action.payload),
      };

    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };

    //   case "EDIT_ADDRESS":
    //   return {
    //     ...state,
    //     addresses: state.addresses.map((item) => {
    //       return item._id === action.payload.id ? action.payload.address : item;
    //     }),
    //   };

    default:
      return state;
  }
};
