import React from 'react'
import OnChain from '../components/onchain'
import SignupButton from '../components/SignUpButton'
import IdentityCard from '../components/IdentityCard'
import Framer from '../components/Framer'
import '@coinbase/onchainkit/styles.css';




function Homepage() {
  return (
    <div className='space-y-4'>
     <h1>EduChain</h1>
    <SignupButton />
    <OnChain />
    <IdentityCard />
    <Framer />
    </div>
  )
}

export default Homepage
