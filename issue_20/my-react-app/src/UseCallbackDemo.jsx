import { useState, useCallback, memo } from 'react'

const ChildButton = memo(function ChildButton({ onIncrement }) {
  console.log('ChildButton rendered')

  return (
    <button
      onClick={onIncrement}
      className="px-3 py-1 rounded bg-slate-900 text-white text-sm"
    >
      Increment from child
    </button>
  )
})

function UseCallbackDemo() {
  const [count, setCount] = useState(0)
  const [themeDark, setThemeDark] = useState(false)

  // Without useCallback, this function gets recreated on every render.
  // With useCallback, the same function reference is reused
  // as long as its dependency array [] does not change.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const containerClasses = themeDark
    ? 'bg-slate-800 text-white'
    : 'bg-slate-100 text-slate-900'

  return (
    <div className={`rounded-xl shadow-md p-6 mt-4 w-full max-w-md ${containerClasses}`}>
      <h2 className="text-lg font-semibold mb-2">
        useCallback Demo (check console for renders)
      </h2>

      <p className="mb-2">Count: {count}</p>

      <div className="flex gap-2 mb-4">
        <button
          className="px-3 py-1 rounded bg-slate-500 text-white text-sm"
          onClick={() => setThemeDark((prev) => !prev)}
        >
          Toggle Theme
        </button>

        <ChildButton onIncrement={handleIncrement} />
      </div>

      <p className="text-xs text-slate-500">
        Try toggling the theme and watching the console.
        With useCallback + React.memo, <code>ChildButton</code> does not re-render
        when only the theme changes.
      </p>
    </div>
  )
}

export default UseCallbackDemo