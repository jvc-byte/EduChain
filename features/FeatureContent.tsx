import React from 'react'
import FeatureCard from '../src/components/FeatureCard'

const FeatureContent = () => {
  return (
    <div>
      <h1 className='text-white text-3xl px-32 py-8'>Feature Content</h1>
      <FeatureCard imageUrl='./feature1.svg' 
       logo='./start1.svg' 
       title='Ethereum Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
       />

    <FeatureCard imageUrl='./feature1.svg' 
       logo='./start1.svg' 
       title='Ethereum Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
    />

    <FeatureCard imageUrl='./feature1.svg' 
       logo='./start1.svg' 
       title='Ethereum Basics' 
       description='What is Ethereum? Discover the “new internet” and unlock your digital freedom through the power of decentralized technology.' 
       name='Educhain' 
    />

    </div>
  )
}

export default FeatureContent
