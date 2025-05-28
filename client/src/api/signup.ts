import axios from "axios";

export async function signup({
  email,
  password,
  name,
  passwordConfirm,
}: {
  name: string;
  passwordConfirm: string;
  email: string;
  password: string;
}) {
  const response = await axios.post(
    "https://trackify-bp23.onrender.com/api/v1/users/signup",
    {
      name,
      email,
      password,
      passwordConfirm,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}
