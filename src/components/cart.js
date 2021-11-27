import { useCart } from "../contexts";

export function Cart() {
  const { itemsInCart } = useCart();

  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="cards-section">
        {itemsInCart.map((item) => (
          <div className="card">
            <img className="card-img" src={item.img} alt="" />
            <div className="card-info">
              <p className="card-title">{item.name}</p>
              <small className="card-price">Rs.{item.price}</small>
              <div className="cart-update-quantity">
                <button className="button button-incdec">-</button>
                <small className="cart-quantity">{item.quantity}</small>
                <button className="button button-incdec">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
