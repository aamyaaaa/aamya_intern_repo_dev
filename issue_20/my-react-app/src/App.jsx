import Counter from './Counter'
import ParentBuggy from './buggy/ParentBuggy'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          React + Tailwind is working 🎉
        </h1>
        <p className="text-slate-600">
          Tailwind & Redux are set up correctly!
        </p>
      </div>

      {/* Redux counter */}
      <Counter />

      {/* Buggy / fixed React debugging example */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center mt-4">
        <ParentBuggy />
      </div>
    </div>
  )
}

export default App
