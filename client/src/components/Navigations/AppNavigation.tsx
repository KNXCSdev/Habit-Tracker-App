import { HiOutlineMoon, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { NavLink } from "react-router";
import { useLogout } from "../Authentication/useLogout";
import { MoonLoader } from "react-spinners";

export default function AppNavigation() {
  const { isPending, logoutUser } = useLogout();

  return (
    <nav className="bg-backgroundPrimary flex items-center justify-between px-16 py-1 shadow-sm">
      <div className="flex items-center gap-2 text-4xl font-semibold">
        <NavLink to="/">
          <img
            src="/logoTrack.png"
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
          >
            <HiOutlineMoon />
          </button>
        </li>
        <li>
          <button
            className={`hover:text-textSecondary flex cursor-pointer items-center text-2xl font-medium text-blue-800 transition-all hover:underline`}
            onClick={() => logoutUser()}
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
