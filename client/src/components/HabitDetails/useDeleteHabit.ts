import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { deleteHabit as deleteHabitApi } from "../../api/deleteHabit";

export function useDeleteHabit() {
  const queryClient = useQueryClient();

  const { mutate: deleteHabit, isPending: isDeleting } = useMutation({
    mutationFn: (habitId: string) => deleteHabitApi(habitId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] });
      toast.success("Habit successfully deleted");
    },
    onError: () => {
      toast.error("There was a problem deleting a habit. Try again later!");
    },
  });

  return { deleteHabit, isDeleting };
}
