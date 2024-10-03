import { useState } from 'react';
import LessonsInProgress from './LessonsInProgress';
import LessonCompleted from './LessonCompleted';
import LearningHeader from './LearningHeader';
import Footer from './Footer';

const MyLessons = () => {
  const [activeTab, setActiveTab] = useState('IN PROGRESS'); // Set initial state to 'IN PROGRESS'

  return (
    <div className="bg-color h-full text-white">
      <LearningHeader />
      <h1 className="text-3xl px-12 lg:px-32 md:px-32 pt-10 pb-5">My Lessons</h1>
      <div className="flex gap-4 mx-12 lg:mx-32 md:mx-32 mb-5">
        {/* IN PROGRESS Button */}
        <button
          className={`border p-3 px-5 flex-shrink-0 text-sm lg:text-lg md:text-lg ${activeTab === 'IN PROGRESS' ? 'border-[#E6169B]' : 'border-white'}`}
          onClick={() => setActiveTab('IN PROGRESS')} // Set active tab to 'IN PROGRESS'
        >
          IN PROGRESS
        </button>

        {/* COMPLETED Button */}
        <button
          className={`border p-3 px-5 flex-shrink-0 text-sm lg:text-lg md:text-lg ${activeTab === 'COMPLETED' ? 'border-[#E6169B]' : 'border-white'}`}
          onClick={() => setActiveTab('COMPLETED')} // Set active tab to 'COMPLETED'
        >
          COMPLETED
        </button>
      </div>

      {/* Conditionally Render Lessons */}
      {activeTab === 'IN PROGRESS' ? <LessonsInProgress /> : <LessonCompleted />}
      <Footer />
    </div>

  );
};

export default MyLessons;
