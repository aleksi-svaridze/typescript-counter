import { useState } from "react";
import DisplayCounter from "./components/DisplayCounter";
import CounterButtons from "./components/CounterButtons";
import { GoGear, GoInfo } from "react-icons/go";
import { GrPowerReset } from "react-icons/gr";
import DisplayMobileMenu from "./components/DisplayMobileMenu";
import ToogleTheme from "./components/ToogleTheme";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <div
      className={`bg-white relative h-screen font-roboto py-10 lg:py-0 transition-all duration-300 w-full dark:bg-black ${
        dark ? "dark" : ""
      }`}
    >
      <div className="md:w-96 lg:w-full flex flex-col lg:flex-row items-center justify-between lg:justify-evenly mx-auto h-full">
        <div
          className={`flex items-center lg:items-start lg:order-2 lg:h-11/12 lg:w-2/5 border-2 gap-x-6 text-xl dark:text-white cursor-pointer lg:cursor-default ${
            showSettings && "relative z-10 text-white"
          }`}
        >
          <GoInfo className="lg:hidden" />
          <GoGear
            className="lg:hidden"
            onClick={() => setShowSettings((prev) => !prev)}
          />
          <GrPowerReset className="lg:hidden" onClick={() => setCount(0)} />
          <div className="flex flex-col items-center pt-10 gap-y-5 w-full h-full">
            <h3 className="text-2xl">Settings</h3>
            <ToogleTheme setDark={setDark} dark={dark} />
          </div>
        </div>

        <DisplayMobileMenu
          setDark={setDark}
          dark={dark}
          showSettings={showSettings}
        />

        <div className="lg:h-11/12 lg:w-2/5 lg:flex lg:order-1 flex-col border-2 items-center justify-between py-10">
          <DisplayCounter count={count} />
          <CounterButtons setCount={setCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
