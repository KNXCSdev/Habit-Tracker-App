import { NavLink } from "react-router";

export default function AppNavigation() {
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
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            <img
              src="/hero.png"
              alt="Profile picture"
              className="block aspect-square w-[2rem] rounded-full object-cover object-[center_center] outline-2"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
