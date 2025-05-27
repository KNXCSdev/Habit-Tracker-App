// src/features/auth/useUser.ts
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/getUser";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false, // don't retry on failure
  });
}
