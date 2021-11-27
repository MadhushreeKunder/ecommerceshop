import { products } from "./data";
import { useCart } from "../contexts";

export function ProductListing() {
  const { itemsInCart, setItemsInCart } = useCart();

  const addToCart = (product) => {
    let newCart = [...itemsInCart];
    let currentItem = newCart.find((item) => product.name === item.name);

    if (currentItem) {
      currentItem.quantity++;
    } else {
      currentItem = {
        ...product,
        quantity: 1,
      };
      newCart.push(currentItem);
    }
    setItemsInCart(newCart);
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="cards-section">
        {products.map((item) => (
          <div className="card">
            <img className="card-img" src={item.img} alt="" />
            <div className="card-info">
              <div>
                <p className="card-title">{item.name}</p>
                <small className="card-price">Rs.{item.price}</small>
              </div>
              <button
                className="button button-primary card-add-to-cart"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
