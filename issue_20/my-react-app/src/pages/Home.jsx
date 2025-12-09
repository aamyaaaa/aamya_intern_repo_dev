export default function Home({ toggleLanguage }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 mb-4 rounded-lg bg-slate-900 text-white"
      >
        Switch Language
      </button>
      <p className="text-slate-700">Home Page: Welcome to FocusBear!</p>
    </div>
  )
}