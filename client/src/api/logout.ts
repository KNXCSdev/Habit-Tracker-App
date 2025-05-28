// api/logout.ts
import axios from "axios";

export async function logout() {
  const response = await axios.get(
    "https://trackify-bp23.onrender.com/api/v1/users/logout",
    {
      withCredentials: true,
    },
  );

  return response.data;
}
