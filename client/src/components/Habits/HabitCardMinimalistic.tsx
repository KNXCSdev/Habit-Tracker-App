import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router";

interface HabitCardProps {
  title: string;
  frequency: string;
  image: string;
  habitId: string; // Make sure to pass habitId to build the URL
}

export default function HabitCardMinimalistic({
  title,
  frequency,
  image,
  habitId,
}: HabitCardProps) {
  return (
    <Link
      to={`/app/habit/${habitId}`}
      className="group block rounded-lg bg-white px-3 py-4 shadow-md transition hover:cursor-pointer hover:shadow-lg"
    >
      <div className="grid grid-cols-[0.3fr_1fr_0.3fr] items-start gap-4">
        <div className="bg-backgroundIcon flex h-full items-center justify-center rounded-lg">
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
        <div>
          <h3 className="text-textPrimary mb-2 text-xl font-semibold">
            {title}
          </h3>
          <p className="text-textAccent text-sm">{frequency}</p>
        </div>
        <div className="text-textAccent group-hover:text-background group-hover:bg-textSecondary flex h-full items-center justify-center rounded-lg text-5xl font-light duration-400">
          <GoChevronRight />
        </div>
      </div>
    </Link>
  );
}
