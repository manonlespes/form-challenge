import { PasswordValidationType } from '../types/form';
import { InvalidIcon, ValidIcon } from './sharedIcons/Icons';

export const PasswordMessage = ({
  errorName,
  password,
}: {
  errorName: string;
  password: PasswordValidationType;
}) => {
  return (
    <div>
      <ul
        id={errorName}
        className="flex flex-col gap-2"
        role="status"
        aria-atomic="true" // https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22
      >
        <li
          className={`inline-flex items-center gap-2 text-sm ${password.isCharLength ? 'text-green-800' : 'text-red-700'}`}
        >
          <span
            title={password.isCharLength ? 'validated' : 'invalid'}
            aria-hidden
          >
            {password.isCharLength ? <ValidIcon /> : <InvalidIcon />}
          </span>
          At least 8 characters
        </li>
        <li
          className={`inline-flex items-center gap-2 text-sm ${password.isCharSpecial ? 'text-green-800' : 'text-red-700'}`}
        >
          <span
            title={password.isCharSpecial ? 'validated' : 'invalid'}
            aria-hidden
          >
            {password.isCharSpecial ? <ValidIcon /> : <InvalidIcon />}
          </span>
          Contains special character
        </li>
        <li
          className={`inline-flex items-center gap-2 text-sm ${password.isDigit ? 'text-green-800' : 'text-red-700'}`}
        >
          <span title={password.isDigit ? 'validated' : 'invalid'} aria-hidden>
            {password.isDigit ? <ValidIcon /> : <InvalidIcon />}
          </span>
          Contains number
        </li>
        <li
          className={`inline-flex items-center gap-2 text-sm ${password.isUppercase ? 'text-green-800' : 'text-red-700'}`}
        >
          <span
            title={password.isUppercase ? 'validated' : 'invalid'}
            aria-hidden
          >
            {password.isUppercase ? <ValidIcon /> : <InvalidIcon />}
          </span>
          Contains uppercase letter
        </li>
        <li
          className={`inline-flex items-center gap-2 text-sm ${password.isLowerCase ? 'text-green-800' : 'text-red-700'}`}
        >
          <span
            title={password.isLowerCase ? 'validated' : 'invalid'}
            aria-hidden
          >
            {password.isLowerCase ? <ValidIcon /> : <InvalidIcon />}
          </span>
          Contains lower letter
        </li>
      </ul>
    </div>
  );
};
