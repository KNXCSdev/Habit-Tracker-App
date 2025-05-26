// LoginForm.tsx
import { MdMailOutline, MdLockOutline, MdOutlineLogin } from "react-icons/md";
import TextInput from "../../ui/TextInput";
import FormError from "../../ui/FormError";

export default function LoginForm() {
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
          <form className="flex flex-col gap-6" action="#">
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
              placeholder="Enter your password"
              icon={<MdLockOutline />}
              required
            />
            <FormError message="Incorrect email or password please try again." />
            <div className="mt-auto pb-5">
              <button
                type="submit"
                className="bg-textSecondary hover:bg-primary-700 focus:ring-primary-300 text-background text-md flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium focus:ring-4 focus:outline-none"
              >
                <MdOutlineLogin />
                Log in
              </button>
            </div>
          </form>
          <p className="text-textAccent mt-auto text-center text-sm font-light">
            Don’t have an account yet?{" "}
            <a
              href="/register"
              className="text-textSecondary font-medium hover:underline"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
