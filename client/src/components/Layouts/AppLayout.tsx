import { Outlet } from "react-router";

import Footer from "../Footer";
import AppNavigation from "../Navigations/AppNavigation";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <AppNavigation />
      <main className="container mx-auto flex w-full flex-1 flex-col px-2 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
