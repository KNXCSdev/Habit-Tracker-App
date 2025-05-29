import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editHabit } from "../../api/editHabit"; // adjust path as needed

export function useEditHabit() {
  const queryClient = useQueryClient();

  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: editHabit,
    onSuccess: () => {
      toast.success("Habit updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["habit"] });
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
    onError: () => {
      toast.error("Failed to update habit. Please try again.");
    },
  });

  return { edit, isEditing };
}
