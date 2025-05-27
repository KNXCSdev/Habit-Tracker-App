// src/pages/ProtectedRoute.tsx
import { useNavigate } from "react-router-dom";
import { useEffect, type JSX } from "react";
import { useUser } from "../components/Authentication/useUser";
import SpinnerFullPage from "./SpinnerFullPage";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useUser();

  useEffect(() => {
    if (isError) navigate("/login");
  }, [isError, navigate]);

  if (isLoading) return <SpinnerFullPage />;

  return user ? children : null;
}

export default ProtectedRoute;
