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

    case "INCREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    case "DECREMENT":
      return (state = {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });

    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.concat({
          ...action.payload,
          quantity: 1,
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };



    default:
      return state;
  }
};
