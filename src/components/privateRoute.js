import { Navigate, Route } from "react-router";
import { useAuth } from "../auth/authContext";

export default function PrivateRoute({ path, ...props }) {
  const { token } = useAuth();
  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate replace state={{ from: path }} to="/login" />
  );
}


// export function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }
