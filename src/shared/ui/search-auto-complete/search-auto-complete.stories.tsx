import { SearchAutocomplete } from "./search-auto-complete";

import type { SearchItem } from "./types";
import type { Meta, StoryObj } from "@storybook/react-vite";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const UNIVERSITIES: SearchItem[] = [
  { id: "u-1", name: "서울대학교" },
  { id: "u-2", name: "서울시립대학교" },
  { id: "u-3", name: "서울과학기술대학교" },
  { id: "u-4", name: "서울여자대학교" },
  { id: "u-5", name: "서울교육대학교" },
  { id: "u-6", name: "명지대학교" },
];

const COMPANIES: SearchItem[] = [
  { id: "c-1", name: "CJ ENM" },
  { id: "c-2", name: "CJ 제일제당" },
  { id: "c-3", name: "CJ 푸드빌" },
  { id: "c-4", name: "CJ 올리브영" },
  { id: "c-5", name: "CJ 프레시웨이" },
  { id: "c-6", name: "카카오" },
  { id: "c-7", name: "네이버" },
];

function createMockFetcher(items: SearchItem[], delayMs = 250) {
  return async (query: string): Promise<SearchItem[]> => {
    await sleep(delayMs);

    const q = query.trim().toLowerCase();
    if (!q) return [];

    return items.filter((x) => x.name.toLowerCase().includes(q));
  };
}

function getFetcherByVariant(
  variant: "onboarding" | "home" | "matchingExperienceList"
) {
  if (variant === "onboarding") return createMockFetcher(UNIVERSITIES, 250);
  return createMockFetcher(COMPANIES, 250);
}

const meta: Meta<typeof SearchAutocomplete> = {
  title: "shared/SearchAutocomplete",
  component: SearchAutocomplete,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["onboarding", "home", "matchingExperienceList"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    maxItems: { control: "number" },
    minQueryLength: { control: "number" },

    // 함수 props는 Controls에서 숨김
    fetchItems: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    onClear: { table: { disable: true } },
    showSelectedTag: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof SearchAutocomplete>;

export const Playground: Story = {
  args: {
    variant: "home",
    placeholder: "지원하고 싶은 기업을 검색해보세요",
    disabled: false,
    maxItems: 4,
    minQueryLength: 2,
  },
  render: (args) => {
    const fetchItems = getFetcherByVariant(args.variant);

    return (
      <SearchAutocomplete
        {...args}
        fetchItems={fetchItems}
        onSelect={() => {}}
        onClear={() => {}}
      />
    );
  },
};

export const Onboarding: Story = {
  ...Playground,
  args: {
    variant: "onboarding",
    placeholder: "대학교를 검색하세요",
    disabled: false,
    maxItems: 4,
    minQueryLength: 2,
  },
};

export const Home: Story = {
  ...Playground,
  args: {
    variant: "home",
    placeholder: "지원하고 싶은 기업을 검색해보세요",
    disabled: false,
    maxItems: 4,
    minQueryLength: 2,
  },
};

export const MatchingExperienceList: Story = {
  ...Playground,
  args: {
    variant: "matchingExperienceList",
    placeholder: "기업명 검색",
    disabled: false,
    maxItems: 4,
    minQueryLength: 2,
  },
};
