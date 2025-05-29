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
  try {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "An unknown error occurred";

    throw new Error(message);
  }
}
