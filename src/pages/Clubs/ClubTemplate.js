import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BlogCard from '../../components/BlogCard';

const ClubTemplate = ({clubName, clubLogo, instagram, linkedin, twitter, youtube, github,
    images, blogs, clubMembers, clubAgenda, clubDescription}) => {
   const swiperRef1 = useRef(null);
   const swiperRef2 = useRef(null);

   const [selectedImage, setSelectedImage] = useState(null);
   const [isEnlargedView, setIsEnlargedView] = useState(false);
   const [isBlogVisible, setIsBlogVisible] = useState(false);
   const [currentBlog, setCurrentBlog] = useState(null);

   const openImage = (index) => {
       setSelectedImage(index);
       setIsEnlargedView(true);
   };
   window.addEventListener('keydown', (e) => {
       if (isEnlargedView) {
           if (e.key === 'Escape') {
               closeImage();
           } else if (e.key === 'ArrowLeft') {
               navigateImage('prev');
           }
           else if (e.key === 'ArrowRight') {
               navigateImage('next');
           }
       }
   });

   const closeImage = () => {
       setIsEnlargedView(false);
   };

   const navigateImage = (direction) => {
       if (direction === 'prev') {
           setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
       } else {
           setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
       }
   };
   const handleBlogClick = (blog) => {
       setCurrentBlog(blog);
       setIsBlogVisible(true);
   };

   return (
       <div className="flex h-screen bg-[#101323] text-white">
           {/* Left Sidebar */}
           <div className="w-1/4 flex flex-col p-2 h-full">
               <div className="flex items-center justify-center gap-2">
                   <a href='/'><img src={`/club_logo/${clubLogo}`} alt="Logo" className="h-8 w-8 sm:h-14 sm:w-14" /></a>
                   <a className='hidden sm:flex' href='/'><h1 className="text-sm sm:text-xl font-[poppins]">{clubName}</h1></a>
               </div>
               <div className="flex flex-1 flex-col items-center justify-center relative">
                   <Swiper
                       style={{ marginLeft: 0 }}
                       modules={[Navigation, Controller]}
                       spaceBetween={10}
                       slidesPerView={1}
                       navigation={{
                           nextEl: '.swiper-button-nex',
                           prevEl: '.swiper-button-pre',
                       }}
                       direction='vertical'
                       className='w-32 h-48 '
                       onSwiper={(swiper) => { swiperRef1.current = swiper; }}
                       controller={{ control: swiperRef2.current }}
                   >
                       <SwiperSlide>
                           <div className="absolute top-1/2  transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                               <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">Gallery</h2>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="absolute top-1/2  transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                               <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">Blogs</h2>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="absolute top-1/2  transform -translate-x-1/4 lg:-translate-x-0 -translate-y-1/2 -rotate-90">
                               <h2 className="text-5xl text-[#EEE8F3] font-bold font-[junge]">About</h2>
                           </div>
                       </SwiperSlide>
                   </Swiper>
                   <hr className="absolute border -rotate-90 border-[#EEE8F3] w-full" />
                   <div className="absolute right-1/4 flex flex-col items-center space-y-2 mt-4">
                       <button className="hover:transform hover:scale-150 text-4xl swiper-button-pre"><i className="fas fa-chevron-up"></i></button>
                       <button className="hover:transform hover:scale-150 text-4xl swiper-button-nex"><i className="fas fa-chevron-down"></i></button>
                   </div>
               </div>
           </div>

           {/* Main Content */}
           <div className="flex-1 flex flex-col w-full bg-[#030617] h-screen">
               {/* Header */}
               <div className=" p-4 flex justify-end items-center">
                   {/* <h2 className="sm:text-2xl font-bold"></h2> */}
                   <div className="flex space-x-4">
                       {instagram && <a href={instagram} target='_blank' rel='noreferrer' className="text-white hover:text-red-500"><i className="fab fa-instagram"></i></a>}
                       {linkedin && <a href={linkedin} target='_blank' rel='noreferrer' className="text-white hover:text-blue-500"><i className="fab fa-linkedin"></i></a>}
                       {twitter &&<a href={twitter} target='_blank' rel='noreferrer' className="text-white hover:text-blue-500"><i className="fab fa-twitter"></i></a>}
                       {youtube &&<a href={youtube} target='_blank' rel='noreferrer' className="text-white hover:text-red-500"><i className="fab fa-youtube"></i></a>}
                       {github &&<a href={github} target='_blank' rel='noreferrer' className="text-white hover:text-blue-500"><i className="fab fa-github"></i></a>}
                   </div>
               </div>

               {/* Swiper Section */}
               <Swiper

                   modules={[Navigation, Controller]}
                   spaceBetween={10}
                   slidesPerView={1}
                   navigation={{
                       nextEl: '.swiper-button-nex',
                       prevEl: '.swiper-button-pre',
                   }}
                   direction='vertical'
                   onSwiper={(swiper) => { swiperRef2.current = swiper; }}
                   controller={{ control: swiperRef1.current }}
               >
                   <SwiperSlide >
                       <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll h-full">
                           {images.map((image, index) => (
                               <img key={index} onClick={() => openImage(index)} src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover cursor-pointer rounded-lg" />
                           ))}
                           {/* Add more images as needed */}
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className="relative h-full">
                           <div className={`p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll h-full ${isBlogVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                               {blogs.map((blog, index) => (
                                   <BlogCard
                                       key={index}
                                       onClick={() => handleBlogClick(blog)}
                                       title={blog.title}
                                       author={blog.author}
                                       time={blog.time}
                                   />
                               ))}
                           </div>

                           {isBlogVisible && (
                               <div className="fixed z-50 inset-0 bg-opacity-75 flex justify-end items-center transition-all transform translate-x-0">
                                   <button onClick={() => setIsBlogVisible(false)} className="absolute top-4 left-4 text-white">
                                       <i class="fas fa-arrow-left text-white" />
                                   </button>
                                   <div className="w-full h-full rounded-md p-4 overflow-auto">
                                       <div className="flex flex-col justify-center items-center mt-[2%]">
                                           {/* Give the Image access to this also */}
                                           <div className='h-48 w-full px-8'><img className="w-full h-full object-cover object-center rounded-xl" src="/blog.png" alt="Blog" /></div>
                                           <div className="px-6 py-4 flex flex-1 flex-col gap-3">
                                               <div className="text-blue-500 text-lg font-bold sm:text-2xl lg:text-3xl mb-2">{currentBlog.title}</div>
                                               <p className="text-gray-700 dark:text-gray-300 text-base">{currentBlog.author}</p>

                                               <div className="flex space-x-2 items-center">
                                                   <svg width="15" height="15" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M14.0859 1.17161C12.8893 0.737754 11.7362 0.544264 10.724 0.527077C9.14323 0.551556 8.04948 0.981504 7.5 1.24895C6.95052 0.981504 5.83073 0.551035 4.29167 0.526556C3.25 0.525254 2.09375 0.744004 0.914062 1.17161C0.369271 1.36848 0 1.8914 0 2.47187V10.3599C0 10.7417 0.179036 11.0906 0.491927 11.3182C0.799479 11.5404 1.18568 11.6042 1.5526 11.4948C4.64896 10.5485 7.00313 11.9909 7.13333 12.0727C7.23438 12.1307 7.32292 12.1932 7.47656 12.1932C7.64635 12.1932 7.7401 12.1314 7.84297 12.074C8.1237 11.8998 10.4029 10.5724 13.4237 11.4941C13.7911 11.6047 14.1753 11.5396 14.4849 11.3167C14.8203 11.0891 15 10.7401 15 10.3599V2.47187C15 1.89166 14.6302 1.369 14.0859 1.17161ZM7.08333 11.1021C6.43359 10.7888 5.23411 10.3372 3.6849 10.3372C2.96016 10.3372 2.16146 10.4365 1.31016 10.6958C1.19542 10.7308 1.07578 10.7113 0.979687 10.6425C0.885937 10.5734 0.833333 10.451 0.833333 10.3599V2.47187C0.833333 2.24117 0.978177 2.03359 1.19427 1.95546C2.28281 1.56041 3.33073 1.35859 4.28385 1.35989C5.63281 1.38098 6.61979 1.75729 7.08333 1.97604V11.1021ZM14.1667 10.3599C14.1667 10.4738 14.1142 10.5743 14.021 10.6422C13.9229 10.7126 13.8049 10.7313 13.6905 10.6975C11.0443 9.89114 8.88802 10.6411 7.91667 11.1073V1.97604C8.38021 1.75729 9.36719 1.38098 10.7135 1.35989C11.6331 1.35825 12.7016 1.55479 13.8073 1.95572C14.0208 2.03385 14.1667 2.24114 14.1667 2.47187V10.3599Z" fill="#94A3B8" />
                                                   </svg>

                                                   <p className="text-gray-700 dark:text-gray-300 text-base">{currentBlog.time}</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div>
                                           <h1 className="font-semibold text-xl mt-2"> Exploring The Boundaries Of Spaces :</h1>
                                           <p>
                                               {currentBlog.content}
                                           </p>
                                       </div>
                                   </div>
                               </div>
                           )}
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className='p-6 overflow-y-scroll h-full'>
                           <div className="flex gap-8 mb-8">
                               <img src={`/club_logo/${clubLogo}`} className='h-16 w-16' alt='BIB'></img>
                               <div className="">
                                   <h2 className="text-4xl font-[600] font-[poppins] text-[#0A66C2]">{clubName}</h2>
                                   <p className="text-sm font-[poppins]">10 Core Members | 50 Members </p>
                               </div>
                           </div>
                           <div className="flex flex-col gap-4 mb-8">
                               <h2 className="text-xl font-[400] font-[poppins] text-[#0A66C2]">What are we about</h2>
                               <p className="text-sm font-[poppins]">{clubDescription}</p>
                           </div>
                           <div className="flex flex-col gap-4 mb-8">
                               <h2 className="text-xl font-[400] font-[poppins] text-[#0A66C2]">What do we do</h2>
                               <p className="text-sm font-[poppins]">{clubAgenda}</p>
                           </div>
                           <div className="flex flex-col gap-4 mb-8">
                               <h2 className="text-xl font-[400] font-[poppins] text-[#0A66C2]">Why should you join us?</h2>
                               <p className="text-sm font-[poppins]">By joining the ClubTemplate Club, you'll gain access to a wealth of resources, including:</p>
                               <p className='text-sm font-[poppins] font-[400]'><strong className='font-[600]'>Knowledge:</strong> Stay updated with the latest trends and developments in ClubTemplate technology. </p>
                               <p className='text-sm font-[poppins] font-[400]'><strong className='font-[600]'>Community:</strong> Be part of a supportive and enthusiastic group that shares your passion for ClubTemplate. </p>
                               <p className='text-sm font-[poppins] font-[400]'><strong className='font-[600]'>Innovation:</strong> Contribute to cutting-edge projects and be at the forefront of ClubTemplate innovation. </p>
                           </div>
                           <div className="flex flex-col gap-4 mb-8">
                               <h2 className="text-2xl md:text-4xl tracking-wider leading-[99px] font-[junge] text-outline mb-12 text-center">THE MINDS BEHIND THE CLUB</h2>
                               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                   {clubMembers.map((member, index) => (
                                       <div key={index} className="flex flex-col items-center">
                                           <img src={member.icon} className="h-24 w-24 rounded-full" alt={member.name} />
                                           <h3 className="text-lg text-center font-[poppins] font-[500]">{member.name}</h3>
                                           <p className="text-sm font-[poppins] font-[300]">{member.position}</p>
                                           <p className="text-xs text-blue-600 font-[poppins] font-[300]">{member.email}</p>
                                           
                                       </div>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
               </Swiper>
               {isEnlargedView && (
                   <div className="fixed z-50 w-full inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                       <button onClick={closeImage} className="absolute top-4 right-4 text-white">
                           <i className="fas fa-times fa-2x text-red-500"></i>
                       </button>
                       <button onClick={() => navigateImage('prev')} className="absolute left-[15%] text-white">
                           <i className="fas fa-chevron-left fa-2x  text-blue-800"></i>
                       </button>
                       <img src={images[selectedImage]} alt="" className="w-2/3 h-2/3 rounded-md object-contain bg-center" />
                       <button onClick={() => navigateImage('next')} className="absolute right-[15%] text-white">
                           <i className="fas fa-chevron-right fa-2x text-blue-800"></i>
                       </button>
                   </div>
               )}
           </div>
       </div>
   );
};

export default ClubTemplate;