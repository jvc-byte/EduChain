import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='flex justify-center'>
      <div className="m-auto">
        <div className="">
          <div className="flex m-auto justify-center items-center gap-2">
          <img src="./tea.jpg" alt="" className=' w-28'/>
          <h1 className='text-3xl'>Tea Protocol</h1>
          </div>
            <h1 className='text-[30px] px-4 lg:px-0 md:px-0 lg:text-[50px] md:text-[50px]  w-full lg:w-[750px] font-bold text-white'>Begin Your Journey in web3 and blockchain Learn without Limits</h1>
            <Link
              to="/learningpage"
              className='mx-auto flex justify-center'
              >
                <button className='text-white bg-button border py-4 px-20 my-4'>EXPLORE LESSONS</button>                
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Explore
