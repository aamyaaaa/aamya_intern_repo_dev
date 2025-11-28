import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-white">Redux Counter</h1>
<p className="text-2xl text-white">Count: {count}</p>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded bg-green-600 text-white"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="px-4 py-2 rounded bg-red-600 text-white"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="px-4 py-2 rounded bg-gray-500 text-white"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
