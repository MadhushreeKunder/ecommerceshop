export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        _id: action.payload,
        itemsInWishlist: [],
        itemsInCart: [],
        loading: "",
      };

    case "LOAD_USER_DETAILS":
      return {
        ...action.payload,
        loading: "",
        itemsInCart: action.payload.itemsInCart.map((item) => item.productId),
        itemsInWishList: action.payload.itemsInWishList.map(
          (item) => item.productId
        ),
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

      case "ADD_TO_WISHLIST":
        return {
          ...state,
          itemsInWishList: state.itemsInWishList.concat(action.payload),
        };
  
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishList: state.wishList.filter((item) => {
            return item._id !== action.payload._id;
          }),
        };

    default:
      return state;
  }
};
