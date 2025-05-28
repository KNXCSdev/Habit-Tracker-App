// utils/calculateCompletionRate.ts
export function calculateCompletionRate(
  completedDates: string[],
  frequency: string,
  createdAt: string,
): number {
  const created = new Date(createdAt);
  const today = new Date();
  created.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - created.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let expected = 1;

  if (frequency === "daily") {
    expected = diffDays + 1;
  } else if (frequency === "weekly") {
    expected = Math.floor((diffDays + 1) / 7);
  } else if (frequency === "monthly") {
    expected = Math.max(
      1,
      today.getMonth() -
        created.getMonth() +
        12 * (today.getFullYear() - created.getFullYear()),
    );
  }

  const completed = completedDates.length;
  const rate = (completed / expected) * 100;

  return Math.min(100, Math.round(rate));
}
