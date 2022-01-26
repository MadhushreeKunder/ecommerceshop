import { Link } from "react-router-dom"
import { emptyCartImage } from "../api/images"

export const EmptyCart = () => {
    return (
        <div
          className="login-form"
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          {" "}
          <h2>Your cart feels light, add some Products!</h2>
          <button className="button button-primary" style={{ margin: "1rem" }}>
            <Link to="/products">Add Products</Link>
          </button>
          <img src={emptyCartImage} alt="" style={{ width: "60%" }}></img>
        </div>
    )
}