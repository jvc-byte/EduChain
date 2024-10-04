import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CoursePage = () => {
  const { id } = useParams(); // Get course ID from the URL
  const selectedCourses = useSelector((state) => state.course.selectedCourses);
  
  const course = selectedCourses.find((course) => course.id === parseInt(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove or modify as needed based on real loading time)
    setTimeout(() => setLoading(false), 2000);
  }, [id]);

  if (!course && !loading) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="text-white w-[80%]">
      <div className="lg:w-[80%] h-full mx-10 lg:mx-32 mt-10">
        <div className="mx-auto md-hidden sm-hidden">
          {loading ? (
            <Skeleton height={500} width={1000} duration={1.5} />
          ) : (
            <ReactPlayer url={course.videoUrl} width={1000} />
          )}
        </div>
        <div className="mx-24 lg:hidden sm-hidden">
          {loading ? (
            <Skeleton height={300} width={500} duration={1.5} />
          ) : (
            <ReactPlayer url={course.videoUrl} width={500} />
          )}
        </div>
        <div className="mx-auto lg:hidden md:hidden">
          {loading ? (
            <Skeleton height={200} width={300} duration={1.5} />
          ) : (
            <ReactPlayer url={course.videoUrl} width={300} />
          )}
        </div>
      </div>

      <div className="pl-12 lg:pl-32 md:pl-32 py-10 lg:py-10 md:py-20 space-y-3">
        {loading ? (
          <>
            <Skeleton width={300} height={40} duration={1.5} />
            <Skeleton width={200} height={30} duration={1.5} />
            <Skeleton count={3} width="100%" height={20} duration={1.5} />
          </>
        ) : (
          <>
            <h1 className="text-xl lg:text-3xl md:text-2xl">{course.title}</h1>
            <h2 className="text-xl text-blue-700 font-bold">Lesson Description</h2>
            <p>{course.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
