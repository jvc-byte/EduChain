import React from 'react'
import { CiSearch } from "react-icons/ci";
import ConnectWalletButton from './ConnectWalletButton'

const Navbar = () => {
  return (
    <div className="">
        <div className='flex items-center justify-between py-5 lg:py-3 md:py-3 lg:justify-evenly'>
            <img src="./logo.svg" alt="" className='w-40 lg:w-60' />
            <div className="flex items-center relative">
              <CiSearch className='text-white absolute left-4 h-6 w-6 sm-hidden'/>
              <input type="text" placeholder='Search for lesson' className='bg-[#040B35] sm-hidden rounded-md pl-12 h-12 w-full text-sm lg:w-96 text-white border border-[grey]' />
            </div>
            <button className='border text-white sm-hidden hover:border-[#E6169B] p-3'>Explore Lessons</button>
            <ConnectWalletButton />
        </div>
        <div className="flex items-center relative px-8 mt-5">
              <CiSearch className='text-white absolute left-12 h-6 w-6 lg:hidden md:hidden'/>
              <input type="text" placeholder='Search for lesson' className='bg-[#040B35] lg:hidden md:hidden rounded-md pl-12 h-12 w-full text-sm text-white border border-[grey]' />
        </div>
    </div>
  )
}

export default Navbar
