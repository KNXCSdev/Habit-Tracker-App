import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
}

export async function getUser() {
  const res = await axios.get(
    "https://trackify-bp23.onrender.com/api/v1/users/me",
    {
      withCredentials: true,
    },
  );

  return (res.data as { data: User }).data;
}
