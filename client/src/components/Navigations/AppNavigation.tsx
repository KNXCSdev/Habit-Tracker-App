import { NavLink } from "react-router";

export default function AppNavigation() {
  return (
    <nav className="bg-backgroundPrimary flex items-center justify-between px-16 py-1 shadow-sm">
      <div className="flex items-center gap-2 text-4xl font-semibold">
        <a href="/">
          <img
            src="/logoTrack.png"
            width={180}
            className="h-[3rem] w-[11rem] object-cover"
          />
        </a>
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
            to="streaks"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            Streaks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `hover:text-textSecondary text-sm font-medium transition-all hover:underline ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            Settings
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
            <img src="/hero.png" alt="Profile picture" width={24} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
