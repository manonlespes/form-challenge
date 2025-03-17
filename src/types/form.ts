import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

export type SimpleInputType = {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  errorName?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type LabelType = {
  htmlFor: string;
  children: ReactNode;
};

export type PasswordValidationType = {
  isCharLength: boolean;
  isCharSpecial: boolean;
  isDigit: boolean;
  isLowerCase: boolean;
  isUppercase: boolean;
};
