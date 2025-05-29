import axios from "axios";
import { formatISO } from "date-fns";

export async function markHabitAsComplete(habitId: string) {
  try {
    const today = formatISO(new Date(), { representation: "date" }); // "YYYY-MM-DD"
    const res = await axios.patch(
      `https://trackify-bp23.onrender.com/api/v1/habits/${habitId}/complete`,
      { date: today },
      { withCredentials: true },
    );
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "An unknown error occurred";

    throw new Error(message);
  }
}
