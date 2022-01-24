export const wishListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        itemsInWishList: state.itemsInWishList.concat(action.payload),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
