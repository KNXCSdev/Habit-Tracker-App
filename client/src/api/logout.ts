// api/logout.ts
import axios from "axios";

export async function logout() {
  try {
    const response = await axios.get(
      "https://trackify-bp23.onrender.com/api/v1/users/logout",
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
