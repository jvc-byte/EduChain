import React from 'react';

interface StartJourneyProps {
  imageUrl: string;
  title: string;
  description: string;
  
}

const StartCard: React.FC<StartJourneyProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex">
        <div className='w-full lg:w-80 h-80 space-y-3 my-10 py-10 bg-white shadow-lg text-center'>
         <img src={imageUrl} alt="" className='mx-auto' />
         <h1 className='text-3xl px-5 h-12 text-red-500'>{title}</h1>
         <p className='text-xs px-3.5 py-6'>{description}</p>
        </div>
    </div>
  );
};

export default StartCard;
