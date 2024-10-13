import React from 'react';
import { Link } from 'react-router-dom';

interface StartJourneyProps {
  imageUrl: string;
  title: string;
  
}

const ExploreCard: React.FC<StartJourneyProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex">
        <div className='w-full lg:w-80 h-72 space-y-3 my-2 py-10 bg-white shadow-lg text-center'>
         <img src={imageUrl} alt="" className='mx-auto' />
         <h1 className='text-3xl px-5 h-12 '>{title}</h1>
         <Link
            to="/learningpage"
          >
            <button className='border shadow-lg hover:border-[#E6169B] p-3'>Explore Lessons</button>
         </Link>
        </div>
    </div>
  );
};

export default ExploreCard;
