import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { useEffect, type JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
