import { useAuth } from "../auth/authContext";

export const LogoutUser = () => {
  const { user, logout } = useAuth();
  return (
      <div>
          <h2> Hello {user.username}</h2>
          <p>{user.email}</p>
          <button onClick={()=> logout()}>Logout</button>
      </div>
  )
};
