import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";

interface HabitCardProps {
  title: string;
}

export default function StreakCard({ title }: HabitCardProps) {
  return (
    <div className="rounded-lg bg-white px-6 py-6 shadow-md">
      <div className="grid grid-cols-[1fr_0.3fr] items-start gap-4">
        <div>
          <h2 className="text-textPrimary mb-2 text-2xl font-semibold">
            {title} Streak
          </h2>
          <p className="text-textAccent text-md mb-1">
            <span className="text-textSuccess font-medium">7 days</span> in a
            row
          </p>
        </div>
        <div className="bg-backgroundStreak flex h-full items-center justify-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="currentColor"
            className="text-textSuccess"
          >
            <path d="M220-400q0 63 28.5 118.5T328-189q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740-400q0-54-23-105.5T651-600q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420-714v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T220-400Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T551-306l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-128 86-246.5T480-840Z" />
          </svg>
        </div>
      </div>
      <Link
        className="text-textAccent hover:text-primary bg-backgroundIcon hover:text-background hover:bg-textSecondary mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all"
        to="/app/streak/:habitId"
      >
        View Details <HiArrowRight />
      </Link>
    </div>
  );
}
