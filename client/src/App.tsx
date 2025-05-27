import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import SpinnerFullPage from "./pages/SpinnerFullPage";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AppLayout from "./components/Layouts/AppLayout";
import PublicLayout from "./components/Layouts/PublicLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import PageNotFound from "./ui/PageNotFound";
import HabitDetails from "./pages/HabitDetails";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path="habits" element={<Habits />} />
              <Route path="habits/:habitId" element={<HabitDetails />} />
              {/* <Route path="profile" element={<Profile />} /> */}
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
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
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
