import { useCart, useWishList, useProduct } from "../contexts";
import { useState } from "react";
import { Filters } from "./filter/filters";

export function ProductListing() {
  const { itemsInCart, setItemsInCart } = useCart();
  const { itemsInWishList, setItemsInWishList } = useWishList();
  // const { toggleHeartRed, setToggleHeartRed } = useWishList();

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
      // setToggleHeartRed([!toggleHeartRed]);
    } else {
      setItemsInWishList(itemsInWishList.filter((item) => item !== itemExists));
      // setToggleHeartRed(toggleHeartRed);
    }
  };

  const {status, filteredData } = useProduct();

  return (
    <div className="container">
      <div></div>
      <h1>Products</h1>
      {/* {status.loading && <span> Loading... </span>} */}
      <Filters />

      <div className="cards-section">
        {filteredData.map((product) => (
          <div className="card">
            {/* <Link to={`/products/${product.id}`}> */}

            <div className="card-img-rating">
              <img
                className={
                  product.inStock ? "card-img" : "card-img card-filter"
                }
                src={product.img}
                alt=""
              />{" "}
              {!product.inStock && (
                <small class="card-overlay" style={{ padding: 0 }}>
                  Out of Stock
                </small>
              )}
              <div className="bottom-left">
                {product.star} <span class="fa fa-star checked"> </span> |{" "}
                {product.rating}k
              </div>
            </div>
            {/* </Link> */}

            <button
              class="button card-badge-small"
              onClick={() => addToWishList(product)}
            >
              <i
                class=" fa fa-heart"
                // style={{ color: toggleHeartRed ? "red" : "white" }}
              ></i>
            </button>
            <div className="card-info">
              {/* <Link to={`/products/${item.id}`}> */}
              <div>
                <p className="card-brand">{product.brand}</p>
                <p className="card-name">{product.name}</p>
                {/* <p>{product.star} <span class="fa fa-star checked"> </span> | {product.rating}k Ratings</p> */}
                <p className="card-price">Rs.{product.price} </p>
                <span className="card-old-price"> Rs. {product.oldprice}</span>
                <span className="card-discount">
                  {" "}
                  ({product.discount}% OFF)
                </span>
              </div>
              {/* </Link> */}

              <button
                className={
                  product.inStock
                    ? "button button-primary card-button"
                    : "button card-button button-disable"
                }
                onClick={() => {product.inStock && addToCart(product)}}
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
