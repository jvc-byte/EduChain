import ReactPlayer from 'react-player/lazy';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams(); // Get course ID from the URL
  const selectedCourses = useSelector((state) => state.course.selectedCourses);
  
  const course = selectedCourses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="text-white w-[80%]">
        <div className="lg:w-[80%] mx-10 lg:mx-32 my-10">
            <div className="mx-auto sm-hidden relative">
              <ReactPlayer url={course.videoUrl}  width={1000} />
            </div>
            <div className="mx-auto lg:hidden md:hidden relative">
              <ReactPlayer url={course.videoUrl} width={400} />
            </div>
        </div>
        <div className="mx-12 lg:mx-32 md:mx-32 space-y-6">
            <h1 className="text-3xl">{course.title}</h1>
            <p>{course.description}</p>
        </div>
    </div>
  );
};

export default CoursePage;
