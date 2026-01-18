import { useCallback, useMemo, useState } from "react";

interface UseSearchOptions {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export const useSearch = (options: UseSearchOptions) => {
  const { value, defaultValue = "", onChange, onSearch } = options;

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentValue = isControlled ? value : internalValue;

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const submit = useCallback(() => {
    onSearch?.(currentValue);
  }, [currentValue, onSearch]);

  const handlers = useMemo(
    () => ({
      onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") submit();
      },
      onClickIcon: () => submit(),
      setValue,
      submit,
    }),
    [setValue, submit]
  );

  return {
    value: currentValue,
    actions: handlers,
  };
};
