import HabitBreadcrumb from "./HabitBreadcrumb";

export default function HabitStats() {
  return (
    <div className="flex flex-col gap-8">
      <HabitBreadcrumb />
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-textPrimary text-4xl font-semibold">
            Morning Run
          </h2>
          <p className="text-textAccent font-light tracking-wide">
            Consistency is key to building lasting habits. Keep up the great
            work!
          </p>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-background flex flex-col gap-2 rounded-lg border border-gray-200 px-6 py-6">
          <h3 className="text-textAccent text-xl">Completion Rate</h3>
          <p className="text-textPrimary text-4xl font-semibold">85%</p>
        </div>
        <div className="bg-background flex flex-col gap-4 rounded-lg border border-gray-200 px-6 py-6">
          <h3 className="text-textAccent text-xl">Frequency</h3>
          <p className="text-textPrimary text-4xl font-semibold">Daily</p>
        </div>
        <div className="bg-background flex flex-col gap-4 rounded-lg border border-gray-200 px-6 py-6">
          <h3 className="text-textAccent text-xl">Current Streak</h3>
          <p className="text-textPrimary text-4xl font-semibold">14 days</p>
        </div>
        <div className="col-span-3">s</div>
        <div className="col-span-3">sd</div>
      </div>
    </div>
  );
}
