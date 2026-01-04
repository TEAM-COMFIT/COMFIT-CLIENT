import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type,
  ...props
}: Props) {
  const base = 'rounded font-medium';
  const variantClass =
    variant === 'primary'
      ? 'bg-black text-white'
      : 'border border-gray-300 bg-white text-black';

  const sizeClass =
    size === 'sm'
      ? 'px-3 py-1 text-sm'
      : size === 'lg'
        ? 'px-5 py-3 text-base'
        : 'px-4 py-2 text-sm';

  return (
    <button
      type={type ?? 'button'}
      className={`${base} ${variantClass} ${sizeClass} ${className ?? ''}`}
      {...props}
    />
  );
}
