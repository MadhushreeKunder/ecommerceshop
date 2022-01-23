export const cartReducer = (state, action) => {
  switch (action.type) {
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







    // (state = {
    //   ...state,
    //   itemsInCart: state.itemsInCart.find((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : { ...item, quantity: item.quantity }
    //   )
    // });

    // if (!state.cart.find((cartItem) => cartItem.id === action.payload.id)) {
    // 			return {
    // 				...state,
    // 				cartTotal: state.cartTotal + action.payload.price,
    // 				cart: [...state.cart, { ...action.payload, qty: 1 }]
    // 			};
    // 		}
    // 		return state;

    default:
      return { state };
  }
};
