export type SearchSize = "full" | "large" | "medium" | "small";

export interface SearchProps {
  size?: SearchSize;

  placeholder?: string;
  disabled?: boolean;

  // controlled
  value?: string;
  onChange?: (value: string) => void;

  // uncontrolled
  defaultValue?: string;

  // 엔터 / 아이콘 클릭 시 실행
  onSearch?: (value: string) => void;

  // 접근성
  inputAriaLabel?: string;
}
