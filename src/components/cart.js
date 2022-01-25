import { useUser } from "../contexts";
import {
  removeFromCartApi,
  incrementQuantityCartApi,
  decrementQuantityCartApi,
} from "../api/apiSync";
import { Link } from "react-router-dom";

export function Cart() {
  const { userState, userDispatch } = useUser();

  const getTotalCost = () => {
    return userState?.cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="container">
      <h1>Cart</h1>

      <div className="cart-page">
        {userState?.cart.length === 0 ? (
          <h1>Your cart feels light, add some Products!</h1>
        ) : (
          <div>
            <div className="cards-section cart-list">
              <h3>Items in Cart</h3>
              {userState?.cart.map((product) => (
                <div className="card" key={product._id}>
                  <img
                    className="card-img"
                    src={product.img}
                    alt={product.name}
                  />

                  <div className="card-info">
                    <p className="card-title">{product.name}</p>
                    <small className="card-price">Rs.{product.price}</small>

                    <div className="cart-update-quantity">
                      <button
                        className="button button-incdec"
                        onClick={() =>
                          decrementQuantityCartApi(product, userDispatch)
                        }
                      >
                        -
                      </button>
                      <small className="cart-quantity">
                        {product.quantity}
                      </small>

                      <button
                        className="button button-incdec"
                        onClick={() =>
                          incrementQuantityCartApi(product, userDispatch)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-details">
              <h3>
                Total Cost :{" "}
                <span
                  style={{
                    backgroundColor: "#ECECEC",
                    padding: "0.5rem",
                  }}
                >
                  {" "}
                  Rs. {userState?.cart.length ? getTotalCost() : 0}{" "}
                </span>
              </h3>{" "}
              <Link to="/address">
                <button className="button">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
