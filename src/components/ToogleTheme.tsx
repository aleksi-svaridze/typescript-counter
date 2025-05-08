type ThemeType = {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToogleTheme = ({ setDark }: ThemeType) => {
  return (
    <div>
      <button
        className="text-black dark:text-white"
        onClick={() => setDark(true)}
      >
        Dark
      </button>

      <button
        className="text-black dark:text-white"
        onClick={() => setDark(false)}
      >
        Light
      </button>
    </div>
  );
};

export default ToogleTheme;
