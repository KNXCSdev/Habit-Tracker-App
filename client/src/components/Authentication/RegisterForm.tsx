import { useState } from "react";
import {
  MdMailOutline,
  MdOutlineLock,
  MdOutlineLockReset,
  MdOutlineLogin,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import TextInput from "../../ui/TextInput";
import FormError from "../../ui/FormError";
import { useRegister } from "./useRegister";

export default function RegisterForm() {
  const { register, isPending } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      setName("");
      setPassword("");
      setEmail("");
      setPasswordConfirm("");
      return;
    }

    register(
      { name, email, password, passwordConfirm },
      {
        onError: (err: any) => {
          setError(err?.response?.data?.message || "Signup failed.");
        },
      },
    );
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-2">
      <div className="w-[30rem] flex-1 rounded-lg bg-white shadow-md">
        <div className="grid h-full grid-rows-[auto_1fr_auto] space-y-2 p-6 pt-10 pb-6">
          <h1 className="text-textPrimary text-center text-4xl font-bold tracking-wide">
            Create an Account
          </h1>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextInput
              id="fullName"
              label="Full Name"
              placeholder="John Doe"
              icon={<HiOutlineUserCircle />}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              id="email"
              label="Email address"
              placeholder="you@example.com"
              icon={<MdMailOutline />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={<MdOutlineLock />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextInput
              id="passwordConfirm"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={<MdOutlineLockReset />}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            {error && <FormError message={error} />}
            <div className="mt-auto pb-5">
              <button
                type="submit"
                disabled={isPending}
                className="bg-textSecondary hover:bg-primary-700 focus:ring-primary-300 text-background text-md flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium focus:ring-4 focus:outline-none"
              >
                <MdOutlineLogin />
                {isPending ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
          <p className="text-textAccent mt-auto text-center text-sm font-light">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-textSecondary font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
