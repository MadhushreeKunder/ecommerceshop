import { useCart } from "../contexts";

export function Cart() {
  const { itemsInCart, setItemsInCart } = useCart();

  const incrementQuantity = (itemId) => {
    setItemsInCart((products) =>
      products.map((product) =>
        product.id === itemId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const removeItemFromCart = (removeItem) => {
    setItemsInCart(itemsInCart.filter((product) => product !== removeItem));
  };

  const decrementQuantity = (itemId) => {
    setItemsInCart((products) =>
      products.map((product) =>
        product.quantity <= 1
          ? removeItemFromCart(product)
          : itemId === product.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const getTotalCost = () => {
    return itemsInCart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="container">
      <h1>Cart</h1>

      <div className="cart-page">
        <div className="cards-section cart-list">
          <h3>Items in Cart</h3>
          {itemsInCart.map((item) => (
            <div className="card">
              <img className="card-img" src={item.img} alt="" />

              <div className="card-info">
                <p className="card-title">{item.name}</p>
                <small className="card-price">Rs.{item.price}</small>

                <div className="cart-update-quantity">
                  <button
                    className="button button-incdec"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <small className="cart-quantity">{item.quantity}</small>

                  <button
                    className="button button-incdec"
                    onClick={() => incrementQuantity(item.id)}
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
              Rs. {itemsInCart.length ? getTotalCost() : 0}{" "}
            </span>
          </h3>{" "}
          <button className="button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
