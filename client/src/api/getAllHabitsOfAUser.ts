// src/api/getAllHabits.ts
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
}

export async function getAllHabitsOfAUser(userId: string) {
  const res = await axios.get(
    `https://trackify-bp23.onrender.com/api/v1/users/${userId}/habits`,
    {
      withCredentials: true,
    },
  );

  return res.data.data;
}
