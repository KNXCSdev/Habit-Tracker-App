import { eachDayOfInterval, subDays, getDay, startOfToday } from "date-fns";
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const generateHabitData = (dates: Date[]) =>
  dates.map((date) => ({
    date,
    completed: Math.random() > 0.55,
  }));

export default function HabitChart() {
  const today = startOfToday();
  const allDates = eachDayOfInterval({
    start: subDays(today, 30),
    end: today,
  });

  const habitData = generateHabitData(allDates);

  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  const grouped = Array(7)
    .fill(null)
    .map((_, i) => {
      const days = habitData.filter(({ date }) => getDay(date) === i);
      const completedCount = days.filter((d) => d.completed).length;
      const avg = days.length > 0 ? completedCount / days.length : 0;
      return {
        label: dayLabels[i],
        dailyCompletion: parseFloat(avg.toFixed(2)),
      };
    });

  const completedDays = habitData.filter((d) => d.completed).length;
  const completionRate = Math.round((completedDays / habitData.length) * 100);

  return (
    <div className="flex h-full gap-12">
      <div className="w-1/10">
        <p className="text-textAccent/90 mb-2">Daily Completion</p>

        <div className="flex items-end gap-2">
          <span className="text-textPrimary text-4xl font-bold">
            {completionRate}%
          </span>
        </div>
        <div className="text-textAccent flex items-center gap-2 text-sm">
          Last 30 Days{" "}
          <span className="text-textSuccess text-sm font-bold">↑ 5%</span>
        </div>
      </div>

      <ResponsiveContainer width="90%" height={140}>
        <AreaChart data={grouped}>
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            interval={0}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number) => `${Math.round(value * 100)}%`}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
            labelStyle={{ color: "#6b7280" }}
          />
          <Area
            type="monotone"
            dataKey="dailyCompletion"
            stroke="#3b82f6"
            strokeWidth={3}
            fill="url(#colorArea)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
