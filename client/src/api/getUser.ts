import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
}

export async function getUser() {
  try {
    const res = await axios.get(
      "https://trackify-bp23.onrender.com/api/v1/users/me",
      {
        withCredentials: true,
      },
    );

    return (res.data as { data: User }).data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.response?.status === 401) {
      // Not logged in — treat as not an error
      console.clear();
    }

    const message =
      err.response?.data?.message || err.message || "An unknown error occurred";
    throw new Error(message);
  }
}
