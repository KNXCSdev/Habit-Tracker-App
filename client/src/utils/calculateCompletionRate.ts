function getFrequencyKey(date: Date, frequency: string): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);

  switch (frequency) {
    case "daily":
      return d.toISOString().split("T")[0]; // YYYY-MM-DD
    case "weekly": {
      const startOfWeek = new Date(d);
      startOfWeek.setDate(d.getDate() - d.getDay()); // Sunday as start
      return startOfWeek.toISOString().split("T")[0];
    }
    case "monthly":
      return `${d.getFullYear()}-${d.getMonth()}`; // YYYY-M
    default:
      throw new Error("Unsupported frequency");
  }
}

export function isHabitCompleteForCurrentPeriod(
  completedDates: string[],
  frequency: string,
): boolean {
  const todayKey = getFrequencyKey(new Date(), frequency);
  const completedKeys = new Set(
    completedDates.map((date) => getFrequencyKey(new Date(date), frequency)),
  );
  return completedKeys.has(todayKey);
}

export function calculateCompletionRate(
  completedDates: string[],
  frequency: string,
  createdAt: string,
): number {
  if (completedDates.length === 0) return 0;

  const created = new Date(createdAt);
  const today = new Date();
  created.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - created.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Calculate expected completions
  let expected = 1;
  if (frequency === "daily") {
    expected = diffDays + 1;
  } else if (frequency === "weekly") {
    expected = Math.floor((diffDays + 1) / 7);
  } else if (frequency === "monthly") {
    expected =
      today.getMonth() -
      created.getMonth() +
      12 * (today.getFullYear() - created.getFullYear()) +
      1;
  }

  // Deduplicate completions based on frequency key
  const uniqueCompletions = new Set(
    completedDates.map((dateStr) =>
      getFrequencyKey(new Date(dateStr), frequency),
    ),
  );

  const completed = uniqueCompletions.size;
  const rate = (completed / expected) * 100;

  return Math.min(100, Math.round(rate));
}
