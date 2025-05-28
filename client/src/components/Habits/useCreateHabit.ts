import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createHabit } from "../../api/createHabit";

export function useCreateHabit() {
  const queryClient = useQueryClient();

  const { mutate: addHabit, isPending: isCreating } = useMutation({
    mutationFn: ({
      title,
      frequency,
      description,
      icon,
    }: {
      title: string;
      frequency: string;
      description: string;
      icon: string;
    }) => createHabit({ title, frequency, description, icon }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["habits"] });
      toast.success("Successfully added a habit");
    },
    onError: () => {
      toast.error("Provided habit details are incorrect. Try again");
    },
  });

  return { addHabit, isCreating };
}
