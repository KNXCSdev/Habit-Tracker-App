import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import SpinnerFullPage from "./pages/SpinnerFullPage";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AppLayout from "./components/Layouts/AppLayout";
import PublicLayout from "./components/Layouts/PublicLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          {/* Public routes with PublicLayout */}
          <Route element={<PublicLayout />}>
            <Route index element={<Hero />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Protected routes with AppLayout */}
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />{" "}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* Optional 404 route */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
