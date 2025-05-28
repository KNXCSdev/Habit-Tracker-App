import { useState } from "react";
import { MdMailOutline, MdLockOutline, MdOutlineLogin } from "react-icons/md";
import TextInput from "../../ui/TextInput";
import FormError from "../../ui/FormError";
import { useLogin } from "./useLogin";
import { Link } from "react-router";
import { PulseLoader } from "react-spinners";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setFormError("");

    if (!email || !password) {
      setFormError("Please fill out both email and password.");
      return;
    }

    login({ email, password });
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="w-[30rem] flex-1 rounded-lg bg-white shadow-md">
        <div className="grid h-full grid-rows-[auto_1fr_auto] space-y-2 p-6 pt-10 pb-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-textPrimary text-center text-4xl font-bold tracking-wide">
              Welcome Back!
            </h1>
            <p className="text-textAccent mb-10 text-center tracking-wider">
              Login to continue your habit journey.
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextInput
              id="email"
              label="Email address"
              placeholder="you@example.com"
              icon={<MdMailOutline />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<MdLockOutline />}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {formError && <FormError message={formError} />}

            <div className="mt-auto pb-5">
              <button
                type="submit"
                disabled={isPending}
                className="bg-textSecondary focus:ring-primary-300 text-background text-md flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium hover:bg-blue-700 focus:ring-4 focus:outline-none disabled:opacity-50"
              >
                {isPending ? (
                  <PulseLoader size={20} color="#0f38ff" />
                ) : (
                  <>
                    <MdOutlineLogin /> Log in
                  </>
                )}
              </button>
            </div>
          </form>
          <p className="text-textAccent mt-auto text-center text-sm font-light">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="text-textSecondary font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
