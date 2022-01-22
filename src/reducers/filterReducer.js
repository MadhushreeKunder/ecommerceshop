export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return (state = { ...state, sortBy: action.payload });
    case "TOGGLE_INVENTORY":
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll,
      });
    case "TOGGLE_DELIVERY":
      return (state = {
        ...state,
        showFastDeliveryOnly: !state.showFastDeliveryOnly,
      });
    case "ADD_DATA":
      return (state = { ...state, productsData: action.payload });

    case "STATUS":
      return (state = { ...state, status: action.payload });

    default:
      return state;
  }
};
