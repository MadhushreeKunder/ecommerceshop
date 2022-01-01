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
            <Link to={`/products/${item.id}`}>
              <div className="card-img-rating">
                <img className="card-img" src={item.img} alt="" />{" "}
                <div className="bottom-left">{item.star} <span class="fa fa-star checked"> </span> | {item.rating}k</div>
              </div>
            </Link>
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
              <Link to={`/products/${item.id}`}>
                <div>
                  <p className="card-brand">{item.brand}</p>
                  <p className="card-name">{item.name}</p>
                  {/* <p>{item.star} <span class="fa fa-star checked"> </span> | {item.rating}k Ratings</p> */}
                  <p className="card-price">Rs.{item.price} </p>
                  <span className="card-old-price"> Rs. {item.oldprice}</span>
                  <span className="card-discount"> ({item.discount}% OFF)</span>
                </div>
              </Link>

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
