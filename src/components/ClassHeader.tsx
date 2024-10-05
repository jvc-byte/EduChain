import { Link, useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ClassHeader = () => {
  const location = useLocation(); // Get the current URL path
  const { id } = useParams(); // Get the course ID from the URL
  
  // Function to check if a tab is active based on the URL
  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <Navbar />
      <div className="flex gap-10 px-12 lg:px-32 md:px-32 pt-5 text-white text-sm lg:text-lg md:text-lg border-[#1600a6] border-b-2">
        {/* Dynamic course ID in the link */}
        <Link
          to={`/course/${id}`}
          className={`cursor-pointer ${isActive(`/course/${id}`) ? 'border-b-2 border-[#E6169B]' : ''}`}
        >
          ClassRoom
        </Link>
        <Link
          to={``}
          className={`cursor-pointer flex-shrink-0 ${isActive(`/quiz/${id}`) ? 'border-b-2 border-[#E6169B]' : ''}`}
        >
          Quiz
        </Link>
        <Link
          to={`/mintcertificate/${id}`}
          className={`cursor-pointer ${isActive(`/mintcertificate/${id}`) ? 'border-b-2 border-[#E6169B]' : ''}`}
        >
          MintCertificate
        </Link>
      </div>
    </div>
  );
};

export default ClassHeader;
