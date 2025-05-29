import axios from "axios";

export async function editHabit({
  habitId,
  title,
  frequency,
  description,
  icon,
}: {
  habitId: string;
  title: string;
  frequency: string;
  description: string;
  icon: string;
}) {
  const response = await axios.patch(
    `https://trackify-bp23.onrender.com/api/v1/habits/${habitId}`,
    {
      title,
      frequency,
      description,
      icon,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}
