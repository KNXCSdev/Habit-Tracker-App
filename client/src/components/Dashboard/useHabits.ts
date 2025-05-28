import { useQuery } from "@tanstack/react-query";
import { getAllHabitsOfAUser } from "../../api/getAllHabitsOfAUser";
import { useUser } from "../Authentication/useUser";

export function useHabits() {
  const { user } = useUser();

  const userId = user?._id;

  const { data: habits, isLoading: isPending } = useQuery({
    queryKey: ["habits", userId],
    queryFn: async () => {
      if (!userId) throw new Error("User not loaded");
      return getAllHabitsOfAUser(userId);
    },
    enabled: !!userId,
    retry: false,
  });

  return { habits, isPending };
}
