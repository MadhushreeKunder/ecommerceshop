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
      return (state = { ...state, data: action.payload });

    case "STATUS":
      return (state = { ...state, status: action.payload });

    case "CLEAR_FILTERS":
      return {  
        ...state,
        showInventoryAll: false,
        showFastDelivery: false,
        sortBy: null,
        ratings: 5,
      };

    case "PRODUCT_DETAIL":
      return { ...state, productDetail: action.payload };

    case "RATINGS":
      return { ...state, ratings: action.payload };

    default:
      return state;
  }
};
