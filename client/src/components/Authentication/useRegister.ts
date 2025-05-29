import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import toast from "react-hot-toast";
import { signup } from "../../api/signup";

export function useRegister() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: register, isPending } = useMutation({
    mutationFn: ({
      email,
      password,
      name,
      passwordConfirm,
    }: {
      email: string;
      password: string;
      passwordConfirm: string;
      name: string;
    }) => signup({ email, password, name, passwordConfirm }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/app/dashboard");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isPending };
}
