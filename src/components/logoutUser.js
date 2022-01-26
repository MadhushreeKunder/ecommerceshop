import { Link } from "react-router-dom";
import { logoutImage } from "../api/images";
import { useAuth } from "../auth/authContext";

export const LogoutUser = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{paddingBottom : "0"}} className="login-form">
      <h2> Hello, {user.username}</h2>
      <p>Shop more!</p>
      <button  style={{ margin: "1.5rem" }} className="button button-primary">
        {" "}
        <Link to="/products">Shop More</Link>
      </button>
      <p>Do you want to logout?</p>
      <button
        style={{ margin: "1.5rem" }}
        className="button"
        onClick={() => logout()}
      >
        Logout
      </button>
      <img style={{width: "inherit"}} src={logoutImage} alt="" />
      
    </div>
  );
};
