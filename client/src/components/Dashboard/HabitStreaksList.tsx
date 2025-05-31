import { HiOutlinePlusCircle } from "react-icons/hi";
import HabitCard from "./HabitCard";
import StreakCard from "../../ui/StreakCard";
import { useState } from "react";
import HabitForm from "../Habits/HabitForm";
import { useUser } from "../Authentication/useUser";

import { useHabits } from "./useHabits";
import Spinner from "../../ui/Spinner";

export default function HabitStreaksList() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { user, isPending } = useUser();
  const { habits, isPending: isPendingHabits } = useHabits();

  const handleIsOpenModal = (value: boolean) => {
    setIsOpenModal(value);
  };

  if (isPending || isPendingHabits) return <Spinner />;

  return (
    <>
      <div className="flex flex-col gap-12">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-textPrimary text-4xl font-bold">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-textAccent">
              Let's keep those good habits going
            </p>
          </div>
          <button
            onClick={() => setIsOpenModal(!isOpenModal)}
            aria-label="Add New Habit"
            className="bg-textSecondary text-textWhite hover:bg-primary-700 focus:ring-primary-300 flex items-center gap-2 rounded-lg px-8 py-3 font-medium transition-all hover:cursor-pointer focus:ring-4 focus:outline-none"
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
            {habits
              ?.slice(-3)
              .reverse()
              .map((habit) => {
                return (
                  <HabitCard
                    key={habit._id}
                    title={habit.title}
                    description={habit.description}
                    habitId={habit._id}
                    iconName={habit.icon}
                  />
                );
              })}
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <header>
            <h2 className="text-textPrimary text-2xl font-medium">
              Your Latest Streaks
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {habits
              ?.slice()
              .sort((a, b) => b.streak - a.streak)
              .slice(0, 3)
              .map((habit) => {
                if (habit.streak === 0) return;

                return (
                  <StreakCard
                    key={habit._id}
                    streak={habit.streak}
                    habitId={habit._id}
                    title={habit.title}
                  />
                );
              })}
          </div>
        </section>
      </div>
      {isOpenModal && <HabitForm handleIsOpenModal={handleIsOpenModal} />}
    </>
  );
}
