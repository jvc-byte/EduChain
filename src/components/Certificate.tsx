import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Certificate = () => {
  const completedCourses = useSelector((state) => state.course.completedCourses);
  const [address, setAddress] = useState('');

  const handleSubmit = (e, course) => {
    e.preventDefault();

    // Form validation logic (e.g., checking if address is not empty)
    if (!address.trim()) {
      alert('Please enter an address to receive the certificate.');
      return;
    }

    // Submission logic (e.g., sending data to the server or performing some action)
    const formData = {
      certificateName: course.title,
      certificateId: course.id,
      certificatePrice: course.certificatePrice,
      address: address,
    };

    console.log('Form Data:', formData);
    // You can add your submission logic here, like sending data to an API or updating the state
    // Example: apiCallToMintCertificate(formData);
  };

  return (
    <div className="">
      <h1 className="text-3xl text-white pl-12 py-2 lg:pl-32 md:pl-32">Mint Certificate</h1>
      {completedCourses.length === 0 ? (
        <p className='ml-12 lg:ml-32 md:ml-32 h-72'>No course completed yet.</p>
      ) : (
        <div className=''>
          {completedCourses.map((course) => (
            <div className="space-y-5 py-5 flex" key={course.id}>
              <div className="mx-auto border w-[80%] border-[#1600a6] h-full text-white">
                <div className="block gap-10 w-full lg:w-[80%]">
                  <div className="block lg:flex gap-10 my-10 mx-5">
                    <img src={course.imageUrl} className='h-full w-full object-cover lg:w-[60%]' alt="" />
                    <div className="mb-5">
                      <form onSubmit={(e) => handleSubmit(e, course)}>
                        <div className="space-y-6 mt-5 lg:mt-0">
                          <div className="space-y-2">
                            <label htmlFor="">Certificate Name</label>
                            <input disabled value={course.title} className='block cursor-pointer px-5 w-full lg:w-[28rem] bg-[#040B35] h-12 border border-[#cacaca85]' type="text" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="">Address</label>
                            <input
                              className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder='Address to receive certificate'
                              type="text"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="">Certificate ID</label>
                            <input disabled value={course.id} className='block cursor-pointer px-5 w-full lg:w-[28rem] bg-[#040B35] h-12 border border-[#cacaca85]' type="text" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="">Certificate Price (ETH)</label>
                            <input disabled value={course.certificatePrice} className='block cursor-pointer px-5 w-full lg:w-[28rem] bg-[#040B35] h-12 border border-[#cacaca85]' type="text" />
                          </div>
                          <button type='submit' className="border text-white hover:border-[#E6169B] p-3 flex-shrink-0 text-sm lg:text-lg md:text-lg">Mint Certificate</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certificate;
