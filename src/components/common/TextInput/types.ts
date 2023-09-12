// Dependencies
import { ReactNode } from 'react';

// Export type
export enum TEXT_INPUT_VARIANT {
  CONTAINED = 'contained',
  UNDERLINE = 'underline',
}

export type TextInputProps = {
  name?: string;
  className?: string;
  label?: string | ReactNode;
  variant?: TEXT_INPUT_VARIANT;
  value?: string;
  onChange?: (e: any) => void;
  error?: string | boolean;
  type?: string;
}
