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
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
