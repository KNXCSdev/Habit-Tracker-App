import { NavLink, useLocation } from "react-router";
import { useUser } from "../Authentication/useUser";

export default function Navigation() {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";
  const { user } = useUser();

  return (

    <nav className="bg-backgroundPrimary flex items-center justify-between px-4 py-2 shadow-sm md:px-8 lg:px-16">
      <div className="flex items-center gap-1 text-4xl font-semibold lg:gap-2">
        <NavLink to="/">
          <img
            src="/logoTrack.png"
            width={180}
            alt="Track Habit Logo"
            className="h-[3rem] w-[11rem] object-cover"
          />
        </NavLink>
      </div>
      {!isLoginPage ? (
        <>

          <ul className="flex items-center space-x-8 lg:space-x-12">
            <li>
              <NavLink
                to="/features"
                className="hover:text-textSecondary text-textAccent text-md transition-all hover:underline"
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/support"
                className="hover:text-textSecondary text-textAccent text-md hover:underline"
              >
                Support
              </NavLink>
            </li>

            <li>
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/app"
                  className="bg-textSecondary rounded-lg border border-none px-6 py-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-blue-700"
                >
                  Get Started
                </NavLink>
                {!user && (
                  <NavLink
                    to="/login"
                    className="bg-backgroundIcon text-textAccent hover:bg-textAccent/10 rounded-lg border border-gray-600 px-6 py-2 font-semibold hover:cursor-pointer"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
}
