import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from 'react';

export type SimpleInputType = {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  autocomplete?: string;
  placeholder?: string;
  required?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type LabelType = {
  htmlFor: string;
  children: ReactNode;
};
