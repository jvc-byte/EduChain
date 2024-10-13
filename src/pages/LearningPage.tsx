import PopularCerticateCourse from '@/components/PopularCerticateCourse'
import NewCerticateCourse from '@/components/NewCerticateCourse'
import Learning from '../../features/Learning/Header'
import Footer from '../components/Footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LearningPage = () => {
  const notify = () => toast("More Content will be Added Soon!");

  return (
    <div className="bg-color h-full">
      <Learning />
      <div className="text-white">
         <h1 className='text-lg lg:text-2xl md:text-lg px-12 lg:px-32 md:px-32 py-5'>Most Popular Certificates</h1>
         <PopularCerticateCourse />
         <button onClick={notify} className='border text-white mx-12 lg:mx-32 md:mx-32 my-10 hover:border-[#E6169B] p-1 w-28'>Load More</button>
      </div>
      <div className="text-white">
         <h1 className='text-lg lg:text-2xl md:text-lg px-12 lg:px-32 md:px-32 py-5'>New On EduChain</h1>
         <NewCerticateCourse />
         <button onClick={notify} className='border text-white mx-12 lg:mx-32 md:mx-32 my-10 hover:border-[#E6169B] p-1 w-28'>Load More</button>
      </div>
      <Footer />
    </div>
  )
}

export default LearningPage
