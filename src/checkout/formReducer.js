import { defaultFormState } from "./addressForm";

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_PHONENO":
      return { ...state, phoneNumber: payload };
    case "SET_PINCODE":
      return { ...state, pinCode: payload };
    case "SET_CITY":
      return { ...state, city: payload };
    case "SET_ADDRESS":
      return { ...state, address: payload };
    case "SET_STATE":
      return { ...state, state: payload };
    case "SET_COUNTRY":
      return { ...state, country: payload };
    // case "SET_ADDRESSTYPE":
    //   return { ...state, addressType: payload };
    case "RESET_FORM":
      return defaultFormState;
    default:
      break;
  }
  return state;
};
