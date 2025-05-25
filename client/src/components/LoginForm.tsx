import { CiLock } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineErrorOutline, MdOutlineLogin } from "react-icons/md";

export default function LoginForm() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="w-[30rem] flex-1 rounded-lg bg-white shadow-md">
        <div className="grid h-full grid-rows-[auto_1fr_auto] space-y-2 p-6 pt-10 pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-textPrimary text-center text-4xl leading-tight font-bold tracking-wide">
              Welcome Back!
            </h1>
            <p className="text-textAccent mb-10 text-center tracking-wider">
              Login to continue your habit journey.
            </p>
          </div>
          <form className="flex flex-col gap-6" action="#">
            <div>
              <label
                htmlFor="input-group-1"
                className="text-textPrimary mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl">
                  <IoMailOutline />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="text-textPrimary block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-textPrimary mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl">
                  <CiLock />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="text-textPrimary block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 focus:border-blue-500 focus:ring-blue-500"
                  required={true}
                />
              </div>
            </div>
            <div className="text-error flex items-center gap-2 rounded-lg bg-red-100 px-4 py-3">
              <span className="text-2xl">
                <MdOutlineErrorOutline />{" "}
              </span>
              <p className="text-sm font-medium">
                Incorrect email or password please try again.
              </p>
            </div>
            <div className="mt-auto">
              <button
                type="submit"
                className="bg-textSecondary hover:bg-primary-700 focus:ring-primary-300 text-background text-md flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-center font-medium focus:ring-4 focus:outline-none"
              >
                <span>
                  <MdOutlineLogin />
                </span>
                Log in
              </button>
            </div>
            <div></div>
          </form>
          <p className="text-textAccent mt-auto block text-center text-sm font-light">
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
