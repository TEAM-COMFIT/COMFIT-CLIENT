// YYYY-MM-DD(string) -> YYYY.MM.DD(string)
export const formatDateWithDots = (date: string): string => {
  const [year, month, day] = date.split("-");

  if (!year || !month || !day) return date;

  return `${year}.${month}.${day}`;
};

// Date -> YYYY.MM.DD(string)
export const formatDateDot = (date: Date): string => {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replaceAll(". ", ".")
    .replace(/\.$/, "");
};

// Date -> YYYY년 MM월 DD일(string)
export const formatDateKorean = (date: Date): string => {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const pad2 = (n: number): string => String(n).padStart(2, "0");

// Date -> YYYY년 MM월 (string)
export const formatYearMonthKorean = (date: Date): string => {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  return `${y}년 ${m}월`;
};

// Date -> YYYY-MM-DD(string)
export const formatDateDash = (date: Date): string => {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}-${m}-${d}`;
};

// YYYY-MM-DD(string) -> Date | null
export const parseYMD = (ymd: string): Date | null => {
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};
