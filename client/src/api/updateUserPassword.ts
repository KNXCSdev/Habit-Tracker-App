// src/api/updatePassword.ts
import axios from "axios";

export async function updatePassword({
  passwordCurrent,
  password,
  passwordConfirm,
}: {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
}) {
  try {
    const response = await axios.patch(
      "https://trackify-bp23.onrender.com/api/v1/users/updatePassword",
      {
        passwordCurrent,
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
