type CountType = {
  count: number;
};

const DisplayCounter = ({ count }: CountType) => {
  return <div className="text-8xl font-normal dark:text-white">{count}</div>;
};

export default DisplayCounter;
