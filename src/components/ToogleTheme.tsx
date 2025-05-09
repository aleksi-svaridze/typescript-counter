import { BsMoonStars, BsSun } from "react-icons/bs";

type ThemeType = {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
  showSettings: boolean;
};

const ToogleTheme = ({ setDark, dark, showSettings }: ThemeType) => {
  return (
    <button
      className={`cursor-pointer dark:text-white dark:border-white  border-black flex items-center gap-x-5 border-[1px] rounded-md w-52 h-10 justify-center ${
        showSettings ? "text-white border-white" : "text-black border-black"
      }`}
      onClick={() => setDark((prev) => !prev)}
    >
      {dark ? (
        <>
          <BsSun /> Light
        </>
      ) : (
        <>
          <BsMoonStars /> Dark
        </>
      )}
    </button>
  );
};

export default ToogleTheme;
