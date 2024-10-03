import PopularCerticateCourse from '@/components/PopularCerticateCourse'
import NewCerticateCourse from '@/components/NewCerticateCourse'
import Learning from '../../features/Learning/Header'
import Footer from '../components/Footer'
const LearningPage = () => {
  return (
    <div className="bg-color h-full">
      <Learning />
      <div className="text-white">
         <h1 className='text-xl lg:text-2xl md:text-lg px-32 py-5'>Most Popular Certificates</h1>
         <PopularCerticateCourse />
         <button className='border text-white mx-12 lg:mx-32 md:mx-32 my-10 hover:border-[#E6169B] p-1 w-28'>Load More</button>
      </div>
      <div className="text-white">
         <h1 className='text-xl lg:text-2xl md:text-lg px-32 py-5'>New On EduChain</h1>
         <NewCerticateCourse />
         <button className='border text-white mx-12 lg:mx-32 md:mx-32 my-10 hover:border-[#E6169B] p-1 w-28'>Load More</button>
      </div>
      <Footer />
    </div>
  )
}

export default LearningPage
