import { useState } from 'react'
import ChildBuggy from './ChildBuggy'

function ParentBuggy() {
  // state is an OBJECT, not just a number
  const [state, setState] = useState({ count: 0 })

  function handleIncrement() {
    // This looks fine at first glance: add 1 to count
    setState(prev => ({ ...prev, count: prev.count + 1 }))
  }

  return (
    <div style={{ padding: '1rem', border: '2px solid red', marginTop: '1rem' }}>
      <h2>Buggy Parent</h2>
      <p>Parent count: {state.count}</p>
      <button onClick={handleIncrement}>Increment in Parent</button>

      {/* Passing the object down as props */}
      <ChildBuggy state={state} />
    </div>
  )
}

export default ParentBuggy
