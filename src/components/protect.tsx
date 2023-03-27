import { FC } from "react";
import { getCookie } from "../utils/cookies";
import { useLocation, Navigate } from "react-router-dom";
type TProtectedRoute = {
  element: JSX.Element;
};
export const ProtectedRouteElement: FC<TProtectedRoute> = ({ element }) => {
  const location = useLocation();
  const isUser = getCookie("accessToken");
  const forAuth = location.pathname.startsWith("/profile") ? false : true;

  if (!isUser && !forAuth)
    return <Navigate to="/login" state={{ from: location }} />;
  if (isUser && forAuth) return <Navigate to={location.state?.from || "/"} />;

  return element;
};
