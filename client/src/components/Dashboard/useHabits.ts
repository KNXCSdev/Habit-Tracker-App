// inside a component or custom hook
import { useQuery } from "@tanstack/react-query";
import { getAllHabitsOfAUser } from "../../api/GetAllHabitsOfAUser";
import { useUser } from "../Authentication/useUser";

export function useHabits() {
  const { user, isPending: isLoading } = useUser();

  const id = user!._id;

  const { data: habits, isLoading: isPending } = useQuery({
    queryKey: ["habits", id],
    queryFn: () => getAllHabitsOfAUser(id),
    enabled: !!user, // only run if user is defined
    retry: false,
  });

  if (isLoading) {
    return { habits: undefined, isPending: true };
  }

  return { habits, isPending };
}
