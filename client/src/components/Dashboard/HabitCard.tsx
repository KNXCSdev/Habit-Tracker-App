import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";
import { ICON_OPTIONS } from "../../config/iconOptions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface HabitCardProps {
  title: string;
  description: string;
  iconName: string;
  habitId: string;
}

export default function HabitCard({
  title,
  description,
  iconName,
  habitId,
}: HabitCardProps) {
  const SelectedIconComponent =
    ICON_OPTIONS.find((icon) => icon.name === iconName)?.icon ||
    CheckCircleIcon;

  return (
    <div className="bg-background rounded-lg px-6 py-6 shadow-md">
      <div className="grid grid-cols-[1fr_0.3fr] items-start gap-4">
        <div>
          <h1 className="text-textPrimary mb-2 text-xl font-semibold">
            {title}
          </h1>
          <p className="text-textAccent text-md mb-1">{description}&nbsp;</p>
        </div>
        <div className="bg-backgroundIcon flex h-full items-center justify-center rounded-lg">
          <SelectedIconComponent
            style={{ height: 40, width: 40 }}
            className="text-textTertiary"
          />
        </div>
      </div>
      <Link
        className="text-textAccent hover:text-primary bg-backgroundIcon hover:text-background hover:bg-textSecondary mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all"
        to={`/app/habit/${habitId}`}
      >
        View Details <HiArrowRight />
      </Link>
    </div>
  );
}
