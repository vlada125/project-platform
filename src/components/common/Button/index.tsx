// Dependencies
import React from 'react';

// Props & types
import { BUTTON_VARIANTS, ButtonProps } from './types';

// Export component
export const Button = (props: ButtonProps) => {
  const {
    className,
    variant,
    label,
    onClick,
    icon,
    ...rest
  } = props;

  return (
    <button
      className={`flex items-center gap-3 font-medium rounded-[30px] ${variant === BUTTON_VARIANTS.CONTAINED ? 'px-8 py-2' : 'text-[#256EFF] md:text-sm text-xs'} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && icon}
      {label}
    </button>
  );
};
