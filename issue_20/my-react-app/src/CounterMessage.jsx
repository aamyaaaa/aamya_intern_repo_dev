import { useSelector } from "react-redux";
import { selectCounterValue } from "./store/counterSlice";

export default function CounterMessage() {
  const count = useSelector(selectCounterValue);

  if (count === 0) return <p className="text-white">Counter is at zero 🙂</p>;
  if (count > 0) return <p className="text-white">Counter is positive ✅</p>;
  return <p className="text-white">Counter is negative ⚠️</p>;
}