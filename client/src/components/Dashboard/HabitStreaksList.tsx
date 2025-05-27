import { HiOutlinePlusCircle } from "react-icons/hi";
import HabitCard from "./HabitCard";
import StreakCard from "../../ui/StreakCard";
import { useState } from "react";
import HabitForm from "../Habits/HabitForm";

export default function HabitStreaksList() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleIsOpenModal = (value: boolean) => {
    setIsOpenModal(value);
  };

  return (
    <>
      <div className="flex flex-col gap-12">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Welcome back, Sarah!</h1>
            <p className="text-textAccent">
              Let's keep those good habits going
            </p>
          </div>
          <button
            onClick={() => setIsOpenModal(!isOpenModal)}
            className="bg-textSecondary text-background hover:bg-primary-700 focus:ring-primary-300 flex items-center gap-2 rounded-lg px-8 py-3 font-medium transition-all hover:cursor-pointer focus:ring-4 focus:outline-none"
          >
            <span className="text-xl">
              <HiOutlinePlusCircle />
            </span>
            Add New Habit
          </button>
        </header>

        <section className="flex flex-col gap-8">
          <header>
            <h2 className="text-textPrimary text-2xl font-medium">
              Your Latest Habits
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HabitCard
              title="Morning Meditation"
              description="5 minutes of mindfulness to start your day"
              image="/hero.png"
            />
            <HabitCard
              title="Daily Reading"
              description="Read 10 pages from a personal growth book"
              image="/hero.png"
            />
            <HabitCard
              title="Evening Journal"
              description="Reflect on your day with 3 things you're grateful for"
              image="/hero.png"
            />
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <header>
            <h2 className="text-textPrimary text-2xl font-medium">Streaks</h2>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StreakCard title="Meditation " />
            <StreakCard title="Journaling " />
            <StreakCard title="Running " />
          </div>
        </section>
      </div>
      {isOpenModal && <HabitForm handleIsOpenModal={handleIsOpenModal} />}
    </>
  );
}
