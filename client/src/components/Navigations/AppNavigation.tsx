import {
  HiOutlineMoon,
  HiOutlineArrowRightOnRectangle,
  HiOutlineSun,
} from "react-icons/hi2";
import { NavLink } from "react-router";
import { useLogout } from "../Authentication/useLogout";
import { MoonLoader } from "react-spinners";
import { useDarkMode } from "../../context/DarkModeContext";

export default function AppNavigation() {
  const { isPending, logoutUser } = useLogout();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="bg-backgroundPrimary flex items-center justify-start px-4 py-1 shadow-sm sm:justify-between md:px-8 lg:px-16">
      <div className="hidden items-center gap-2 text-4xl font-semibold sm:flex">
        <NavLink to="/app">
          <img
            src="/logoTrack.png"
            alt="Track Habit Logo"
            width={180}
            className="h-[3rem] w-[11rem] object-cover"
          />
        </NavLink>
      </div>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="habits"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            Habits
          </NavLink>
        </li>
        <li>
          <button
            className={`hover:text-textSecondary flex cursor-pointer items-center text-2xl font-medium text-blue-800 transition-all hover:underline`}
            onClick={toggleDarkMode}
            aria-label="Sun icon for dark mode toggle"
          >
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </li>
        <li>
          <button
            className={`hover:text-textSecondary flex cursor-pointer items-center text-2xl font-medium text-blue-800 transition-all hover:underline`}
            onClick={() => logoutUser()}
            aria-label="Logout button"
          >
            {isPending ? (
              <MoonLoader size={24} color="blue" />
            ) : (
              <HiOutlineArrowRightOnRectangle />
            )}
          </button>
        </li>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            <img
              src="/default.jpg"
              alt="Profile picture"
              className="block aspect-square w-[2rem] rounded-full object-cover object-[center_center] outline-2"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
