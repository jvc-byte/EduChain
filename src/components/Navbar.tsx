import ConnectWalletButton from './ConnectWalletButton'
import SearchBar from "./SearchBar";
import SearchBarSm from "./SearchBarSm";


const Navbar = () => {
  return (
    <div className="">
        <div className='flex items-center justify-between py-5 lg:py-3 md:py-3 lg:justify-evenly'>
            <img src="./logo.svg" alt="" className='w-40 lg:w-60' />
            <div className="sm-hidden">
              <SearchBar />
            </div>
            <button className='border text-white sm-hidden md:hidden hover:border-[#E6169B] p-3'>Explore Lessons</button>
            <ConnectWalletButton />
        </div>
        <SearchBarSm />
    </div>
  )
}

export default Navbar
