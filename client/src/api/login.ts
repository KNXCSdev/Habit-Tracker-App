import axios from "axios";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await axios.post(
    "https://trackify-bp23.onrender.com/api/v1/users/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}
