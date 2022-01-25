import { useState } from "react";
import { AddressForm } from "./addressForm";
import { ShowAddresses } from "./showAddresses";

export const Address = () => {
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [editAdd, setEditAdd] = useState({ toggle: false, editAddID: "" });

  return (
    <div className="address-add login-form">
      <h2>
        <i className="fas fa-map-marker-alt"></i> Addresses
      </h2>
      {addNewAddress ? (
        <button
          className="button"
          onClick={() => {
            setEditAdd(() => !editAdd.toggle);
            setAddNewAddress(() => !addNewAddress);
          }}
        >
          <i className="fas fa-arrow-left"></i> Go Back
        </button>
      ) : (
        <button
          className="button button-secondary"
          onClick={() => setAddNewAddress(() => !addNewAddress)}
        >
          <i className="fas fa-plus"></i> Add new Address
        </button>
      )}
      {!editAdd.toggle && addNewAddress && (
        <AddressForm
          addNewAddress={addNewAddress}
          setAddNewAddress={setAddNewAddress}
        ></AddressForm>
      )}
      <ShowAddresses
        setAddNewAddress={setAddNewAddress}
        editAdd={editAdd}
        setEditAdd={setEditAdd}
      />
    </div>
  );
};
