import React from 'react'
import Navbar from './Navbar'
import Explore from './Explore'
import VideoPlayer from './VideoPlayer'
import StartJourney from '../../features/StartJourney'
import FeatureContent from '../../features/FeatureContent'
import ExploreCardContent from '../../features/ExploreCardContent'
import BecomeInstructor from './BecomeInstructor'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="my-16 lg:my-20 md:my-20">
       <Explore />
      </div>
     {/* <VideoPlayer /> */}
     <div className="my-16">
       <StartJourney />
     </div>
      <FeatureContent />
      <ExploreCardContent />
      <BecomeInstructor />
      <Footer />
    </div>
  )
}

export default Home
