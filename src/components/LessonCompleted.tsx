import { useSelector } from 'react-redux';
import { IoMdCheckmark } from "react-icons/io";



const LessonCompleted = () => {
  const completedCourses = useSelector((state) => state.course.completedCourses);
  return (
    <div className="">
      <h1 className="text-3xl pl-12 py-2 lg:pl-32 md:pl-32">Courses Completed</h1>
      {completedCourses.length === 0 ? (
        <p className='ml-12 lg:ml-32 md:ml-32 h-72'>No course completed yet.</p>
      ) : (
        <div className=''>
          {completedCourses.map((course) => (
            <div className="space-y-5 py-5 flex" key={course.id}>
              <div className="mx-auto border w-[80%] border-[#1600a6] text-white">
                <div className="block lg:flex md:flex gap-10 w-full lg:w-[80%] md:w-[80%]">
                  <img src={course.imageUrl} className='h-full w-full object-cover lg:w-[60%]' alt="" />
                  <div className="py-5 lg:py-10 md:py-10 space-y-5 lg:space-y-10 md:space-y-10">
                   <h2 className='text-3xl pl-12 lg:pl-0 md:pl-0 flex-shrink-0'>{course.title}</h2>
                   <div className="badge mx-12 lg:mx-0 md:mx-0 text-green-500 p-3 flex justify-between border border-green-500">
                    <h1>Completed</h1>
                    <IoMdCheckmark />
                    </div>
                    <button className="border ml-12 lg:ml-0 md:ml-0 text-white hover:border-[#E6169B] p-3 flex-shrink-0 text-sm lg:text-lg md:text-lg">Get Certificate</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonCompleted
