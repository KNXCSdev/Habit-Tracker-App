import { HiFire, HiOutlineChartBar } from "react-icons/hi";
import HabitBreadcrumb from "./HabitBreadcrumb";
import HabitActions from "./HabitActions";
import { MdOutlineCalendarMonth } from "react-icons/md";
import HabitChart from "./HabitChart";
import { useHabitById } from "./useHabit";
import { useParams } from "react-router";
import { calculateCompletionRate } from "../../utils/calculateCompletionRate";
import Spinner from "../../ui/Spinner";
import { HiOutlineFire } from "react-icons/hi2";
import { useState } from "react";
import HabitForm from "../Habits/HabitForm";

export default function HabitStats() {
  const { habitId } = useParams<{ habitId: string }>();
  const { data: habit, isLoading } = useHabitById(habitId!);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (isLoading) return <Spinner />;
  if (!habit)
    return <p className="mt-20 text-center text-red-500">Habit not found.</p>;

  function handleIsEditModalOpen(bool: boolean) {
    setIsEditModalOpen(bool);
  }

  const completionRate = calculateCompletionRate(
    habit.completedDates,
    habit.frequency,
    habit.createdAt,
  );

  return (
    <>
      <div className="flex h-full flex-col gap-8">
        <HabitBreadcrumb />
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-textPrimary text-4xl font-semibold">
              {habit.title}
            </h1>
            <p className="text-textAccent font-light tracking-wide">
              Consistency is key to building lasting habits. Keep up the great
              work!
            </p>
          </div>
        </header>
        <div className="grid h-full grid-cols-4 grid-rows-[auto_1fr_auto] gap-6">
          <div className="bg-background border-backgroundIcon grid grid-cols-[5rem_1fr] grid-rows-[auto_auto] items-center gap-[0.4rem_1.6rem] rounded-lg border p-[1.6rem]">
            <div className="row-span-full flex h-full items-center justify-center rounded-full bg-blue-100 text-4xl text-blue-700">
              <HiOutlineChartBar />
            </div>
            <h5 className="text-textAccent text-md self-end font-medium">
              Completion Rate
            </h5>
            <p className="text-textPrimary self-start text-3xl font-semibold">
              {completionRate}%
            </p>
          </div>
          <div className="bg-background border-backgroundIcon grid grid-cols-[5rem_1fr] grid-rows-[auto_auto] items-center gap-[0.4rem_1.6rem] rounded-lg border p-[1.6rem]">
            <div className="row-span-full flex h-full items-center justify-center rounded-full bg-indigo-100 text-4xl text-indigo-700">
              <MdOutlineCalendarMonth />
            </div>
            <h5 className="text-textAccent text-md self-end font-medium">
              Frequency
            </h5>
            <p className="text-textPrimary self-start text-3xl font-semibold">
              {habit.frequency.charAt(0).toUpperCase() +
                habit.frequency.slice(1)}{" "}
            </p>
          </div>
          <div className="bg-background border-backgroundIcon grid grid-cols-[5rem_1fr] grid-rows-[auto_auto] items-center gap-[0.4rem_1.6rem] rounded-lg border p-[1.6rem]">
            <div className="row-span-full flex h-full items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
              <HiFire />
            </div>
            <h5 className="text-textAccent text-md self-end font-medium">
              Current Streak
            </h5>
            <p className="text-textPrimary self-start text-3xl font-semibold">
              {habit.streak}
              {habit.frequency === "daily"
                ? habit.streak > 1
                  ? " days"
                  : " day"
                : habit.frequency === "weekly"
                  ? habit.streak > 1
                    ? " weeks"
                    : " week"
                  : habit.streak > 1
                    ? " months"
                    : " month"}
            </p>
          </div>
          <div className="bg-background border-backgroundIcon grid grid-cols-[5rem_1fr] grid-rows-[auto_auto] items-center gap-[0.4rem_1.6rem] rounded-lg border p-[1.6rem]">
            <div className="row-span-full flex h-full items-center justify-center rounded-full bg-red-100 text-4xl text-red-700">
              <HiOutlineFire />
            </div>
            <h5 className="text-textAccent text-md self-end font-medium">
              Highest Streak
            </h5>
            <p className="text-textPrimary self-start text-3xl font-semibold">
              {habit.highestStreak}
              {habit.frequency === "daily"
                ? habit.highestStreak > 1
                  ? " days"
                  : " day"
                : habit.frequency === "weekly"
                  ? habit.highestStreak > 1
                    ? " weeks"
                    : " week"
                  : habit.highestStreak > 1
                    ? " months"
                    : " month"}
            </p>
          </div>

          <div className="col-span-4 h-full">
            <div className="bg-background border-backgroundIcon h-full rounded-lg border p-[1.6rem] px-6 py-6">
              <div className="mb-6 flex w-full flex-col gap-[0.1rem]">
                <h6 className="text-textPrimary text-xl font-medium">
                  Progress Overview
                </h6>
                <p className="text-textAccent font-light">
                  Your habit completion trend across all days of the week.
                </p>
              </div>

              <HabitChart completedDates={habit.completedDates} />
            </div>
          </div>
          <div className="col-span-4">
            <HabitActions
              completedDates={habit.completedDates}
              frequency={habit.frequency}
              handleIsEditModalOpen={handleIsEditModalOpen}
            />
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <HabitForm
          habit={{
            id: habit._id,
            title: habit.title,
            description: habit.description,
            icon: habit.icon,
            frequency: habit.frequency,
          }}
          handleIsOpenModal={setIsEditModalOpen}
        />
      )}
    </>
  );
}
