import { useCart, useWishList } from "../contexts";
import { Link } from "react-router-dom";
import { products } from "../data";

export function ProductListing() {
  const { itemsInCart, setItemsInCart } = useCart();
  const { itemsInWishList, setItemsInWishList } = useWishList();
  // const {toggleHeart, setToggleHeart} = useWishList();

  const addToCart = (product) => {
    const itemExists = itemsInCart.find((item) => product.name === item.name);
    if (!itemExists) {
      setItemsInCart([...itemsInCart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishList = (product) => {
    const itemExists = itemsInWishList.find(
      (item) => product.name === item.name
    );
    if (!itemExists) {
      setItemsInWishList([...itemsInWishList, product]);
      // setToggleHeart("red");
    }
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="cards-section">
        {products.map((item) => (
          <div className="card">
            <Link to={`/products/${item.id}`}>view details</Link>
            <img className="card-img" src={item.img} alt="" />
            <button
              class="button card-badge-small"
              onClick={() => addToWishList(item)}
            >
              <i
                class=" fa fa-heart"
                // style={{color: toggleHeart}}
              ></i>
            </button>
            <div className="card-info">
              <div>
                <p className="card-title">{item.name}</p>
                <small className="card-price">Rs.{item.price}</small>
              </div>
              <button
                className="button button-primary card-button"
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
