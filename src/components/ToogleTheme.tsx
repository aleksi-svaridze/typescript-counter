import { BsMoonStars, BsSun } from "react-icons/bs";

type ThemeType = {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
};

const ToogleTheme = ({ setDark, showSettings }: ThemeType) => {
  return (
    <div
      className={`bg-red-500 absolute top-0 left-0 right-0 bottom-0  ${
        showSettings ? "" : ""
      }`}
    >
      <div>
        <button
          className="text-black dark:text-white"
          onClick={() => setDark((prev) => !prev)}
        >
          {
            <span className="flex items-center gap-x-5">
              <BsSun /> Light
            </span>
          }
          <span className="flex items-center gap-x-5">
            <BsSun /> Light
          </span>
          <BsMoonStars /> Dark
        </button>

        {/* <button
          className="text-black dark:text-white"
          // onClick={() => setDark(false)}
        >
          <BsSun /> Light
        </button> */}
      </div>
    </div>
  );
};

export default ToogleTheme;
