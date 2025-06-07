import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import SpinnerFullPage from "./pages/SpinnerFullPage";

import AppLayout from "./components/Layouts/AppLayout";
import PublicLayout from "./components/Layouts/PublicLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Hero from "./pages/Hero";

import { Toaster } from "react-hot-toast";
import DarkModeProvider from "./context/DarkModeContext";
import Profile from "./pages/Profile";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Features = lazy(() => import("./pages/Features"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Habits = lazy(() => import("./pages/Habits"));
const HabitDetails = lazy(() => import("./pages/HabitDetails"));
const NotYetImplemented = lazy(() => import("./ui/NotYetImplemented"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));

function App() {
  const queryClient = new QueryClient();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* Public routes with PublicLayout */}
              <Route element={<PublicLayout />}>
                <Route index element={<Hero />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="features" element={<Features />} />
                <Route path="support" element={<NotYetImplemented />} />
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
                <Route path="habits" element={<Habits />} />
                <Route path="habit/:habitId" element={<HabitDetails />} />
                <Route path="profile" element={<Profile />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--background)",
              color: "var(--text-primary)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
