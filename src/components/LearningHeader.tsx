import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const LearningHeader = () => {
  const location = useLocation(); // Get the current URL path
  

  // Function to check if a tab is active based on the URL
  const isActive = (path: string) => location.pathname === path;

  

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
      </div>
    </div>
  );
};

export default LearningHeader;
