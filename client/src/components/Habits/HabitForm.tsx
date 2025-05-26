export default function HabitForm() {
  return (
    <div className="fixed top-0 left-0 z-30 h-screen w-full bg-[#0000004d] backdrop-blur-xs transition">
      <div className="bg-background fixed top-1/2 left-1/2 z-50 h-[40rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-lg px-[2rem] py-[1.5rem] shadow-lg transition">
        <div className="flex h-full flex-col gap-8">
          <div>
            <h3 className="text-textPrimary text-2xl font-medium">
              Create New Habit
            </h3>
            <p className="text-textAccent text-sm font-light">
              Define a new habit to track and build a better routine.
            </p>
          </div>
          <hr />
          <form className="flex flex-col"></form>
          <div className="mt-auto flex items-center justify-end gap-2">
            <button className="bg-backgroundIcon text-textPrimary rounded-lg px-6 py-2">
              Cancel
            </button>
            <button className="bg-textSecondary text-background rounded-lg px-6 py-2">
              Save Habit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
