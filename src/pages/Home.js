import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConcentricCircles from "../components/Circles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BlogCard from "../components/BlogCard";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="home-bg">
      <section className="section-1 ">
        <NavBar />
        <div className="mx-auto text-center py-32 relative bg-opacity-70">
          <h1 className="welcome font-bold text-white mb-4">
            Welcome to Scitech Council
          </h1>
          <p className="text-l md:text-2xl text-gray-300">
            We are a group of tech enthusiasts who love to explore and learn new
            things.
          </p>
          {/* <button className="bg-blue-500 rounded hover:bg-blue-700 text-white py-2 px-4 mt-4">Join Us</button> */}
        </div>
      </section>

      <div className="p-8 sm:p-16 w-full h-96">
        <Swiper
          // style={{ marginLeft: '0' }}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full rounded-lg "
        >
          <SwiperSlide>
            <img
              className="m-auto h-full w-full object-cover"
              src="/Devfest_Bhilai x ShutterStories (407 of 71).jpg"
              alt="slide1"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              className="m-auto h-full w-full"
              src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D"
              alt="slide2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="m-auto h-full w-full"
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww"
              alt="slide3"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <section
        id="clubs"
        className="section-2 text-white py-8 relative h-screen overflow-hidden"
      >
        <div className="container mx-auto text-left h-full">
          <h2 className="text-3xl mr-12 font-bold pl-6 sm:pl-0 text-blue-400">
            Clubs
          </h2>
          <ConcentricCircles />
        </div>
      </section>


      <section id="achievements" className="section-5 text-white py-16">
        <div className="flex flex-col mb:flex-row justify-center mb:items-center ">
          <div className="mb:w-1/2 px-4 order-2 mb:order-1 flex justify-center">
            <img
              src="Eyantra.png"
              alt="Achievements"
              className="h-56 w-auto sm:h-auto max-h-96 mb:w-full object-fill object-center rounded-md shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full mb:w-1/2 order-1 mb:order-2 px-4 flex flex-col justify-center">
            <div className="px-4 mb-8">
              <h2 className="home-heading font-bold font-[junge] text-[#0A66C2]">
                Our Achievments
              </h2>
            </div>
            <div className="flex flex-wrap items-center ">
              <div className="w-full px-4 mb-8 ">
                <p className="text-[0.7rem] sm:text-xs md:text-sm lg:text-lg mb-6">
                  Despite our relatively recent inception, the Scitech Council
                  of IIT Bhilai has made significant strides in fostering a
                  culture of innovation and collaboration. Our projects have led
                  to creative solutions and prototypes, showcasing the potential
                  and ingenuity of our members. These achievements, though just
                  the beginning, highlight our commitment to providing valuable
                  learning experiences and inspiring technological advancement.
                </p>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                View All
                            </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>  

      <section id="history" className="section-3 text-white py-4">
        <div className="flex flex-col mb:flex-row justify-center mb:items-center ">
          <div className="container mx-auto px-4 flex flex-col justify-center">
            <div className="px-4 mb-8">
              <h2 className="home-heading font-bold text-blue-400">
                History
              </h2>
            </div>
            <div className="flex flex-wrap items-center ">
              <div className="w-full px-4 mb-8 ">
                <p className="text-[0.7rem] sm:text-xs md:text-sm lg:text-lg mb-6">
                  From our humble beginnings, we have grown into a dynamic
                  council that organizes a diverse range of events, workshops,
                  and projects. These activities not only provide hands-on
                  learning experiences but also foster collaboration and
                  creativity among students. Our journey has been marked by the
                  enthusiastic participation and brilliant contributions of our
                  members, each bringing unique perspectives and talents to the
                  table.
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 flex justify-center">
            <img
              src="history.jpeg"
              alt="History"
              className="h-48 sm:h-auto mb:my-2 object-cover shadow-lg rounded-md transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>       
      </section>

      {/* <section id="blogs" className="section-4 text-white py-16">
        <div className="home-heading px-8 font-[junge] text-[#0A66C2] mb-8">
          Check out Our Blogs
        </div>
        <div className="grid mx-8 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          <BlogCard
            title="Sci-tech club weekly magazine"
            author="Aditya, Indian Institute of technology Bhilai"
            time="5 min read"
            link="#"
          />
          <BlogCard
            title="Sci-tech club weekly magazine"
            author="Aditya, Indian Institute of technology Bhilai"
            time="5 min read"
            link="#"
          />
          <BlogCard
            title="Sci-tech club weekly magazine"
            author="Aditya, Indian Institute of technology Bhilai"
            time="5 min read"
            link="#"
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </section> */}

  

      <Footer />
    </div>
  );
}

export default Home;
