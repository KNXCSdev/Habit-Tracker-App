import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import SpinnerFullPage from "./pages/SpinnerFullPage";
import Hero from "./pages/Hero";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={<SpinnerFullPage />}>
              <AppLayout />
            </Suspense>
          }
        >
          <Route index element={<Hero />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
