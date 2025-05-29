import { getDay, parseISO } from "date-fns";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const dayLabels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // Sunday = 0

interface Props {
  completedDates: string[]; // ISO date strings
}

export default function HabitChart({ completedDates }: Props) {
  // Map day index (0=Sun..6=Sat) to completion count
  const countsPerDay = Array(7).fill(0);

  completedDates.forEach((isoDate) => {
    const dayIndex = getDay(parseISO(isoDate)); // 0 (Sun) - 6 (Sat)
    countsPerDay[dayIndex]++;
  });

  const chartData = countsPerDay.map((count, index) => ({
    label: dayLabels[index],
    count,
  }));

  return (
    <div className="flex h-full gap-12">
      <div className="w-1/10">
        <p className="text-textAccent/90 mb-2">Completions by Day</p>
        <div className="flex items-end gap-2">
          <span className="text-textPrimary text-4xl font-bold">
            {completedDates.length}
          </span>
        </div>
        <div className="text-textAccent text-sm">Total completions</div>
      </div>

      <ResponsiveContainer width="90%" height={140}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
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
            formatter={(value: number) => `${value} times`}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
            labelStyle={{ color: "#6b7280" }}
          />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#colorCount)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
