import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {

    const BlogCard = ({ title, author, time, link }) => {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <img className="w-full" src="blog.png" alt="Blog" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 dark:text-gray-300 text-base">{author}</p>
                    <div className="flex space-x-2 items-center">
                        <svg width="15" height="15" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0859 1.17161C12.8893 0.737754 11.7362 0.544264 10.724 0.527077C9.14323 0.551556 8.04948 0.981504 7.5 1.24895C6.95052 0.981504 5.83073 0.551035 4.29167 0.526556C3.25 0.525254 2.09375 0.744004 0.914062 1.17161C0.369271 1.36848 0 1.8914 0 2.47187V10.3599C0 10.7417 0.179036 11.0906 0.491927 11.3182C0.799479 11.5404 1.18568 11.6042 1.5526 11.4948C4.64896 10.5485 7.00313 11.9909 7.13333 12.0727C7.23438 12.1307 7.32292 12.1932 7.47656 12.1932C7.64635 12.1932 7.7401 12.1314 7.84297 12.074C8.1237 11.8998 10.4029 10.5724 13.4237 11.4941C13.7911 11.6047 14.1753 11.5396 14.4849 11.3167C14.8203 11.0891 15 10.7401 15 10.3599V2.47187C15 1.89166 14.6302 1.369 14.0859 1.17161ZM7.08333 11.1021C6.43359 10.7888 5.23411 10.3372 3.6849 10.3372C2.96016 10.3372 2.16146 10.4365 1.31016 10.6958C1.19542 10.7308 1.07578 10.7113 0.979687 10.6425C0.885937 10.5734 0.833333 10.451 0.833333 10.3599V2.47187C0.833333 2.24117 0.978177 2.03359 1.19427 1.95546C2.28281 1.56041 3.33073 1.35859 4.28385 1.35989C5.63281 1.38098 6.61979 1.75729 7.08333 1.97604V11.1021ZM14.1667 10.3599C14.1667 10.4738 14.1142 10.5743 14.021 10.6422C13.9229 10.7126 13.8049 10.7313 13.6905 10.6975C11.0443 9.89114 8.88802 10.6411 7.91667 11.1073V1.97604C8.38021 1.75729 9.36719 1.38098 10.7135 1.35989C11.6331 1.35825 12.7016 1.55479 13.8073 1.95572C14.0208 2.03385 14.1667 2.24114 14.1667 2.47187V10.3599Z" fill="#94A3B8" />
                        </svg>
                        <p className="text-gray-700 dark:text-gray-300 text-base">{time}</p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href={link} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                        Read More &rarr;
                    </a>
                </div>
            </div>
        );
    };

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
            <section className="section-2 text-white py-16 relative overflow-hidden">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">Clubs</h2>
                    <div className="relative">
                        <img
                            src='sun.png'
                            alt="Sun"
                            className="w-40 h-40 mx-auto animate-spin-slow"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="relative">
                                <div className="animate-spin-slow">
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className="absolute"
                                            style={{
                                                transform: `rotate(${index * 36}deg) translate(150px) rotate(-${index * 36}deg)`,
                                            }}
                                        >
                                            <img
                                                src='iit-bh-logo.png'
                                                alt="Club Logo"
                                                className="w-16 h-16"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3 text-white py-16 flex">
                <div className="container mx-auto px-4 md:w-1/2 flex flex-col justify-center">
                    <div className="px-4 mb-8">
                        <h2 className="text-4xl font-bold text-blue-400">History of the Club</h2>
                    </div>
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full px-4 mb-8 ">
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Sit amet nulla facilisi morbi tempus iaculis. Arcu ac tortor dignissim convallis aenean et tortor at risus.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container bg-custom-radial mx-auto px-4 md:w-1/2 grid grid-cols-2 gap-4">

                    <div className="overflow-hidden rounded-lg">
                        <img src='history2.png' alt="History 1" className="w-[278px] h-[280px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history4.png' alt="History 2" className="w-[329px] h-[200px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history1.png' alt="History 3" className="w-[500px] h-[280px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history3.png' alt="History 4" className="w-[275px] h-[300px] object-cover" />
                    </div>
                </div>
            </section>
            <section className="section-4 text-white py-16">
                <div className="text-5xl px-8 font-[junge] text-[#0A66C2] mb-8">Check out Our Blogs</div>
                <div className="flex px-8 justify-center space-x-4">
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
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Learn More
                    </button>
                </div>
            </section>
            <section className="section-5 text-white py-16 flex">
                <div className="container bg-custom-radial mx-auto px-4 md:w-1/2 grid grid-cols-2 gap-4">

                    <div className="overflow-hidden rounded-lg">
                        <img src='history2.png' alt="History 1" className="w-[278px] h-[280px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history4.png' alt="History 2" className="w-[329px] h-[200px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history1.png' alt="History 3" className="w-[500px] h-[280px] object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                        <img src='history3.png' alt="History 4" className="w-[275px] h-[300px] object-cover" />
                    </div>
                </div>
                <div className="container mx-auto px-4 md:w-1/2 flex flex-col justify-center">
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