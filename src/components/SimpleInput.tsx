import { SimpleInputType } from '../types/form';

export const SimpleInput = (props: SimpleInputType) => {
  const {
    id,
    type,
    name,
    autocomplete = 'off',
    placeholder,
    required,
    errorName,
    handleChange,
  } = props;
  return (
    <>
      <input
        className="border-1 focus:ring-blue-[#3d59a2] w-full rounded-md border border-black px-2 py-[0.375rem] text-sm font-normal text-black shadow-sm transition-all ease-in placeholder:text-[#3d59a2] invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring focus:ring-offset-2 focus:invalid:border-red-500 focus:invalid:ring-red-500"
        id={id}
        type={type}
        name={name}
        autoComplete={autocomplete}
        placeholder={placeholder}
        required={required}
        aria-describedby={errorName}
        onChange={handleChange}
      />
    </>
  );
};
