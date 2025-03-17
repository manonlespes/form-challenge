import { Progress } from 'radix-ui';
import { PasswordValidationType } from '../types/form';

export const PasswordStrength = ({
  password,
}: {
  password: PasswordValidationType;
}) => {
  // get number of valid (true) element
  const progressValueScore = Object.values(password).filter(Boolean).length;

  const progressValue = (progressValueScore / 5) * 100;
  const getColorProgress = (value: number) => {
    if (value <= 2) return 'bg-red-500'; // Weak
    if (value === 3) return 'bg-yellow-500'; // Medium
    if (value >= 4) return 'bg-green-500'; // Strong
  };

  const getMessageProgress = (value: number) => {
    if (value <= 2) return 'Weak password strength';
    if (value === 3) return 'Medium password strength';
    if (value >= 4) return 'Strong password strength';
  };

  return (
    <div>
      <div className="relative h-5 w-full overflow-hidden rounded-xl bg-gray-200">
        <Progress.Root className="relative h-full w-full" value={progressValue}>
          <Progress.Indicator
            className={`h-full transition-all duration-300 ${getColorProgress(progressValueScore)}`}
            style={{ width: `${progressValue}%` }}
          />
        </Progress.Root>
      </div>
      <p className="mt-1 text-center text-xs text-black">
        {getMessageProgress(progressValueScore)}
      </p>
    </div>
  );
};
