// RegisterForm.tsx
import {
  MdMailOutline,
  MdOutlineLock,
  MdOutlineLockReset,
  MdOutlineLogin,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import TextInput from "../../ui/TextInput";
import FormError from "../../ui/FormError";

export default function RegisterForm() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-2">
      <div className="w-[30rem] flex-1 rounded-lg bg-white shadow-md">
        <div className="grid h-full grid-rows-[auto_1fr_auto] space-y-2 p-6 pt-10 pb-6">
          <h1 className="text-textPrimary text-center text-4xl font-bold tracking-wide">
            Create an Account
          </h1>
          <form className="flex flex-col gap-6" action="#">
            <TextInput
              id="fullName"
              label="Full Name"
              placeholder="John Doe"
              icon={<HiOutlineUserCircle />}
            />
            <TextInput
              id="email"
              label="Email address"
              placeholder="you@example.com"
              icon={<MdMailOutline />}
            />
            <TextInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={<MdOutlineLock />}
            />
            <TextInput
              id="passwordConfirm"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={<MdOutlineLockReset />}
              required
            />
            <FormError message="Incorrect email or password please try again." />
            <div className="mt-auto pb-5">
              <button
                type="submit"
                className="bg-textSecondary hover:bg-primary-700 focus:ring-primary-300 text-background text-md flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium focus:ring-4 focus:outline-none"
              >
                <MdOutlineLogin />
                Sign up
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
