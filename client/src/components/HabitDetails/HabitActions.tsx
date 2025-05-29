import { HiOutlineCheckCircle, HiOutlineTrash, HiPencil } from "react-icons/hi";
import { isHabitCompleteForCurrentPeriod } from "../../utils/calculateCompletionRate";
import { useNavigate, useParams } from "react-router";
import { useDeleteHabit } from "./useDeleteHabit";
import { PulseLoader } from "react-spinners";
import { useMarkHabitComplete } from "./useCompleteHabit";

type HabitActionsProps = {
  completedDates: string[];
  frequency: string;
};

export default function HabitActions({
  completedDates,
  frequency,
}: HabitActionsProps) {
  const isDisabled = isHabitCompleteForCurrentPeriod(completedDates, frequency);
  const { habitId } = useParams();
  const { deleteHabit, isDeleting } = useDeleteHabit();
  const { markComplete, isCompleting } = useMarkHabitComplete();
  const navigate = useNavigate();

  function handleDelete(habitId: string) {
    deleteHabit(habitId!, {
      onSuccess: () => {
        navigate("/app/habits");
      },
    });
  }

  return (
    <div className="bg-background border-backgroundIcon rounded-lg border p-[1.6rem] px-6 py-6">
      <h6 className="text-textPrimary mb-2 self-end text-xl font-medium">
        Actions
      </h6>
      <div className="flex items-center gap-4">
        <button
          disabled={isDisabled || isCompleting}
          onClick={() => markComplete(habitId!)}
          className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all ${
            isDisabled
              ? "text-textAccent bg-backgroundIcon cursor-not-allowed"
              : "bg-textSecondary text-textWhite hover:bg-blue-800"
          }`}
        >
          <span>
            <HiOutlineCheckCircle />
          </span>
          {isCompleting ? (
            <PulseLoader size={10} color="#0f38ff" />
          ) : isDisabled ? (
            "Already Completed"
          ) : (
            "Mark as Complete"
          )}
        </button>
        <button className="text-textPrimary bg-backgroundIcon hover:bg-backgroundSecondary flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all">
          <span>
            <HiPencil />
          </span>
          Edit Habit
        </button>{" "}
        <button
          onClick={() => handleDelete(habitId!)}
          className="text-error bg-background hover:bg-error/20 flex w-[20rem] cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-all"
          disabled={isDeleting}
        >
          <span>
            <HiOutlineTrash />
          </span>
          {isDeleting ? (
            <PulseLoader size={10} color="#ff0000" />
          ) : (
            "Delete Habit"
          )}
        </button>
      </div>
    </div>
  );
}
