import React from 'react'
import StartJourneyCard from '../src/components/StartCard'

const StartJourney = () => {
  return (
    <div className='start-journey h-full text-white flex justify-center w-full'>
        <div className="w-[80%] space-y-5">
          <h1 className='text-3xl font-bold py-10'>Start Your Academy Journey</h1>
          <p>EduChain is committed to empowering every Users to get relevant tutorials from our custom data. With EduChain, you'll confidently take your first step into this exciting frontier, followed by a personalized learning path that equips you to forge new trails in your Academy space. Ready to begin your adventure? Let's get started!</p>

          <div className="block lg:flex md:flex justify-between text-black">
            <StartJourneyCard 
             imageUrl='./start1.svg' 
             title='Enhance and Elevate Your Expertise.' 
             description='From foundational knowledge to in-depth explorations, dive into the world of learnings with content developed in collaboration with industry-leading experts.' 
            />
            <StartJourneyCard 
             imageUrl='./start2.svg' 
             title='Test Your Abilities'
             description='Participate in activities designed to test and strengthen your understanding of key crypto concepts.' 
            />
            <StartJourneyCard 
             imageUrl='./start3.svg' 
             title='Earn Rewards' 
             description='Earn badges and on-chain rewards as you complete lessons and quests, showcasing your achievements in the Web3 world.' 
            />
          </div>
        </div>
    </div>
  )
}

export default StartJourney
