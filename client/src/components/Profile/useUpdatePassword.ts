// src/hooks/user/useUpdatePassword.ts
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePassword } from "../../api/updateUserPassword";

export function useUpdatePassword() {
  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast.success("Password updated successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update password.");
    },
  });

  return { update, isUpdating };
}
