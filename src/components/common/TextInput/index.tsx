// Dependencies
import React, { FC } from 'react';

// Types
import { TEXT_INPUT_VARIANT, TextInputProps } from './types';

// Export component
export const TextInput: FC<TextInputProps> = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    variant = TEXT_INPUT_VARIANT.UNDERLINE,
    className,
    error,
    type = 'text',
  } = props;

  return (
    <div className={`${className} text-[18px]`}>
      {label && (
        typeof label === 'string' ? <p className={`${variant === TEXT_INPUT_VARIANT.CONTAINED ? 'text-[18px] mb-[6px]' : 'text-[13px]'} font-semibold ${error ? 'text-red' : 'text-[#C8C5C5]'}`}>{label}</p> : label
      )}
      <input
        type={type}
        name={name}
        className={'w-full focus:outline-none focus:border-black ' + (variant === TEXT_INPUT_VARIANT.CONTAINED ? `px-2 h-[42px] ${error ? 'border-red' : 'border-[#D9D9D9]'} border-[2px] rounded-[5px]` : `h-[30px] ${error ? 'border-red' : 'border-[#C8C5C5]'} border-b-[1px]`)}
        value={value}
        onChange={onChange}
      />
      {!!error && <p className={'text-[12px] text-[red] mt-1 fixed'}>{error}</p>}
    </div>
  );
};
