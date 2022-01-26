import { useUser } from "../contexts";
import { deleteFromWishListApi } from "../api/apiSync";
import { Link } from "react-router-dom";
import { EmptyWishList } from "./emptyWishList";

export function WishList() {
  const { userState, userDispatch } = useUser();

  // const removeItemFromWishList = (removeItem) => {
  //   setItemsInWishList(itemsInWishList.filter((item) => item !== removeItem));
  // };

  return (
    <div className="container wishlist-page">
      <h1>WishList</h1>
      {userState?.wishList.length === 0 && <EmptyWishList/>}
      <div className="cards-section flex-start">
        {userState?.wishList.map((product) => (
          <div className="card" key={product._id}>
            <img className="card-img" src={product.img} alt="" />
            <div className="card-info">
              <p className="card-title">{product.name}</p>
              <small className="card-price">Rs.{product.price}</small>
              <button
                className="button button-secondary card-button"
                onClick={() => deleteFromWishListApi(product, userDispatch)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
