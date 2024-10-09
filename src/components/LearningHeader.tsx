import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next'; // Import translation hook

const LearningHeader = () => {
  const location = useLocation(); // Get the current URL path
  const [t, i18n] = useTranslation("global") // Initialize translation

  // Function to check if a tab is active based on the URL
  const isActive = (path: string) => location.pathname === path;

  // Function to handle language change
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center gap-10 px-12 lg:px-32 md:px-32 pt-5 text-white text-sm lg:text-lg md:text-lg border-[#1600a6] border-b-2">
        {/* Navigation Links */}
        <div className="flex gap-10">
          <Link
            to="/learningpage"
            className={`cursor-pointer ${isActive('/learningpage') ? 'border-b-2 border-[#E6169B]' : ''}`}
          >
            {t('Home')}
          </Link>
          <Link
            to="/my-lessons"
            className={`cursor-pointer flex-shrink-0 ${isActive('/my-lessons') ? 'border-b-2 border-[#E6169B]' : ''}`}
          >
            {t('My Lessons')}
          </Link>
          <Link
            to="/glossary"
            className={`cursor-pointer ${isActive('/glossary') ? 'border-b-2 border-[#E6169B]' : ''}`}
          >
            {t('Glossary')}
          </Link>
        </div>

        {/* Language Selector */}
        <div>
          <select
            className="bg-[#1600a6] text-white p-2 rounded-lg"
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LearningHeader;
