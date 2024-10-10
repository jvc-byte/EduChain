import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='flex justify-center'>
      <div className="m-auto">
        <div className="text-center">
            <img src="./logo.svg" alt="" className='m-auto w-80'/>
            <h1 className='text-[30px] px-4 lg:px-0 md:px-0 lg:text-[50px] md:text-[50px]  w-full lg:w-[750px] font-bold text-white'>Begin Your Journey in web3 and blockchain Learn without Limits</h1>
            <Link
              to="/learningpage"
              >
                <button className='text-white bg-button border py-4 px-20 my-4'>EXPLORE LESSONS</button>                
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Explore
