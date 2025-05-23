export default function calculateWeeklyProgress(
  completedDates: string[],
  currentDate: Date
) {
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay()); // Sunday start

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6); // Saturday end

  return completedDates.filter((dateStr) => {
    const date = new Date(dateStr);
    return date >= weekStart && date <= weekEnd;
  }).length;
}
