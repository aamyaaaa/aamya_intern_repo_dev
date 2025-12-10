// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Counter from './Counter'
import ParentBuggy from './buggy/ParentBuggy'
import HelloWorld from './HelloWorld'
import ExpensiveList from './ExpensiveList'
import UserList from "./UserList";
import UseCallbackDemo from './UseCallbackDemo'
import QuoteFetcher from './QuoteFetcher'
import UseEffectDemo from './UseEffectDemo'
import { useTranslation } from 'react-i18next'

// Pages
import Home from "./pages/Home"
import Profile from "./pages/Profile"

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-8">
      
      {/* Navigation */}
      <nav className="flex gap-4 p-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <UseEffectDemo />
      {/* Routing Area */}
      <Routes>
        <Route path="/" element={<Home toggleLanguage={toggleLanguage} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;