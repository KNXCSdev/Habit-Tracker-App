import { Outlet } from "react-router";

import Footer from "../Footer";
import AppNavigation from "../Navigations/AppNavigation";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <AppNavigation />
      <main className="mx-auto flex w-full max-w-[85rem] flex-1 flex-col py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
