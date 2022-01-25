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
      {userState.wishList.length === 0 && (
        <h2>Empty Wishlist, make some wishes</h2>
      )}
      <div className="cards-section flex-start">
        {userState?.wishList.map((item) => (
          <div className="card">
            <img className="card-img" src={item.img} alt="" />
            <div className="card-info">
              <p className="card-title">{item.name}</p>
              <small className="card-price">Rs.{item.price}</small>
              <button
                className="button button-secondary card-button"
                onClick={() => deleteFromWishListApi(item, userDispatch)}
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
