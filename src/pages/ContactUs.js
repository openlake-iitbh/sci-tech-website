import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaLocationDot } from 'react-icons/fa6';

const ContactUs = () => {
    return (
        <div className="bg-[#030617] flex flex-col justify-center">
            <NavBar />
            <div className="relative md:p-12 flex flex-col md:flex-row gap-10 md:gap-0 items-center md:mx-8">
                <div className="w-full pt-8 pl-10 md:w-1/2 relative text-white font-[poppins]">
                    <h2 className="text-2xl md:text-5xl font-[poppins] font-[600] mb-6">Contact Us<span className='text-[#0A66C2]'>.</span></h2>
                    <div className="border-l-4 border-[#0A66C2] pl-6 py-4">
                        <strong className='opacity-50'>Address</strong>
                        <p className="mb-8 font-[600]">
                            <br />
                            IIT Bhilai, Kutelabhata
                            <br />
                            Bhilai, Durg
                            <br />
                            Chhattisgarh
                        </p>
                        <div className="mb-8">
                            <a href="https://maps.app.goo.gl/gg93jd9WPyVYDwk96" target='_blank' rel='noreferrer' className=" flex items-center underline">
                                <FaLocationDot className='text-red-700 mr-2'></FaLocationDot>See Location
                            </a>
                        </div>
                        <strong className='opacity-50'>Contacts</strong>
                        <p className="">
                            <br />
                            <a href="mailto:scitechcouncil@iitbhilai.ac.in" className="text-blue-400">scitechcouncil@iitbhilai.ac.in</a>
                            <br />
                            9670004551
                        </p>
                    </div>
                </div>
                <div className="w-[80%] md:w-1/2 bg-[#FFFFFF0D] relative shadow-lg font-[poppins] font-[600]">
                    <h3 className="w-fit absolute -top-5 left-0 right-0 mx-auto text-2xl font-bold text-white z-50">Contact Form</h3>
                    <form className='p-6 m-4'>
                        <div className="mb-4">
                            {/* <label className="block text-white mb-2">Name</label> */}
                            <input type="text" placeholder='Name' required className="w-full p-2 border-b-2 border-[#FFFFFF80] divide-solid bg-transparent text-white focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            {/* <label className="block text-white mb-2">Email</label> */}
                            <input type="email" placeholder='Email' required className="w-full p-2 border-b-2 border-[#FFFFFF80] divide-solid bg-transparent text-white focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            {/* <label className="block text-white mb-2">Subject</label> */}
                            <input type="text" placeholder='Subject' className="w-full p-2 border-b-2 border-[#FFFFFF80] divide-solid bg-transparent text-white focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            {/* <label className="block text-white mb-2">Message</label> */}
                            <textarea placeholder='Message' className="w-full p-2 border-b-2 border-[#FFFFFF80] divide-solid bg-transparent text-white focus:outline-none"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-send-linear text-white p-2 rounded">Send Message</button>
                        </div>
                    </form>
                    <div className="absolute md:-m-8 top-0 left-0 w-1/4 h-1/4 border-t-4 border-l-4 border-blue-500"></div>
                    <div className="absolute md:-m-8 top-0 right-0 w-1/4 h-1/4 border-t-4 border-r-4 border-blue-500"></div>
                    <div className="absolute md:-m-8 bottom-0 left-0 w-1/4 h-1/4 border-b-4 border-l-4 border-blue-500"></div>
                    <div className="absolute md:-m-8 bottom-0 right-0 w-1/4 h-1/4 border-b-4 border-r-4 border-blue-500"></div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactUs;
