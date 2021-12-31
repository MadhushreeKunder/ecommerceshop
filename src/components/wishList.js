import { useWishList } from "../contexts";

export function WishList() {
  const { itemsInWishList, setItemsInWishList } = useWishList();

  const removeItemFromWishList = (removeItem) => {
    setItemsInWishList(itemsInWishList.filter((item) => item !== removeItem));
  };

  return (
    <div className="container">
      <h1>WishList</h1>
      <div className="cards-section flex-start">
        {itemsInWishList.map((item) => (
          <div className="card">
            <img className="card-img" src={item.img} alt="" />
            <div className="card-info">
              <p className="card-title">{item.name}</p>
              <small className="card-price">Rs.{item.price}</small>
              <button
                className="button button-secondary card-button"
                onClick={() => removeItemFromWishList(item)}
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
