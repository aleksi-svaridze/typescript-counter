import ToogleTheme from "./ToogleTheme";

type ThemeType = {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  dark: boolean;
};

const DisplayMobileMenu = ({ setDark, dark, showSettings }: ThemeType) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0, .95)" }}
      className={`w-full absolute top-0 bottom-0 right-0 left-0 ${
        showSettings ? "visible" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-5 items-center justify-center h-full">
        <h3 className="text-white text-2xl">Settings</h3>

        <ToogleTheme setDark={setDark} dark={dark} />

        <div className="border-[1px] rounded-md border-white w-52 h-20"></div>
      </div>
    </div>
  );
};

export default DisplayMobileMenu;
