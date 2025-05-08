import type { ReactNode } from "react";

type CounterType = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterType) => {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
