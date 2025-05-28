import axios from "axios";

export async function createHabit({
  title,
  frequency,
  description,
  icon,
}: {
  title: string;
  frequency: string;
  description: string;
  icon: string;
}) {
  const response = await axios.post(
    "https://trackify-bp23.onrender.com/api/v1/habits/",
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
