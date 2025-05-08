type setCountType = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterButtons = ({ setCount }: setCountType) => {
  return (
    <div className="w-full flex items-center justify-between px-10">
      <div
        className="rounded-full border-2 dark:border-white dark:text-white text-xl flex items-center justify-center size-10"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </div>
      <div
        className="rounded-full border-2 dark:border-white dark:text-white text-xl flex items-center justify-center size-10"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </div>
    </div>
  );
};

export default CounterButtons;
