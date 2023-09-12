// Export type
export enum BUTTON_VARIANTS {
  CONTAINED = 'contained',
  DEFAULT = 'default'
}

export type ButtonProps = {
  className?: string;
  variant?: BUTTON_VARIANTS;
  label: any;
  onClick?: () => void;
  icon?: any,
  [key: string]: any;
};
