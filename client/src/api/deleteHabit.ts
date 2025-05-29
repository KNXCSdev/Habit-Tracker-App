import axios from "axios";

export async function deleteHabit(habitId: string) {
  try {
    const res = await axios.delete(
      `https://trackify-bp23.onrender.com/api/v1/habits/${habitId}`,
      { withCredentials: true },
    );
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (err: any) {
    throw new Error("Failed to delete habit");
  }
}
