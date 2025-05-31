// src/hooks/user/useUpdateUser.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../../api/updateUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success("User profile updated!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update profile.");
    },
  });

  return { update, isUpdating };
}
