// src/api/getAllHabits.ts
import axios from "axios";

interface Habit {
  _id: string;
  title: string;
  description: string;
  icon: string;
  frequency: string;
  streak: number;
}

export async function getAllHabitsOfAUser(userId: string) {
  const res = await axios.get(
    `https://trackify-bp23.onrender.com/api/v1/users/${userId}/habits`,
    {
      withCredentials: true,
    },
  );

  return (res.data as { data: Habit[] }).data;
}
