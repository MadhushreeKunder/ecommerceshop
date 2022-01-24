import { useProduct } from "../contexts";
import { Filters } from "./filter/filters";
import {
  addToCartApi,
  addToWishListApi,
  deleteFromWishListApi,
} from "../api/apiSync";
import {
  found,
  isProdInCart,
  isProdInWishList,
  loginAlert,
} from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { useUser } from "../contexts/userContext";

export function ProductListing() {
  const { state, dispatch: cartDispatch } = useUser();

  const { status, filteredData } = useProduct();
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container flex-container">
      <div className="main-products">
        <h1>Products</h1>
        {status.loading && <span> Loading... </span>}

        <div className="cards-section">
          {filteredData.map((product) => (
            <div className="card" key={product.id}>
              {/* <Link to={`/products/${product.id}`}> */}

              <div className="card-img-rating">
                <img
                  className={
                    product.inStock ? "card-img" : "card-img card-filter"
                  }
                  src={product.img}
                  alt={product.name}
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

              {token ? (
                <button
                  class="button card-badge-small"
                  onClick={
                    state?.itemsInWishList.find(
                      (item) => item.id === product.id
                    )
                      ? () => {
                          deleteFromWishListApi(product, cartDispatch);
                        }
                      : () => {
                          addToWishListApi(product, cartDispatch);
                        }
                  }
                >
                  <i class=" fa fa-heart" style={{ color: "red" }}></i>
                </button>
              ) : (
                <button
                  class="button card-badge-small"
                  onClick={navigate("login")}
                >
                  <i class=" fa fa-heart"></i>
                </button>
              )}

              <div className="card-info">
                {/* <Link to={`/products/${item.id}`}> */}
                <div>
                  <p className="card-brand">{product.brand}</p>
                  <p className="card-name">{product.name}</p>
                  {/* <p>
                    {product.star} <span class="fa fa-star checked"> </span> |{" "}
                    {product.rating}k Ratings
                  </p> */}
                  <p className="card-price">Rs.{product.price} </p>
                  <span className="card-old-price">
                    {" "}
                    Rs. {product.oldprice}
                  </span>
                  <span className="card-discount">
                    {" "}
                    ({product.discount}% OFF)
                  </span>
                </div>
                {/* </Link> */}
                <div>
                  {product.inStock ? (
                    state && found(state.itemsInCart, product.id) ? (
                      <Link to="/cart">
                        <button>
                          <p>{isProdInCart(product, state, token)}</p>
                        </button>
                      </Link>
                    ) : (
                      <button
                        className={"button button-primary card-button"}
                        onClick={
                          token
                            ? () => addToCartApi(product, cartDispatch)
                            : navigate("login")
                        }
                      >
                        {isProdInCart(product, state, token)}
                      </button>
                    )
                  ) : (
                    <button className={"button card-button button-disable"}>
                      {isProdInCart(product, state, token)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="filters">
        <Filters />
      </div>
    </div>
  );
}
