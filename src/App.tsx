import { ChangeEvent, useState } from 'react';
import './App.css';
import { Label } from './components/Label';
import { PasswordMessage } from './components/PasswordMessage';
import { SimpleInput } from './components/SimpleInput';
import { PasswordValidationType } from './types/form';

export const defaultPasswordValidation: PasswordValidationType = {
  isCharLength: false,
  isCharSpecial: false,
  isDigit: false,
  isLowerCase: false,
  isUppercase: false,
};

export const App: React.FC = () => {
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordValidationType>(defaultPasswordValidation);
  const [isValid, setIsValid] = useState(false);

  const signIn = (formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      //TODO remove console.log
      console.log('sign in', email, password);
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    const validations: Record<keyof PasswordValidationType, boolean> = {
      isCharLength: /^.{8,}$/.test(password),
      isCharSpecial: /[#.?!@$%^&*\-]/.test(password),
      isDigit: /(?=.*?[0-9])/.test(password),
      isLowerCase: /(?=.*?[a-z])/.test(password),
      isUppercase: /(?=.*?[A-Z])/.test(password),
    };

    //update state
    setPasswordStrength(validations);

    // check if every validation is true
    setIsValid(Object.values(validations).every(Boolean));
  };

  return (
    <main>
      <h1 className="my-6 p-6 text-center text-xl font-bold sm:text-2xl md:text-4xl">
        Studio ACB - Form Challenge
      </h1>

      <section className="m-auto block w-full px-5 sm:max-w-[50rem]">
        <div className="m-auto block w-full rounded-lg bg-white p-6 shadow-md sm:max-w-96">
          <form action={signIn} className="flex flex-col gap-5">
            <Label htmlFor="email">
              Email (ex: jane@doe.de)
              <SimpleInput
                id="email"
                name="email"
                type="email"
                placeholder="jane@doe.de"
                autocomplete="on"
                required
              />
            </Label>

            <div className="flex flex-col gap-3">
              <Label htmlFor="password">
                Password
                <SimpleInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a secured password"
                  handleChange={handleChangePassword}
                  errorName="passwordError"
                  required
                />
              </Label>

              <PasswordMessage
                errorName="passwordError"
                password={passwordStrength}
              />
            </div>

            <button
              className="focus:ring-blue-[#3d59a2] text-bolder w-full rounded-md bg-gray-500 p-2 text-sm text-white shadow-md ring-offset-2 transition-all ease-in hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:ring active:bg-gray-700 disabled:border-blue-200 disabled:bg-blue-200 disabled:text-black disabled:shadow-none"
              disabled={!isValid}
              aria-disabled={!isValid}
              title={!isValid ? 'disabled' : ''}
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default App;
