import { ChangeEvent } from 'react';

export const CheckboxInput = ({
  id,
  name,
  errorName,
  required,
  checked,
  handleChange,
}: {
  id: string;
  name: string;
  errorName?: string;
  required?: boolean;
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        required={required}
        aria-describedby={errorName}
        checked={checked}
        onChange={handleChange}
        type="checkbox"
        className="focus:ring-blue-[#3d59a2] peer relative h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-black checked:bg-green-900 focus:outline-none focus:ring focus:ring-offset-2"
      />

      <svg
        aria-hidden
        className="absolute hidden h-3 w-4 text-white peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  );
};
