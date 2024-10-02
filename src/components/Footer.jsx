
const Footer = () => {
  return (
    <div className="footer-bg">
        <div className="flex justify-between gap-10 text-white px-5 lg:px-32 md:px-32 border border-t-2 border-b-0 border-[#1600a6]">
        
            <div className="flex gap-20">
                <div className="block list-none underline py-5">
                    <a><li href="">EduChain</li> </a>
                    <a><li href="">Teach on EduChain</li> </a>
                    <a><li href="">About us</li></a>
                    <a><li href="">Contact us</li></a>
                </div>
            
                <div className="block list-none underline py-5">
                    <a><li href="">Terms</li></a>
                    <a><li href="">Privacy</li></a>
                    <a><li href="">Help</li></a>
                    <a><li href="">FAQ</li></a>
                </div>
            </div>
       
            <div className="flex gap-1.5 py-5 ">
             <img src="./english.svg" alt="" className="h-7 w-7" />
             <h1>English</h1>
            </div>
        
        </div>
        <div className="flex justify-between items-center px-5 lg:px-28 md:px-28 border-none">
            <img src="./logo.svg" alt="" />
            <h2 className="text-white flex-shrink-0">© 2024 EduChain.</h2>
        </div>
    </div>
    
  )
}

export default Footer
