import { useWishList } from "../contexts";

export function WishList() {
  const { itemsInWishList, setItemsInWishList } = useWishList();
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
