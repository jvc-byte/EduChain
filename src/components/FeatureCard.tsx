import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

interface StartJourneyProps {
  imageUrl: string;
  logo: string;
  title: string;
  description: string;
  name: string;
}

const FeatureCard: React.FC<StartJourneyProps> = ({ imageUrl, logo, title, description, name }) => {
  const [imageLoaded, setImageLoaded] = useState(false); // For main image
  const [logoLoaded, setLogoLoaded] = useState(false); // For logo image

  return (
    <div className="space-y-5 py-5 flex">
      <div className="mx-auto border w-[80%] border-[#1600a6] text-white">
        <div className="block lg:flex md:flex items-center gap-10 w-full lg:w-[80%] md:w-[80%]">

          {/* Image with Skeleton */}
          <div className="w-full lg:w-[60%]">
            {!imageLoaded && <Skeleton height={250} width="100%" />}
            <img
              src={imageUrl}
              alt=""
              className={`h-full lg:h-64 md:h-64 w-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Content */}
          <div className="space-y-5 p-5 lg:p-0 md:p-0">
            <h1 className="text-3xl">{title}</h1>
            <p className="text-xs">{description}</p>

            {/* Logo with Skeleton */}
            <div className="flex items-center gap-1.5">
              {!logoLoaded && <Skeleton circle={true} height={28} width={28} />}
              <img
                src={logo}
                alt=""
                className={`h-7 w-7 ${logoLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setLogoLoaded(true)}
              />
              <h1>{name}</h1>
            </div>

            <Link
              to="/learningpage"
              >
              <button className="border my-5 text-white hover:border-[#E6169B] p-3">Explore Lessons</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
