import React from 'react';

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
         <button className='border shadow-lg hover:border-[#E6169B] p-3'>Start Lessons</button>
        </div>
    </div>
  );
};

export default ExploreCard;
