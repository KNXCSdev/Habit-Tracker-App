import { HiArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineAutoGraph, MdOutlineChecklist } from "react-icons/md";
import { Link } from "react-router";

export default function Features() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="text-textPrimary flex h-full flex-col items-center justify-center rounded-3xl bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/photoFeatures.webp')] bg-cover text-center">
        <h2 className="text-textWhite mb-6 text-6xl font-medium">
          Build Better Habits,<br></br> Achive Your Goals
        </h2>
        <p className="mb-12 text-xl leading-8 font-light tracking-wider text-gray-300">
          Trackify helps you create and maintain positive habits with
          personalized <br />
          plans, progress tracking and motivational tools designed for your
          success.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            to="/app"
            className="bg-textSecondary rounded-md border-none px-12 py-3 text-xl font-medium text-white transition-all hover:cursor-pointer hover:bg-blue-700"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
      <div className="px-4 py-16">
        <h2 className="text-textPrimary mb-8 text-center text-3xl font-semibold">
          Discover Our Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-background flex flex-col items-center justify-center gap-2 rounded-lg p-6 px-16 shadow-md">
            {" "}
            <div className="bg-backgroundIcon text-textSecondary/80 mb-2 flex items-center justify-center rounded-full p-4 text-5xl">
              <MdOutlineChecklist />
            </div>
            <h3 className="text-textPrimary mb-4 text-xl font-semibold">
              Personalized Plans
            </h3>
            <p className="text-textAccent mb-4 text-center">
              Tailor your habit-building hourney with plans customized to your
              specific goals and preferences.
            </p>
          </div>
          <div className="bg-background flex flex-col items-center justify-center gap-2 rounded-lg p-6 px-16 shadow-md">
            <div className="bg-backgroundIcon text-textSecondary/80 mb-2 flex items-center justify-center rounded-full p-4 text-5xl">
              {" "}
              <HiArrowTrendingUp />
            </div>
            <h3 className="text-textPrimary mb-4 text-xl font-semibold">
              Progress Tracking
            </h3>
            <p className="text-textAccent mb-4 text-center">
              Visualize your achievements and stay motivated with insightful
              charts and statistics.
            </p>
          </div>
          <div className="bg-background flex flex-col items-center justify-center gap-2 rounded-lg p-6 px-16 shadow-md md:col-span-2 lg:col-span-1">
            <div className="bg-backgroundIcon text-textSecondary/80 mb-2 flex items-center justify-center rounded-full p-4 text-5xl">
              <MdOutlineAutoGraph />
            </div>
            <h3 className="text-textPrimary mb-4 text-xl font-semibold">
              Detailed Analytics
            </h3>
            <p className="text-textAccent mb-4 text-center">
              Gain deeper understanding of your patterens and optimize your
              routines for better results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
