import { useState } from "react";
import ToogleTheme from "./components/ToogleTheme";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`bg-white h-screen transition-all duration-300 w-full dark:bg-black ${
        dark ? "dark" : ""
      }`}
    >
      <ToogleTheme setDark={setDark} />
    </div>
  );
}

export default App;
