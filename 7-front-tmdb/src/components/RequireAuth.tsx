// src/components/RequireAuth.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
