import { HiOutlinePlusCircle } from "react-icons/hi";
import HabitCardMinimalistic from "./HabitCardMinimalistic";
import HabitForm from "./HabitForm";
import { useState } from "react";

import { useHabits } from "../Dashboard/useHabits";

import Spinner from "../../ui/Spinner";
import EmptyCard from "../../ui/EmptyCard";
import { MdOutlineChecklist } from "react-icons/md";

export default function HabitsList() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { habits, isPending } = useHabits();

  if (isPending) return <Spinner />;

  const handleIsOpenModal = (value: boolean) => {
    setIsOpenModal(value);
  };

  return (
    <div className="flex flex-col gap-12">
      <header className="flex items-center justify-between">
        <h1 className="text-textPrimary text-4xl font-bold">My Habits</h1>

        <button
          onClick={() => setIsOpenModal(!isOpenModal)}
          aria-label="New Habit"
          className="bg-textSecondary text-textWhite hover:bg-primary-700 focus:ring-primary-300 flex items-center gap-2 rounded-full px-8 py-3 font-medium transition-all hover:cursor-pointer focus:ring-4 focus:outline-none"
        >
          <span className="text-xl">
            <HiOutlinePlusCircle />
          </span>
          New Habit
        </button>
      </header>

      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!habits || habits.length === 0 ? (
            <EmptyCard
              icon={<MdOutlineChecklist />}
              title="Start your Journey"
              description="It looks like you haven’t added any habits yet. ENTER Click on the button to add your first habit and start building a better you!"
            />
          ) : (
            habits?.map((habit) => {
              return (
                <HabitCardMinimalistic
                  key={habit._id}
                  title={habit.title}
                  frequency={habit.frequency}
                  iconName={habit.icon}
                  habitId={habit._id}
                />
              );
            })
          )}

          {isOpenModal && <HabitForm handleIsOpenModal={handleIsOpenModal} />}
        </div>
      </section>
    </div>
  );
}
