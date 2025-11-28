// function ChildBuggy({ state }) {
//   //  BUG: we are mutating the prop object directly
//   const buggyCountPlusFive = (() => {
//     console.log('Child BEFORE mutation:', state)
//     state.count += 5 // <--- this is the mutation bug
//     console.log('Child AFTER mutation:', state)
//     return state.count
//   })()

//   return (
//     <div style={{ marginTop: '1rem', border: '1px solid orange', padding: '0.5rem' }}>
//       <h3>Buggy Child</h3>
//       <p>Showing count + 5 (but mutating state): {buggyCountPlusFive}</p>
//     </div>
//   )
// }

// export default ChildBuggy
function ChildBuggy({ state }) {
  // ✅ Don't mutate `state`, just read it
  const safeCountPlusFive = state.count + 5

  console.log('Child (fixed) reading count:', state)

  return (
    <div style={{ marginTop: '1rem', border: '1px solid green', padding: '0.5rem' }}>
      <h3>Fixed Child</h3>
      <p>Showing count + 5 (without mutating state): {safeCountPlusFive}</p>
    </div>
  )
}

export default ChildBuggy
