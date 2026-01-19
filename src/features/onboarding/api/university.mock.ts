import { sleep } from "@/shared/lib/sleep";

import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

export const UNIVERSITIES: SearchItem[] = [
  { id: "u-1", label: "서울대학교" },
  { id: "u-2", label: "서울시립대학교" },
  { id: "u-3", label: "서울과학기술대학교" },
  { id: "u-4", label: "서울여자대학교" },
  { id: "u-5", label: "서울교육대학교" },
  { id: "u-6", label: "명지대학교" },
];

export const fetchUniversitiesMock = async (
  query: string,
): Promise<SearchItem[]> => {
  await sleep(250);

  const q = query.trim().toLowerCase();
  if (!q) return [];

  return UNIVERSITIES.filter((x) => x.label.toLowerCase().includes(q));
};
