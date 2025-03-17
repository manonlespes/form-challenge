import { LabelType } from '../types/form';

export const Label = (props: LabelType) => {
  const { htmlFor, children } = props;
  return (
    <>
      <label
        className="flex flex-col gap-2 text-sm font-medium text-black"
        htmlFor={htmlFor}
      >
        {children}
      </label>
    </>
  );
};
