import { useMemo, useState } from 'react'

function ExpensiveList() {
  const [size, setSize] = useState(5000)
  const [clicks, setClicks] = useState(0)

  // Create a large list of numbers from 1 to size
  const numbers = useMemo(() => {
    return Array.from({ length: size }, (_, index) => index + 1)
  }, [size])

  // Expensive calculation: count how many even numbers exist in the list,
  // with an artificial delay to simulate heavy work
  const evenCount = useMemo(() => {
    console.log('Running expensive calculation...')
    let count = 0

    for (let i = 0; i < numbers.length; i++) {
      // Artificial delay
      for (let j = 0; j < 500; j++) {
        // do nothing, just wasting CPU
      }

      if (numbers[i] % 2 === 0) {
        count++
      }
    }

    return count
  }, [numbers])

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-4 max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Expensive List with useMemo</h2>
      <p className="text-sm text-slate-600 mb-2">
        List size: {size} numbers. Even numbers: {evenCount}
      </p>

      <div className="flex gap-2 mb-4">
        <button
          className="px-3 py-1 rounded bg-slate-900 text-white text-sm"
          onClick={() => setSize((prev) => prev + 1000)}
        >
          Increase list size by 1000
        </button>
        <button
          className="px-3 py-1 rounded bg-slate-200 text-sm"
          onClick={() => setClicks((prev) => prev + 1)}
        >
          Update unrelated state (clicks: {clicks})
        </button>
      </div>

      <div className="h-32 overflow-auto border border-slate-200 rounded p-2 text-xs">
        {numbers.map((n) => (
          <span key={n} className="inline-block mr-1">
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ExpensiveList
