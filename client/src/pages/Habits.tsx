import { HiOutlinePlusCircle } from "react-icons/hi";

import HabitCardMinimalistic from "../components/Habits/HabitCardMinimalistic";

export default function Habits() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">My Habits</h1>

        <button className="bg-textSecondary text-background hover:bg-primary-700 focus:ring-primary-300 flex items-center gap-2 rounded-full px-8 py-3 font-medium transition-all hover:cursor-pointer focus:ring-4 focus:outline-none">
          <span className="text-xl">
            <HiOutlinePlusCircle />
          </span>
          New Habit
        </button>
      </header>

      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HabitCardMinimalistic
            title="Morning Meditation"
            frequency="Daily Routine"
            image="/hero.png"
            habitId=""
          />
          <HabitCardMinimalistic
            title="Daily Reading"
            frequency="Weekly Routine"
            image="/hero.png"
            habitId=""
          />
          <HabitCardMinimalistic
            title="Evening Journal"
            frequency="Monthly Routine"
            image="/hero.png"
            habitId=""
          />
        </div>
      </section>
    </div>
  );
}
