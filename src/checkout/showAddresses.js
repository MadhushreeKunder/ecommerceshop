import React from "react";
import { useState } from "react";
import { useUser } from "../contexts/userContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { AddressForm } from "./addressForm";
import { backendURL } from "../utils/utils";

export const ShowAddresses = ({ setAddNewAddress, editAdd, setEditAdd }) => {
  const { userState, userDispatch } = useUser();

  const [chooseAddress, setChooseAddress] = useState(null);

  const editAddress = (id) => {
    setEditAdd({ toggle: true, editAddID: id });
  };

  const deleteAddress = async (id) => {
    try {
      userDispatch({ type: "STATUS", payload: "Deleting Address...." });
      const response = await axios.delete(
        `${backendURL}/user-details/address/${id}`
      );
      if (response.status === 200) {
        userDispatch({
          type: "DELETE_ADDRESS",
          payload: response.data.addresses,
        });
      }
    } catch (error) {
      userDispatch({
        type: "STATUS",
        payload: "Couldn't add address..",
      });
    } finally {
      userDispatch({ type: "STATUS", payload: "" });
    }
  };

  return (
    <>
      <div className="show-addresses">
        {userState.addresses.map((item) => {
          return (
            <div className="card card-address" key={item._id}>
              <div key={item._id}>
                <span className="address-bold-label" style={{fontSize: "1.5rem"}}>{item.name}</span>{" "}
                <p>
                  <span className="address-bold-label">Address:</span>{" "}
                  {item.address} {item.city}- {item.pinCode}
                </p>
                <p>
                  {item.state} - {item.country}
                </p>
                <p>
                  {" "}
                  <span className="address-bold-label">Phone Number: </span>
                  {item.phoneNumber}
                </p>
              </div>
              <div className="address-actions">
                <div>
                  <button
                    style={{ marginRight: "0.5rem" }}
                    className="button button-secondary"
                    onClick={() => editAddress(item._id)}
                  >
                    <i className="far fa-edit"></i> Edit
                  </button>
                  <button
                    className="button"
                    onClick={() => deleteAddress(item._id)}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </div>
                <Link to="/checkout" state={{ id: item._id }}>
                  <button
                    className="button button-primary"
                    style={{ padding: "1rem", margin: "1rem" }}
                  >
                    Deliver to this Address
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {editAdd.toggle && (
        <AddressForm
          editAddID={editAdd.editAddID}
          setAddNewAddress={setAddNewAddress}
          setEditAdd={setEditAdd}
        />
      )}
    </>
  );
};
