
const Footer = () => {
  return (
    <div className="footer-bg">
        <div className="flex justify-between gap-10 text-white px-5 lg:px-32 md:px-32 border-t-2 border-[#1600a6]">
        
            <div className="flex gap-10 lg:gap-20 md:gap-16">
                <div className="block list-none underline py-5 flex-shrink-0">
                    <a><li>EduChain</li> </a>
                    <a><li>Teach on EduChain</li> </a>
                    <a><li>About us</li></a>
                    <a><li>Contact us</li></a>
                </div>
            
                <div className="block list-none underline py-5">
                    <a><li>Terms</li></a>
                    <a><li>Privacy</li></a>
                    <a><li>Help</li></a>
                    <a><li>FAQ</li></a>
                </div>
            </div>
       
            <div className="flex items-center gap-1 my-5 h-10 px-5 lg:border md:border lg:border-red-500 md:border-red-500">
             <img src="/english.svg" alt="" className="h-4 w-4 lg:h-7 lg:w-7 md:h-6 md:w-6" />
             <h1>English</h1>
            </div>
        
        </div>
        <div className="flex justify-between items-center px-5 lg:px-28 md:px-28 border-none">
            <img src="/logo.svg" alt="" className="w-32 lg:w-40 md:w-40"/>
            <h2 className="text-white flex-shrink-0">© 2024 EduChain.</h2>
        </div>
    </div>
    
  )
}

export default Footer
