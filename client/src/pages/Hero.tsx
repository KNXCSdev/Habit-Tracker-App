import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="text-textPrimary flex h-full flex-col items-center justify-center rounded-3xl bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/hero.webp')] bg-cover bg-center text-center">
      <h1 className="text-textWhite mb-6 text-6xl font-medium">
        Build Better Habits,<br></br> One Day at a Time
      </h1>
      <p className="mb-12 text-xl leading-8 font-light tracking-wider text-gray-300">
        Transform your daily routine with our habit tracker. Set goals, track
        <br></br>
        progress, and achive lasting change.
      </p>
      <div className="flex items-center space-x-4">
        <Link
          to="/app"
          className="bg-textSecondary rounded-md border-none px-12 py-3 text-xl font-medium text-white transition-all hover:cursor-pointer hover:bg-blue-700"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="bg-background text-textAccent rounded-md border-none px-10 py-3 text-xl font-semibold hover:cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
