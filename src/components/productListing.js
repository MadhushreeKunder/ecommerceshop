import { useProduct } from "../contexts";
import { Filters } from "./filter/filters";
import {
  addToCartApi,
  addToWishListApi,
  deleteFromWishListApi,
} from "../api/apiSync";
import { found, isProdInCart, isProdInWishList } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { useUser } from "../contexts/userContext";

export function ProductListing() {
  const { userState, userDispatch } = useUser();

  const { status, filteredData } = useProduct();
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container flex-container">
      <div className="main-products">
        <h1>Products</h1>

        {status.loading && (
          <div className="loading-div">
            <img src="../images/loading.svg" alt="loading" />
          </div>
        )}

        <div className="cards-section">
          {filteredData.map((product) => (
            <div className="card" key={product._id}>
              {/* <Link to={`/products/${product._id}`}> */}

              <div className="card-img-rating">
                <img
                  className={
                    product.inStock ? "card-img" : "card-img card-filter"
                  }
                  src={product.img}
                  alt={product.name}
                />{" "}
                {!product.inStock && (
                  <small className="card-overlay" style={{ padding: 0 }}>
                    Out of Stock
                  </small>
                )}
                <div className="bottom-left">
                  {product.star} <span className="fa fa-star checked"> </span> |{" "}
                  {product.rating}k
                </div>
              </div>

              <button
                className="button card-badge-small"
                style={{ color: "#fe656b" }}
                onClick={
                  token
                    ? (e) => {
                        e.preventDefault();
                        userState.wishList.find(
                          (item) => item._id === product._id
                        )
                          ? deleteFromWishListApi(product, userDispatch)
                          : addToWishListApi(product, userDispatch);
                      }
                    : (e) => {
                        e.preventDefault();
                        navigate("/login");
                      }
                }
              >
                <i
                  className={`${isProdInWishList(product, userState, token)}`}
                  style={
                    token &&
                    userState.wishList.find((item) => item._id === product._id)
                      ? { color: "#fe656b" }
                      : null
                  }
                ></i>
              </button>

              <div className="card-info">
                {/* <Link to={`/products/${item.id}`}> */}
                <div>
                  <p className="card-brand">{product.brand}</p>
                  <p className="card-name">{product.name}</p>
                  {/* <p>
                    {product.star} <span className="fa fa-star checked"> </span> |{" "}
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
                  {userState && found(userState.cart, product._id) ? (
                    <Link to="/cart">
                      <button
                        className={
                          isProdInCart(product, userState, token)
                            ? "button button-secondary card-button"
                            : "button button-primary card-button"
                        }
                      >
                        {isProdInCart(product, userState, token)}
                      </button>
                    </Link>
                  ) : (
                    <button
                      disabled={product.inStock ? false : true}
                      className={
                        product.inStock
                          ? "button button-primary card-button"
                          : "button button-disable card-button"
                      }
                      onClick={
                        token
                          ? (e) => {
                              e.preventDefault();
                              addToCartApi(product, userDispatch);
                            }
                          : (e) => {
                              e.preventDefault();
                              navigate("/login");
                            }
                      }
                    >
                      <span> {isProdInCart(product, userState, token)} </span>
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
