import { HiArrowRight } from "react-icons/hi";

interface HabitCardProps {
  title: string;
  description: string;
  image: string;
}

export default function HabitCard({
  title,
  description,
  image,
}: HabitCardProps) {
  return (
    <div className="rounded-lg bg-white px-6 py-6 shadow-md">
      <div className="grid grid-cols-[1fr_0.3fr] items-start gap-4">
        <div>
          <h2 className="text-textPrimary mb-2 text-2xl font-semibold">
            {title}
          </h2>
          <p className="text-textAccent text-md mb-1">{description}</p>
        </div>
        <div className="bg-backgroundIcon flex h-full items-center justify-center rounded-lg">
          <img src={image} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="bg-backgroundIcon mt-4 inline-flex w-fit rounded-lg px-4 py-2 font-medium">
        <a className="text-textAccent hover:text-primary flex cursor-pointer items-center gap-2 transition">
          View Details <HiArrowRight />
        </a>
      </div>
    </div>
  );
}
