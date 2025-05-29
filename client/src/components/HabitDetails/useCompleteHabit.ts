import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { markHabitAsComplete } from "../../api/markHabitAsComplete";

export function useMarkHabitComplete() {
  const queryClient = useQueryClient();

  const { mutate: markComplete, isPending: isCompleting } = useMutation({
    mutationFn: (habitId: string) => markHabitAsComplete(habitId),
    onSuccess: (_, habitId) => {
      toast.success("Habit marked as complete!");
      queryClient.invalidateQueries({ queryKey: ["habit", habitId] });
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
    onError: () => {
      toast.error("Could not mark as complete. Please try again.");
    },
  });

  return { markComplete, isCompleting };
}
