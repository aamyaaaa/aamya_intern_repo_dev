import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCounterValue } from "./store/counterSlice";
import CounterMessage from "./CounterMessage";

// Reusable button component with hover + active state
function ActionButton({ label, onClick, color }) {
  return (
    <button
      className={`
        px-4 py-2 rounded text-white
        bg-${color}-600
        hover:bg-${color}-700 active:scale-95
        transition ease-in-out duration-150
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function Counter() {
  const count = useSelector(selectCounterValue);  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-white">Redux Counter</h1>
      <p className="text-2xl text-white">Count: {count}</p>
      <CounterMessage />
      <div className="flex gap-2">
        <ActionButton label="+1" onClick={handleIncrement} color="green" />
        <ActionButton label="-1" onClick={handleDecrement} color="red" />
        <ActionButton label="Reset" onClick={handleReset} color="gray" />
      </div>
    </div>
  );
}

export default Counter;
