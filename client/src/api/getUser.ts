import axios from "axios";

export async function getUser() {
  const res = await axios.get(
    "https://trackify-bp23.onrender.com/api/v1/users/me",
    {
      withCredentials: true, // ✅ required to send cookie
    },
  );
  return res.data.data.user;
}
