import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-bold">useState Counter</h2>
      <p className="text-lg">Count: {count}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;