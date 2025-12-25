import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = userAuth();

  if (!auth) return null;

  const { session, loading } = auth;

  if (loading) return null;

  if (!session) {
    return <Navigate to="/auth/signin" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
