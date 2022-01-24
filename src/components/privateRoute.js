import { Navigate, Route } from "react-router";
import { useAuth } from "../auth/authContext";

export const PrivateRoute = ({ path, ...props }) => {
  const { token } = useAuth();
  return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate replace state={{ from: path }} to="/login" />
  );
};
