import { useSelector } from 'react-redux';


const LessonCompleted = () => {
  const completedCourses = useSelector((state) => state.course.completedCourses);
  return (
    <div className="">
      <h1 className="text-3xl">Courses Completed</h1>
      {completedCourses.length === 0 ? (
        <p>No course completed yet.</p>
      ) : (
        <ul>
          {completedCourses.map((course) => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <img src={course.imageUrl} alt="" />
              <span className="badge">Completed</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LessonCompleted
