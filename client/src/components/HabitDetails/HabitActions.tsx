import { HiOutlineCheckCircle, HiOutlineTrash, HiPencil } from "react-icons/hi";

export default function HabitActions() {
  return (
    <div className="bg-background rounded-lg border border-gray-200 p-[1.6rem] px-6 py-6">
      <h6 className="text-textPrimary mb-2 self-end text-xl font-medium">
        Actions
      </h6>
      <div className="flex items-center gap-4">
        <button className="text-background bg-textSecondary flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all hover:bg-blue-800">
          <span>
            <HiOutlineCheckCircle />
          </span>
          Mark as Complete
        </button>
        <button className="text-textPrimary bg-backgroundIcon flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all hover:bg-gray-200">
          <span>
            <HiPencil />
          </span>
          Edit Habit
        </button>{" "}
        <button className="text-error bg-background flex w-[20rem] cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all hover:bg-red-200">
          <span>
            <HiOutlineTrash />
          </span>
          Delete Habit
        </button>
      </div>
    </div>
  );
}
