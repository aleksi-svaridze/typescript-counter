import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Counter setCount={setCount}>{count}</Counter>
    </div>
  );
}

export default App;
