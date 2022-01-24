import { useUser } from "../contexts";
import {
  removeFromCartApi,
  incrementQuantityCartApi,
  decrementQuantityCartApi,
} from "../api/apiSync";

export function Cart() {

  const { state, dispatch: cartDispatch } = useUser();

  const getTotalCost = () => {
    return state?.itemsInCart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="container">
      <h1>Cart</h1>

      <div className="cart-page">
        {state?.itemsInCart.length === 0 ? (
          <h1>Your cart feels light, add some Products!</h1>
        ) : (
          <div>
            <div className="cards-section cart-list">
              <h3>Items in Cart</h3>
              {state?.itemsInCart.map((item) => (
                <div className="card">
                  <img className="card-img" src={item.img} alt="" />

                  <div className="card-info">
                    <p className="card-title">{item.name}</p>
                    <small className="card-price">Rs.{item.price}</small>

                    <div className="cart-update-quantity">
                      <button
                        className="button button-incdec"
                        onClick={() =>
                          decrementQuantityCartApi(item, cartDispatch)
                        }
                      >
                        -
                      </button>
                      <small className="cart-quantity">{item.quantity}</small>

                      <button
                        className="button button-incdec"
                        onClick={() =>
                          incrementQuantityCartApi(item, cartDispatch)
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
                   Rs.{" "}
                  {state?.itemsInCart.length ? getTotalCost() : 0}{" "}
                </span>
              </h3>{" "}
              <button className="button">Proceed to checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
