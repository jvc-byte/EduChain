import React from 'react'
import OnChain from '../components/ConnectWalletButton'
import SignupButton from '../components/SignUpButton'
import IdentityCard from '../components/IdentityCard'
import Framer from '../components/Framer'
import '@coinbase/onchainkit/styles.css';
import Home from '../components/Home'

{/*
    <div className='space-y-4'>
     <h1>EduChain</h1>
    <SignupButton />
    <OnChain />
    <IdentityCard />
    <Framer />
    </div> */}


function Homepage() {
  return (
    <div className="bg-color h-full">
      <Home />
    </div>
  )
}

export default Homepage
