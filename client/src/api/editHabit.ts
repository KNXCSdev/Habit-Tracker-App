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
  try {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "An unknown error occurred";

    throw new Error(message);
  }
}
