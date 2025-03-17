import './App.css';
import { Label } from './components/Label';
import { SimpleInput } from './components/SimpleInput';

export const App: React.FC = () => {
  const signIn = () => {
    //do something here
  };

  const handleChangePassword = () => {
    //do something here
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
                  required
                />
              </Label>
            </div>

            <button className="focus:ring-blue-[#3d59a2] w-full rounded-md bg-gray-500 p-2 text-sm text-white shadow-md ring-offset-2 transition-all ease-in hover:bg-gray-600 focus:outline-none focus:ring active:bg-gray-700 disabled:border-blue-200 disabled:bg-blue-200 disabled:text-slate-800 disabled:shadow-none">
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default App;
