import { useNavigate } from "react-router-dom";

import { useEffect, type JSX } from "react";
import { useUser } from "../components/Authentication/useUser";
import SpinnerFullPage from "./SpinnerFullPage";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, isPending, isError } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) navigate("/login");
  }, [isError, navigate]);

  if (isPending) return <SpinnerFullPage />;

  return user ? children : null;
}

export default ProtectedRoute;
