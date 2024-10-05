import { NewCertificateCourse } from "../../const"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourse } from '../../features/Learning/courseSlice';

const NewCerticateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleStartLesson = (course) => {
    dispatch(addCourse(course)); // Add course to Redux and localStorage
    navigate('/my-lessons'); // Redirect to My Lessons page
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-12 lg:mx-32 md:mx-32 gap-10">
        {NewCertificateCourse.map((make) => (
            <div className="space-y-4 pt-5" key={make.id}>
                <div className="block items-center text-white border p-4 border-[#1600a6] w-full lg:w-80 md:w-80 ">
                    <img src={make.imageUrl} alt="" className='h-full lg:h-52 md:h-52 w-full object-cover' />
                    <div className='space-y-5 p-5 lg:p-0 md:p-0'>
                        <h1 className='text-3xl '>{make.title}</h1>
                        <p className='text-xs'>{make.description}</p>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1.5">
                                <img src={make.logo} alt="" className='h-7 w-7' />
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
        ))}
    </div>
  )
}

export default NewCerticateCourse
