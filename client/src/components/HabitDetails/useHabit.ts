// src/features/Habits/useHabitById.ts
import { useQuery } from "@tanstack/react-query";
import { getHabit } from "../../api/getHabit";

export function useHabitById(habitId: string) {
  return useQuery({
    queryKey: ["habit", habitId],
    queryFn: () => getHabit(habitId),
    enabled: !!habitId,
  });
}
