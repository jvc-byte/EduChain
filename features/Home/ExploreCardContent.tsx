import ExploreCard from '../../src/components/ExploreCard'

const ExploreCardContent = () => {
  return (
    <div className='h-full flex justify-center w-full'>
        <div className="w-[80%] space-y-5 py-8 text-black">
          <h1 className='text-3xl font-bold text-white'>Explore Educhain</h1>
          <div className="block lg:flex md:flex justify-between">
            <ExploreCard 
             imageUrl='./start1.svg' 
             title='Base' 
            />
            <ExploreCard 
             imageUrl='./start2.svg' 
             title='Ethereum'
            />
            <ExploreCard 
             imageUrl='./start3.svg' 
             title='Web 3' 
            />
            </div>
            <div className='block lg:flex md:flex justify-between'>
            <ExploreCard 
             imageUrl='./start1.svg' 
             title='Base' 
            />
            <ExploreCard 
             imageUrl='./start2.svg' 
             title='Ethereum'
            />
            <ExploreCard 
             imageUrl='./start3.svg' 
             title='Web 3' 
            />
          </div>
        </div>
    </div>
  )
}

export default ExploreCardContent
