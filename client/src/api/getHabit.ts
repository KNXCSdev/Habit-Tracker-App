// src/api/getAllHabits.ts
import axios from "axios";

interface Habit {
  _id: string;
  title: string;
  description: string;
  icon: string;
  frequency: "daily" | "monthly" | "weekly";
  streak: number;
  highestStreak: number;
  createdAt: string;
  completedDates: string[];
}

export async function getHabit(habitId: string) {
  try {
    const res = await axios.get(
      `https://trackify-bp23.onrender.com/api/v1/habits/${habitId}`,
      {
        withCredentials: true,
      },
    );

    return (res.data as { data: Habit }).data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "An unknown error occurred";

    throw new Error(message);
  }
}
