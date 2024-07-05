import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimelineSection from "../components/Timeline";
export const OurStory = () => {
    return (
        <div className="text-white flex flex-col lg:flex-row m-8 lg:m-20 overflow-hidden rounded-lg">
            {/* Image */}
            <img
                src="Arbaz shaikh.jpg"
                className="h-auto lg:h-[100vh] w-full lg:w-1/2 object-cover"
                alt="Our Story"
            />
            <div className="w-full lg:w-1/2 h-auto lg:h-[100vh] bg-gray-600 flex items-center justify-center">
                <div className="p-8 lg:p-12 m-6 lg:m-12 flex flex-col items-center justify-center gap-6 pt-10">
                    <h1 className="text-4xl font-[junge] font-semibold text-center">
                        OUR <span className="text-sky-500">STORY</span>
                    </h1>
                    <p className="text-2xl font-[junge] text-center">"Innovate, Collaborate, Excel"</p>
                    <p className="text-center">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
            </div>
        </div>

    )
};

const teamMembers = [
    {
        name: 'Sai Surya Kinguu',
        position: 'Design Lead',
        email: 'sai.surya@institute.in',
        phone: '+9187654321',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        image: 'https://via.placeholder.com/100', // replace with actual image URL
    },
    {
        name: 'Sai Surya Kinguu',
        position: 'Design Lead',
        email: 'sai.surya@institute.in',
        phone: '+9187654321',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        image: 'https://via.placeholder.com/100', // replace with actual image URL
    },
    {
        name: 'Sai Surya Kinguu',
        position: 'Design Lead',
        email: 'sai.surya@institute.in',
        phone: '+9187654321',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        image: 'https://via.placeholder.com/100', // replace with actual image URL
    },
    {
        name: 'Sai Surya Kinguu',
        position: 'Design Lead',
        email: 'sai.surya@institute.in',
        phone: '+9187654321',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        image: 'https://via.placeholder.com/100', // replace with actual image URL
    },
    {
        name: 'Sai Surya Kinguu',
        position: 'Design Lead',
        email: 'sai.surya@institute.in',
        phone: '+9187654321',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        image: 'https://via.placeholder.com/100', // replace with actual image URL
    },
    // Add more members as needed
];

function About() {

    // Our Story Function

    return (
        <div className="home-bg">
            <div className="about-section-2">
                <NavBar />
                <h1 className="w-fit text-[3rem] text-sky-500 font-bold m-auto mt-[10rem]">About Us</h1>
            </div>

            {/* Adding everything based on the function */}
            <OurStory />

            {/* Corousel */}
            <TimelineSection />

            <section className="section-3">
                <div className="py-16 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-y-8 lg:gap-y-32">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className=" bg-[#101323] p-6 rounded-lg text-center flex-1">
                                    <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">Our Mission</h3>
                                    <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                                    <p className="text-sm leading-relaxed">
                                        At the Scitech Council of IIT Bhilai, we are driven by a relentless passion for innovation and discovery.
                                        Our mission is to ignite curiosity, fuel creativity, and empower our community to explore the frontiers of
                                        science and technology. Through dynamic club events, hands-on workshops, thrilling competitions, and
                                        collaborative projects.
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-center">
                                    <img src="mission.png" alt="Mission" className="rounded-lg h-60 max-w-full object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="bg-[#101323] p-6 rounded-lg text-center flex-1 order-1 lg:order-2">
                                    <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">Our Vision</h3>
                                    <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                                    <p className="text-sm leading-relaxed">
                                        We foster an environment where ideas flourish and dreams take flight. Join us on this exhilarating journey
                                        as we shape the future, one breakthrough at a time. Together, let's turn aspirations into achievements and
                                        possibilities into realities. Welcome to the heart of innovation. Welcome to the Scitech Council.
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-center order-2 lg:order-1">
                                    <img src="vision.png" alt="Vision" className="rounded-lg h-60 max-w-full object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="bg-[#101323] p-6 rounded-lg text-center flex-1">
                                    <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">Our Values</h3>
                                    <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                                    <p className="text-sm leading-relaxed">
                                        The SCITECH Council of IIT Bhilai is driven by a commitment to innovation, pushing the boundaries of
                                        science and technology through creative projects. We foster collaboration, bringing together a diverse
                                        community to achieve common goals. Excellence is at the heart of our activities, ensuring high standards
                                        in everything we do.
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-center">
                                    <img src="values.png" alt="Mission" className="rounded-lg h-60 max-w-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-4">
                <div className="py-16 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-left text-2xl md:text-4xl lg:text-6xl tracking-wider leading-[99px] font-[junge]  text-outline mb-12">MEET OUR CREATIVE MINDS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className=" border border-solid border-[#EEE8F333] rounded-2xl p-6 flex flex-col items-center">
                                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-sm mb-2">{member.position}</p>
                                    <p className="text-sm mb-2">{member.email}</p>
                                    <p className="text-sm mb-4">{member.phone}</p>
                                    <div className="flex space-x-2">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center font-[poppins] bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-full">
                                            <i className="fab fa-linkedin-in mr-1"></i>LinkedIn
                                        </a>
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center font-[poppins] bg-pink-500 hover:bg-pink-600 text-white py-2 px-3 rounded-full">
                                            <i className="fab fa-instagram mr-1"></i>Instagram
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </div>
    )
}
export default About;