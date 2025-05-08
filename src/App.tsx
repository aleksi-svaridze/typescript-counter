import { useState } from "react";
import ToogleTheme from "./components/ToogleTheme";
import DisplayCounter from "./components/DisplayCounter";
import CounterButtons from "./components/CounterButtons";
import { GoGear, GoInfo } from "react-icons/go";
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <div
      className={`bg-white relative h-screen font-roboto flex flex-col items-center justify-between py-10 transition-all duration-300 w-full dark:bg-black ${
        dark ? "dark" : ""
      }`}
    >
      <div
        className={`flex items-center gap-x-6 text-xl dark:text-white cursor-pointer ${
          showSettings && "relative z-10 text-white"
        }`}
      >
        <GoInfo />
        <GoGear onClick={() => setShowSettings((prev) => !prev)} />
        <GrPowerReset onClick={() => setCount(0)} />
      </div>

      <ToogleTheme setDark={setDark} dark={dark} showSettings={showSettings} />
      <DisplayCounter count={count} />
      <CounterButtons setCount={setCount} />
    </div>
  );
}

export default App;
