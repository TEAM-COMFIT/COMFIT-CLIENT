import { SearchAutocomplete } from "./search-auto-complete";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
    minQueryLength: { control: "number" },

    // 함수 props는 Controls에서 숨김
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
    minQueryLength: 2,
  },
  render: (args) => {
    return (
      <SearchAutocomplete {...args} onSelect={() => {}} onClear={() => {}} />
    );
  },
};

export const Onboarding: Story = {
  ...Playground,
  args: {
    variant: "onboarding",
    placeholder: "대학교를 검색하세요",
    disabled: false,
    minQueryLength: 2,
  },
};

export const Home: Story = {
  ...Playground,
  args: {
    variant: "home",
    placeholder: "지원하고 싶은 기업을 검색해보세요",
    disabled: false,
    minQueryLength: 2,
  },
};

export const MatchingExperienceList: Story = {
  ...Playground,
  args: {
    variant: "matchingExperienceList",
    placeholder: "기업명 검색",
    disabled: false,
    minQueryLength: 2,
  },
};
