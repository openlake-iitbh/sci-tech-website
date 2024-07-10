import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import SwiperCore from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        title: 'Advancements in AI ',
        content: 'Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy. Over the years, we have established numerous new clubs and recruited countless individuals who have contributed to our vibrant community. Discover the milestones that define our commitment to innovation, excellence, and community impact.'
    },
    {
        title: 'Advancements in AI in bhilai',
        content: 'Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy. Over the years, we have established numerous new clubs and recruited countless individuals who have contributed to our vibrant community. Discover the milestones that define our commitment to innovation, excellence, and community impact.'
    },
    {
        title: 'Journey through Our Institute’s History And its Achievements.',
        content: 'Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy. Over the years, we have established numerous new clubs and recruited countless individuals who have contributed to our vibrant community. Discover the milestones that define our commitment to innovation, excellence, and community impact.'
    },


]

const TimelineSection = () => {
    
    const events = [
        { date: '4th April 2024', active: true },
        { date: '6th April 2024', active: false },
        { date: 'April 7 2024', active: false },
        { date: '9th & 10th April 2024', active: false },
    ];


    return (
        <section className="section-6 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-start mb-12">
                    <h2 className="text-3xl font-bold font-[junge] underline tracking-wide text-[#0A66C2]">Our Legacy</h2>
                    <div className='flex w-full'>
                        <Swiper
                            style={{ marginLeft: '0' }}
                            modules={[Navigation]}
                            spaceBetween={100}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-nex',
                                prevEl: '.swiper-button-pre',
                            }}
                            className="w-3/4 mt-8"
                        >
                            {data.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <h3 className="text-4xl font-[junge] font-semibold">{member.title}</h3>
                                        <p className="text-sm leading-relaxed mt-4 max-w-2xl font-[poppins]">
                                            {member.content}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className='flex gap-8 items-center mt-4'>
                            <button className='swiper-button-pre border rounded-full w-14 h-14 flex justify-center items-center'>
                                <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.625 11.375H8.51375L16.1213 3.74625L13.125 0.75L0.375 13.5L13.125 26.25L16.1213 23.2538L8.51375 15.625H38.625V11.375Z" fill="white" />
                                </svg>
                            </button>
                            <button className='swiper-button-nex border rounded-full w-14 h-14 flex justify-center items-center'>
                                <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.374998 15.625H30.4862L22.8787 23.2538L25.875 26.25L38.625 13.5L25.875 0.749998L22.8787 3.74625L30.4862 11.375H0.374998V15.625Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 bg-[#0A0A0A]">
                    <button className="p-2 bg-white rounded-full">
                        <FaArrowLeft className="text-black" />
                    </button>
                    <div className="flex items-center justify-between w-full max-w px-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-white hidden md:block"></div>

                            </div>
                            <div className="relative z-10 flex justify-between">
                                {events.map((event, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className={`w-4 h-4 rounded-full ${event.active ? 'bg-blue-500' : 'bg-white'}`}></div>
                                        <div className="mt-2 text-sm text-white">{event.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="p-2 bg-white rounded-full">
                        <FaArrowRight className="text-black" />
                    </button>
                </div>                
                <div className="relative flex items-center mb-12">
                    <span className="absolute left-0 text-6xl text-[#0A66C2] transform -translate-y-1/2">2024</span>
                    <Swiper
                        modules={[Navigation,]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        className=''
                    //   breakpoints={{
                    //     640: {
                    //       slidesPerView: 1,
                    //       spaceBetween: 20,
                    //     },
                    //     768: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 40,
                    //     },
                    //     1024: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 50,
                    //     },
                    //   }}
                    >
                        <SwiperSlide>
                            <div className="bg-[#101323] p-6 rounded-lg ">
                                <img src="timeline.png" alt="Event 1" className="rounded-lg mb-4" />
                                <h4 className="text-xl font-semibold font-[poppins]">Performance at IIT Hyderabad by IIT Bhilai</h4>
                                <p className="text-sm leading-relaxed mt-2">
                                    Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#101323] p-6 rounded-lg ">
                                <img src="timeline.png" alt="Event 2" className="rounded-lg mb-4" />
                                <h4 className="text-xl font-semibold">Performance at IIT Hyderabad by IIT Bhilai</h4>
                                <p className="text-sm leading-relaxed mt-2">
                                    Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#101323] p-6 rounded-lg">
                                <img src="timeline.png" alt="Event 2" className="rounded-lg mb-4" />
                                <h4 className="text-xl font-semibold">Performance at IIT Hyderabad by IIT Bhilai</h4>
                                <p className="text-sm leading-relaxed mt-2">
                                    Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#101323] p-6 rounded-lg">
                                <img src="timeline.png" alt="Event 2" className="rounded-lg mb-4" />
                                <h4 className="text-xl font-semibold">Performance at IIT Hyderabad by IIT Bhilai</h4>
                                <p className="text-sm leading-relaxed mt-2">
                                    Explore the remarkable journey of our SciTech Club, highlighting key moments and significant accomplishments that have shaped our legacy.
                                </p>
                            </div>
                        </SwiperSlide>
                        {/* Add more SwiperSlide components as needed */}
                    </Swiper>
                    <span className="absolute right-0 text-6xl text-[#0A66C2] transform -translate-y-1/2">2023</span>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
