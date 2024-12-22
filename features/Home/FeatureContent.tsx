// import React from 'react'
import FeatureCard from '../../src/components/FeatureCard'

const FeatureContent = () => {
  return (
    <div>
      <FeatureCard 
       imageUrl='./feature1.svg' 
       logo='./start1.svg' 
       title='Donate TEA to OSS projects' 
       description='How to donate TEA to OSS projects' 
       name='Tea Protocol' 
       />

    <FeatureCard imageUrl='/bitcoin.jpg' 
       logo='./start1.svg' 
       title='Jason Coombs & Max Howel' 
       description='Jason Coombs & Max Howel - AMA' 
       name='Tea Protocol' 
    />

    <FeatureCard imageUrl='/Wallets.jpg' 
       logo='./start1.svg' 
       title='Stake and Unstake Tea' 
       description='How to stake and unstake tea' 
       name='Tea Protocol' 
    />

    </div>
  )
}

export default FeatureContent
