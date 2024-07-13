import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ConcentricCircles from "../components/Circles";
import { useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BlogCard from "../components/BlogCard";


function Home() {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            ;
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    return (
        <div className="home-bg">
            <section className="section-1 ">
                <NavBar />
                <div className="mx-auto text-center py-32 relative bg-opacity-70">

                    <h1 className="text-6xl font-bold text-white">Welcome to Scitech Council</h1>
                    <p className="text-2xl text-gray-300">We are a group of tech enthusiasts who love to explore and learn new things.</p>
                    <button className="bg-blue-500 rounded hover:bg-blue-700 text-white py-2 px-4 mt-4">Join Us</button>
                </div>
            </section>
            <div className="p-16 w-full h-96">
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
                        <img className="m-auto h-full w-full" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" alt="slide1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="m-auto h-full w-full" src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D" alt="slide2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="m-auto h-full w-full" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww" alt="slide3" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <section id="clubs" className="section-2 text-white py-8 relative h-screen overflow-hidden">
                {/* {init && (
                    <Particles
                        className="z-0"
                        id="tsparticles"
                        options={options}
                        container={particlesLoaded}
                    />
                )} */}
                <div className="container mx-auto text-left h-full">
                    <h2 className="text-3xl font-bold text-blue-400">Clubs</h2>
                    <ConcentricCircles />
                </div>
            </section>
            <section id="history" className="section-3 text-white py-4 grid md:grid-cols-2">
                <div className="container mx-auto px-4  flex flex-col justify-center">
                    <div className="px-4 mb-8">
                        <h2 className="text-4xl font-bold text-blue-400">History of the Club</h2>
                    </div>
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full px-4 mb-8 ">
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container bg-custom-radial mx-auto px-4  grid grid-cols-2 gap-4">
                    <div > {/* column-1 */}
                        <div className="overflow-hidden rounded-lg">
                            <img src='history2.png' alt="History 1" className="w-full my-2 h-[250px] object-cover" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src='history4.png' alt="History 2" className="w-full my-2 h-[250px] object-cover" />
                        </div></div>
                    <div>{/* column-2 */}
                        <div className="overflow-hidden rounded-lg">
                            <img src='history1.png' alt="History 3" className="w-full my-2 h-[250px] object-cover" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src='history3.png' alt="History 4" className="w-full my-2 h-[250px] object-cover" />
                        </div></div>

                </div>
            </section>
            <div className="flex justify-center  md:items-start md:mx-28 ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Learn More
                </button>
            </div>

            <section id="blogs" className="section-4 text-white py-16">
                <div className="text-5xl px-8 font-[junge] text-[#0A66C2] mb-8">Check out Our Blogs</div>
                <div className="grid justify-center md:grid-cols-3" >
                    <div className="flex justify-center my-4 mx-4">
                        <BlogCard
                            title="Sci-tech club weekly magazine"
                            author="Aditya, Indian Institute of technology Bhilai"
                            time="5 min read"
                            link="#"
                        /></div>
                    <div className="flex justify-center my-4 mx-4">
                        <BlogCard
                            title="Sci-tech club weekly magazine"
                            author="Aditya, Indian Institute of technology Bhilai"
                            time="5 min read"
                            link="#"
                        /></div>
                    <div className="flex justify-center my-4 mx-4">
                        <BlogCard
                            title="Sci-tech club weekly magazine"
                            author="Aditya, Indian Institute of technology Bhilai"
                            time="5 min read"
                            link="#"
                        /></div>
                </div>
                <div className="text-center mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                        Learn More
                    </button>
                </div>
            </section>
            <section id="achievements" className="section-5 text-white py-16 grid md:grid-cols-2">
                <div className="container bg-custom-radial mx-auto px-4  grid grid-cols-2 gap-4">
                <div > {/* column-1 */}
                    <div className="overflow-hidden rounded-lg">
                        <img src='history2.png' alt="History 1" className="w-full my-2 h-[250px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history4.png' alt="History 2" className="w-full my-2 h-[250px] object-cover" />
                    </div>
                </div>
                <div>{/* column-2 */}
                    <div className="overflow-hidden rounded-lg">
                        <img src='history1.png' alt="History 3" className="w-full my-2 h-[250px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history3.png' alt="History 4" className="w-full my-2 h-[250px] object-cover" />
                    </div>
                </div>
            </div>
                <div className="container mx-auto px-4  flex flex-col justify-center">
                    <div className="px-4 mb-8">
                        <h2 className="text-4xl font-bold font-[junge] text-[#0A66C2]">Our Achievments</h2>
                    </div>
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full px-4 mb-8 ">
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;