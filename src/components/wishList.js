import { useUser } from "../contexts";
import { deleteFromWishListApi } from "../api/apiSync";

export function WishList() {
  const { userState, userDispatch } = useUser();

  // const removeItemFromWishList = (removeItem) => {
  //   setItemsInWishList(itemsInWishList.filter((item) => item !== removeItem));
  // };

  return (
    <div className="container">
      <h1>WishList</h1>
      {userState?.wishList.length === 0 && (
        <h2>Empty Wishlist, make some wishes</h2>
      )}
      <div className="cards-section flex-start">
        {userState?.wishList.map((product) => (
          <div className="card">
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
