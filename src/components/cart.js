import { useUser } from "../contexts";
import {
  removeFromCartApi,
  incrementQuantityCartApi,
  decrementQuantityCartApi,
} from "../api/apiSync";
import { Link } from "react-router-dom";
import { totalPrice, totalItems } from "../utils/utils";

export function Cart() {
  const { userState, userDispatch } = useUser();

  const getTotalCostItem = (item) => {
    return item.quantity * item.price;
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      <div className="">
        {userState?.cart.length === 0 ? (
          <h1>Your cart feels light, add some Products!</h1>
        ) : (
          <div className="cart">
            <div className="cards-section cart-list">
              <h3>Items in Cart</h3>
              {userState?.cart.map((product) => (
                <div className="card card-cart" key={product._id}>
                  {/* <div className="card-cart-product"></div> */}
                  <img
                    className="card-cart-img"
                    src={product.img}
                    alt={product.name}
                  />

                  <div className="card-cart-info ">
                    <p className="card-brand">{product.brand}</p>
                    <p className="card-name">{product.name}</p>
                    <p className="card-price">Rs.{product.price}</p>

                    <div className="cart-update-quantity">
                      <button
                        className="button button-incdec button-secondary"
                        onClick={() =>
                          incrementQuantityCartApi(product, userDispatch)
                        }
                      >
                        +
                      </button>

                      <small className="cart-quantity">
                        {product.quantity}
                      </small>

                      {product.quantity > 1 ? (
                        <button
                          className="button button-incdec button-secondary"
                          onClick={() =>
                            decrementQuantityCartApi(product, userDispatch)
                          }
                        >
                          -
                        </button>
                      ) : (
                        <button
                          className="button button-incdec "
                          onClick={() =>
                            removeFromCartApi(product, userDispatch)
                          }
                        >
                          -
                        </button>
                      )}
                    </div>

                    <button className="button ">Remove</button>
                  </div>
                  <div>Price: Rs.{getTotalCostItem(product)} </div>
                </div>
              ))}
            </div>
            <div className="cart-payment">
              <h3>
                <span style={{ textDecoration: "underline" }}>SubTotal</span>
                <p>
                  ({totalItems(userState)} items) :{" "}
                  <span
                    style={{
                      backgroundColor: "#ECECEC",
                      padding: "0.5rem",
                    }}
                  >
                    Rs. {totalPrice(userState)}
                  </span>
                </p>
              </h3>{" "}
              <Link to="/address">
                <button
                  className="button button-primary"
                  style={{ marginTop: "2rem" }}
                >
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
