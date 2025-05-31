// src/features/auth/useUser.ts
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/getUser";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  return {
    user: data,
    isPending: isLoading,
    isLoggedIn: !!data,
  };
}
