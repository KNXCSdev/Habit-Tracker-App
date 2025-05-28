// hooks/auth/useLogout.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { logout } from "../../api/logout";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logoutUser, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });

      navigate("/login");
      toast.success("Logged out successfully");
    },
    onError: () => {
      toast.error("Logout failed. Try again.");
    },
  });

  return { logoutUser, isPending };
}
