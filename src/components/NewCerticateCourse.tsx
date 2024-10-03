import { NewCertificateCourse } from "../../const"
const NewCerticateCourse = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-12 lg:mx-32 md:mx-32 gap-10">
        {NewCertificateCourse.map((make) => (
            <div className="space-y-4 pt-5" key={make.id}>
                <div className="block items-center text-white border p-4 border-[#1600a6] w-full lg:w-80 md:w-80 ">
                    <img src={make.imageUrl} alt="" className='h-full lg:h-52 md:h-52 w-full object-cover' />
                    <div className='space-y-5 p-5 lg:p-0 md:p-0'>
                        <h1 className='text-3xl '>{make.title}</h1>
                        <p className='text-xs'>{make.description}</p>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1.5">
                                <img src={make.logo} alt="" className='h-7 w-7' />
                                <h1>{make.name}</h1>
                            </div>
                            <button className='border text-white flex-shrink-0 text-sm lg:text-lg md:text-lg hover:border-[#E6169B] p-3'>Start Lesson</button>
                        </div>
                    </div>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default NewCerticateCourse
