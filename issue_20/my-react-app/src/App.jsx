// src/App.jsx
import Counter from './Counter'
import ParentBuggy from './buggy/ParentBuggy'
import HelloWorld from './HelloWorld'
import ExpensiveList from './ExpensiveList'
import UserList from "./UserList";

import { useTranslation } from 'react-i18next'; // 👈 NEW

function App() {
  const { t, i18n } = useTranslation(); // 👈 NEW

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        {/* These now come from i18next */}
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          {t('welcome')}
        </h1>

        <p className="text-slate-600 mb-4">
          {t('subtitle')}
        </p>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 mb-4 rounded-lg bg-slate-900 text-white"
        >
          {t('languageSwitcher')}
        </button>

        <UserList />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <HelloWorld name="Focus Bear" />
      </div>

      {/* Redux counter */}
      <Counter />

      <ExpensiveList />

      {/* Buggy / fixed React debugging example */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center mt-4">
        <ParentBuggy />
      </div>
    </div>
  )
}

export default App
