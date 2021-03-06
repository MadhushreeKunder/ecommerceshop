import { useReducer, useState } from "react";
import { useUser } from "../contexts/userContext";
import { handleEditAddress, handleSubmit } from "./checkoutUtils";
import { countries, states } from "./formDB";
import { formReducer } from "./formReducer";

export const defaultFormState = {
  name: "",
  phoneNumber: "",
  pinCode: "",
  city: "",
  address: "",
  state: "Maharashtra",
  country: "India",
};

export const AddressForm = ({ setAddNewAddress, editAddID, setEditAdd }) => {
  const { userState, userDispatch } = useUser();
  const [msg, setMsg] = useState("");
  let editAddress = defaultFormState;
  if (editAddID) {
    editAddress = userState.addresses.find((item) => item._id === editAddID);
  }

  const initialFormState = {
    name: editAddress.name,
    phoneNumber: editAddress.phoneNumber,
    pinCode: editAddress.pinCode,
    city: editAddress.city,
    address: editAddress.address,
    state: editAddress.state,
    country: editAddress.country,
  };

  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  return (
    <div>
      <form
        onSubmit={
          editAddID
            ? (e) =>
                handleEditAddress({
                  e,
                  formState,
                  userDispatch,
                  editAddID,
                  setAddNewAddress,
                  formDispatch,
                  setMsg,
                  setEditAdd,
                  initialFormState,
                })
            : (e) =>
                handleSubmit({
                  e,
                  formState,
                  userDispatch,
                  setMsg,
                  setAddNewAddress,
                })
        }
        className="signup-form"
      >
        <div className="login-input">
          <div className="input">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input"
              required
              value={formState.name}
              onChange={(e) =>
                formDispatch({ type: "SET_NAME", payload: e.target.value })
              }
            />
          </div>

          <div className="input">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter phone number"
              className="form-input"
              required
              value={formState.phoneNumber}
              // value={formState.phoneNumber}
              onChange={(e) =>
                formDispatch({ type: "SET_PHONENO", payload: e.target.value })
              }
            />
          </div>
        </div>

        <div className="login-input">
          <div className="input">
            <label>Pin Code {"  "}</label>

            <input
              type="number"
              placeholder="Enter PinCode"
              className="form-input"
              required
              value={formState.pinCode}
              onChange={(e) =>
                formDispatch({ type: "SET_PINCODE", payload: e.target.value })
              }
            />
          </div>

          <div className="input">
            <label>City</label>

            <input
              type="text"
              placeholder="Enter City"
              className="form-input"
              required
              value={formState.city}
              onChange={(e) =>
                formDispatch({ type: "SET_CITY", payload: e.target.value })
              }
            />
          </div>
        </div>

        <div className="login-input">
          <label>Address</label>

          <div className="input">
            <textarea
              className="form-textarea"
              placeholder="Enter Address"
              cols="20"
              rows="10"
              required
              value={formState.address}
              onChange={(e) =>
                formDispatch({ type: "SET_ADDRESS", payload: e.target.value })
              }
            ></textarea>
          </div>

          <div className="login-input">
            <div className="input-dropdown">
              <label>State</label>
              <select
                className="input-select"
                value={formState.state}
                onChange={(e) =>
                  formDispatch({ type: "SET_STATE", payload: e.target.value })
                }
              >
                {states.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
            </div>

            <div className="input-dropdown">
              <label>Country</label>
              <select
                className="input-select"
                value={formState.country}
                onChange={(e) =>
                  formDispatch({ type: "SET_COUNTRY", payload: e.target.value })
                }
              >
                {countries.map((country) => {
                  return <option value={country}>{country}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="login-input">
          <p>{msg}</p>
        </div>
        <div className="login-input login-input-buttons">
          <button className="button button-primary" type="submit">
            {editAddID ? "Save Address" : "Add Address"}
          </button>

          <button
            className="button"
            onClick={() => {
              return formDispatch({
                type: "RESET_FORM",
                payload: initialFormState,
              });
            }}
            type="reset"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};
