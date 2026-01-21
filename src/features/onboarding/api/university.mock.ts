import { sleep } from "@/shared/lib/sleep";

import type { SearchItem } from "@/shared/ui/search-auto-complete/types";

export const UNIVERSITIES: SearchItem[] = [
  { id: "1", name: "서울대학교" },
  { id: "2", name: "서울시립대학교" },
  { id: "3", name: "서울과학기술대학교" },
  { id: "4", name: "서울여자대학교" },
  { id: "5", name: "서울교육대학교" },
  { id: "6", name: "명지대학교" },
];

export const fetchUniversitiesMock = async (
  query: string
): Promise<SearchItem[]> => {
  await sleep(250);

  const q = query.trim().toLowerCase();
  if (!q) return [];

  return UNIVERSITIES.filter((x) => x.name.toLowerCase().includes(q));
};
