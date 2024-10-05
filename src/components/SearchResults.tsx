import { useEffect, useState } from 'react';
import { videoData } from '../../const'; // Import your video data
import { useLocation } from 'react-router-dom';
import LearningPage from '@/pages/LearningPage';
import LearningHeader from './LearningHeader';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourse } from '../../features/Learning/courseSlice'; // Import action

interface Video {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    name: string;
}

const SearchResults = () => {
    const [results, setResults] = useState<Video[]>([]);
  const [noResult, setNoResult] = useState(false);

  const query = new URLSearchParams(useLocation().search).get('query') || '';

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleStartLesson = (course) => {
    dispatch(addCourse(course)); // Add course to Redux and localStorage
    navigate('/my-lessons'); // Redirect to My Lessons page
  };

  useEffect(() => {
    const filteredResults = videoData.filter((video) => 
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredResults.length > 0) {
      setResults(filteredResults);
      setNoResult(false);
    } else {
      setResults([]);
      setNoResult(true);
    }
  }, [query]);

  return (
    <div className="p-4 bg-color">
      {noResult ? (
        <div className="">
          <h1 className="text-center text-red-500">No search result, here are Courses Available below!!</h1>
          <LearningPage />
        </div>
      ) : (
        <div className="">
          <LearningHeader />
          <div className="p-5 text-center">
            <h1 className='text-white'>Search Results: <span>{query.valueOf()}</span></h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-12 lg:mx-32 md:mx-32 gap-10">
            {results.map((video) => (
              <div key={video.id} className="space-y-4 pt-5">
                <div className="block items-center text-white border p-4 border-[#1600a6] w-full lg:w-80 md:w-80 ">
                 <img src={video.imageUrl} alt="img" className='h-full w-full object-cover' />
                 <div className='space-y-5 p-5 lg:p-0 md:p-0'>
                   <h2 className="text-2xl text-white">{video.title}</h2>
                   <p className='text-xs'>{video.description}</p>
                   <div className="flex items-center gap-1.5">
                     <img src="/start1.svg" alt="" className="h-7 w-7" />
                     <h1>{video.name}</h1>
                   </div>
                   <button
                     onClick={() => handleStartLesson(video)} // Add course to Redux
                     className='border flex-shrink-0 text-sm lg:text-lg md:text-lg text-white hover:border-[#E6169B] p-3'
                   >
                     Start Lesson
                   </button>
                 </div>
                </div>
              </div>
            ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
