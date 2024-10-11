import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BecomeInstructor = () => {
  const notify = () => toast("Feature Coming Soon!");
  return (
    <div className="space-y-5 py-14 flex">
        <div className="mx-auto w-[80%] text-white">
            <div className="block lg:flex md:flex items-center gap-10 w-full lg:w-[80%] md:w-[80%]">
                <img src="./tutor.svg" alt="" className='h-full lg:h-64 md:h-64 w-full object-cover lg:w-[60%] border-[#1600a6]' />
                <div className='space-y-5 p-5 lg:p-0 md:p-0'>
                    <h1 className='text-3xl '>Become an Instructor</h1>
                    <p className='text-xs'>Web3 Instructors worldwide empower millions of learners on Educhain. We offer the tools and resources you need to share your passion and teach what you love.</p>
                    <button onClick={notify} className='border text-white hover:border-[#E6169B] p-3'>Start Teaching Today</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BecomeInstructor
