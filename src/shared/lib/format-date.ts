export const formatDateWithDots = (date: string): string => {
  // 기대 형식: YYYY-MM-DD
  const [year, month, day] = date.split("-");

  if (!year || !month || !day) return date;

  return `${year}.${month}.${day}`;
};
