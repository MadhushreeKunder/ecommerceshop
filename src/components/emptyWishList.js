import { Link } from "react-router-dom"
import { emptyWishListImage } from "../api/images"

export const EmptyWishList = () => {
    return (
        <div
          className="login-form"
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          {" "}
          <h2>Empty Wishlist, make some wishes</h2>
          <button className="button button-primary" style={{ margin: "1rem" }}>
            <Link to="/products">Make Wishes</Link>
          </button>
          <img src={emptyWishListImage} alt="" style={{ width: "60%" }}></img>
        </div>
    )
}