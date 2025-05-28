// src/features/auth/useUser.ts
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/getUser";

export function useUser() {
  const {
    data,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  return {
    user: isError ? null : data,
    isPending,
    isError,
  };
}
