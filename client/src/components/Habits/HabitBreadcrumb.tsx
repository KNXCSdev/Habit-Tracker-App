import { GoChevronRight } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router";

export default function HabitBreadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `text-textAccent hover:text-textSecondary inline-flex items-center text-sm font-medium ${
                isActive ? "text-textSecondary" : "text-textAccent"
              }`
            }
          >
            <HiOutlineHome className="me-2 h-5 w-5" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <div className="flex items-center">
            <GoChevronRight className="text-textTertiary mx-1 h-5 w-5" />
            <NavLink
              to="/app/habits"
              className="text-textAccent hover:text-textSecondary inline-flex items-center text-sm font-medium"
            >
              Habits
            </NavLink>
          </div>
        </li>{" "}
        <li>
          <div className="flex items-center">
            <GoChevronRight className="text-textTertiary mx-1 h-5 w-5" />
            <div
              className={`text-textSecondary hover:text-textSecondary inline-flex items-center text-sm font-medium`}
            >
              Morning Run
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
}
