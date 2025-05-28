import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router";
import { ICON_OPTIONS } from "../../config/iconOptions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface HabitCardProps {
  title: string;
  frequency: string;
  iconName: string;
  habitId: string;
}

export default function HabitCardMinimalistic({
  title,
  habitId,
  iconName,
  frequency,
}: HabitCardProps) {
  const SelectedIconComponent =
    ICON_OPTIONS.find((icon) => icon.name === iconName)?.icon ||
    CheckCircleIcon;

  return (
    <Link
      to={`/app/habit/${habitId}`}
      className="group bg-background block rounded-lg px-3 py-4 shadow-md transition hover:cursor-pointer hover:shadow-lg"
    >
      <div className="grid grid-cols-[0.3fr_1fr_0.3fr] items-start gap-4">
        <div className="bg-backgroundIcon flex h-full items-center justify-center rounded-lg">
          <SelectedIconComponent
            style={{ height: 40, width: 40 }}
            className="text-textTertiary"
          />
        </div>
        <div>
          <h3 className="text-textPrimary mb-2 text-xl font-semibold">
            {title}
          </h3>
          <p className="text-textAccent text-sm">
            {frequency.charAt(0).toUpperCase() + frequency.slice(1)} Routine
          </p>
        </div>
        <div className="text-textAccent group-hover:text-background group-hover:bg-textSecondary flex h-full items-center justify-center rounded-lg text-5xl font-light duration-400">
          <GoChevronRight />
        </div>
      </div>
    </Link>
  );
}
