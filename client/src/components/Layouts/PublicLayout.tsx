import { Outlet } from "react-router";

import Navigation from "../Navigations/Navigation";
import Footer from "../Footer";

function PublicLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Navigation />
      <main className="mx-auto flex w-full max-w-[85rem] flex-1 flex-col gap-10 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
