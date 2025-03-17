import clsx from 'clsx';
import { LabelType } from '../types/form';

export const Label = (props: LabelType) => {
  const { htmlFor, children, moreClassname } = props;

  const style = clsx(
    'flex gap-2 text-sm font-medium text-black',
    moreClassname
  );

  return (
    <>
      <label className={style} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
};
