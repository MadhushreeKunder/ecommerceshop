import React from "react";
import { useUser } from "../contexts/userContext";
import { useLocation } from "react-router";
import { totalPrice } from "../utils/utils";

export const Checkout = () => {
  const { userState } = useUser();
  const { state } = useLocation();
  const address = userState.addresses.find((item) => item._id === state.id);

  return (
    <div className="checkout-page">
      <h2>Review your order</h2>
      <div className="checkout">
        <div className="checkout-order-details">
          <div className="checkout-address-border checkout-division">
            <h3>Shipping Address</h3>
            <div className="checkout-address">
              <p> {address.name}</p>
              <p>
                Address: {address.address} {address.city} - {address.pinCode}{" "}
                {address.state} {address.country}
              </p>
              <p>Phone Number: {address.phoneNumber}</p>
            </div>
          </div>
          <div className=" checkout-division">
            <h3>Order Details</h3>
            <div className="checkout-product">
              {userState.cart.map((item) => {
                return (
                  <div className="card" key={item._id}>
                    <img src={item.img} alt={item.name} className="card-img" />
                    <div className="card-info">
                      <p className="card-brand">{item.brand}</p>
                      <p className="card-name">{item.name}</p>

                      <p className="card-price">Rs. {item.price}</p>
                      <div>
                        <span className="card-old-price">
                          {" "}
                          Rs. {item.oldprice}
                        </span>
                        <span className="card-discount">
                          {" "}
                          ({item.discount}% OFF)
                        </span>
                      </div>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="checkout-payment  checkout-division">
          <p className="bold-label">Order Summary</p>
          <div className="checkout-charges">
            <p>Items: ₹ Rs. {totalPrice(userState)}</p>
            <p>Delivery: FREE </p>
          </div>
          <hr />
          {" "}
          <p className="bold-label">
            Order Total: Rs. {totalPrice(userState)}{" "}
          </p>
          {" "}
          <hr />
          <button className="button button-primary checkout-button">
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
};
