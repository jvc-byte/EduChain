import { useState } from 'react';
import { PopularCertificateCourse } from "../../const";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourse } from '../../features/Learning/courseSlice'; // Import action
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PopularCerticateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handler to start a lesson
  const handleStartLesson = (course) => {
    dispatch(addCourse(course)); // Add course to Redux and localStorage
    navigate('/my-lessons'); // Redirect to My Lessons page
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-12 lg:mx-32 md:mx-32 gap-10">
      {PopularCertificateCourse.map((make) => {
        // Individual image loading state
        const [imageLoaded, setImageLoaded] = useState(false);
        const [logoLoaded, setLogoLoaded] = useState(false);

        return (
          <div className="space-y-4 pt-5" key={make.id}>
            <div className="block items-center text-white border p-4 border-[#1600a6] w-full lg:w-80 md:w-80 ">
              
              {/* Main Image with Skeleton */}
              {!imageLoaded && <Skeleton height={200} />}
              <img 
                src={make.imageUrl} 
                alt="" 
                className={`h-full lg:h-52 md:h-52 w-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setImageLoaded(true)}
              />

              <div className='space-y-5 p-5 lg:p-0 md:p-0'>
                <h1 className='text-3xl text-white'>{make.title}</h1>
                <p className='text-xs'>{make.description}</p>

                <div className="flex justify-between">
                  
                  {/* Logo with Skeleton */}
                  <div className="flex items-center gap-1.5">
                    {!logoLoaded && <Skeleton circle={true} height={28} width={28} />}
                    <img 
                      src={make.logo} 
                      alt="" 
                      className={`h-7 w-7 ${logoLoaded ? 'block' : 'hidden'}`} 
                      onLoad={() => setLogoLoaded(true)} 
                    />
                    <h1>{make.name}</h1>
                  </div>

                  <button
                    onClick={() => handleStartLesson(make)} // Add course to Redux
                    className='border flex-shrink-0 text-sm lg:text-lg md:text-lg text-white hover:border-[#E6169B] p-3'
                  >
                    Start Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularCerticateCourse;
