// inside a component or custom hook
import { useQuery } from "@tanstack/react-query";

import { getAllHabitsOfAUser } from "../../api/getAllHabitsOfAUser";
import { useUser } from "../Authentication/useUser";

export function useHabits() {
  const { user } = useUser();

  const { data: habits, isLoading: isPending } = useQuery({
    queryKey: ["habits", user?._id],
    queryFn: () => getAllHabitsOfAUser(user!._id),
    enabled: !!user, // only run if user is defined
    retry: false,
  });

  return { habits, isPending };
}
