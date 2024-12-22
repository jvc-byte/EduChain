import { Link } from 'react-router-dom';
import ConnectWalletButton from './ConnectWalletButton'
import SearchBar from "./SearchBar";
import SearchBarSm from "./SearchBarSm";


const Navbar = () => {
  return (
    <div className="">
        <div className='flex items-center justify-between py-5 lg:py-3 md:py-3 lg:justify-evenly'>
            <Link to={'/'} className='flex items-center gap-2' >
              <img src="/tea.jpg" alt="" className='w-28 lg:w-28 h-full lg:h-28' />
              <h1 className='text-3xl sm-hidden'>Tea Protocol</h1>
            </Link>
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
