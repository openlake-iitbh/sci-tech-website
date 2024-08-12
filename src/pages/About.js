import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimelineSection from "../components/Timeline";

export const OurStory = () => {
  return (
    <div className="text-white max-h-screen flex flex-col sm:flex-row m-4 md:m-8 overflow-hidden rounded-lg font-[poppins]">
      {/* Image */}
      <div className="flex-1">
        <img
          src="EYANTRA.jpg"
          className="h-48 sm:h-full w-full object-conver sm:object-fill"
          alt="Our Story"
        />
      </div>
      <div className="flex-1 bg-[#101323] flex items-center justify-center py-8 px-8">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-[junge] font-semibold text-center">
            OUR <span className="text-sky-500">STORY</span>
          </h1>
          <p className="text-lg md:text-2xl font-[junge] text-center">
            "Innovate, Collaborate, Excel"
          </p>
          <p className="text-sm md:text-base text-center">
            "At IIT Bhilai, the Scitech Council was born from a shared passion
            for innovation and a desire to create a vibrant community centered
            around science and technology. Inspired by the limitless
            possibilities of discovery, we set out to build a space where
            curiosity could thrive and ideas could flourish."
          </p>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Ojus Goel",
    position: "General Secretary",
    email: "ojusg@iitbhilai.ac.in",
    phone: "+9187654321",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "https://via.placeholder.com/100", // replace with actual image URL
  },
  {
    name: "Bhavik Shangari",
    position: "DSAI Coordinator",
    email: "bhaviks@iitbhilai.ac.in",
    phone: "+91-9636455905",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "https://via.placeholder.com/100", // replace with actual image URL
  },
  {
    name: "Gaddey Hemanth Chowdary",
    position: "DSAI Coordinator",
    email: "gaddeyhemanth@iitbhilai.ac.in",
    phone: "+91-9494248739",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "https://via.placeholder.com/100", // replace with actual image URL
  },
  {
    name: "Nishchay Rajput",
    position: "Openlake Coordinator",
    email: "nishchayr@iitbhilai.ac.in",
    phone: "+9187654321",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "https://via.placeholder.com/100", // replace with actual image URL
  },
  {
    name: "Sumit Pathak",
    position: "Openlake Coordinator",
    email: "sumitp@iitbhilai.ac.in",
    phone: "+9187654321",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "https://via.placeholder.com/100", // replace with actual image URL
  },
  // Add more members as needed
];

function About() {
  return (
    <div className="home-bg">
      <div className="about-section-2">
        <NavBar />
        <h1 className="w-fit text-[3rem] text-sky-500 font-bold m-auto mt-[10rem]">
          About Us
        </h1>
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
                <div className="bg-[#101323] p-6 rounded-lg text-center flex-1">
                  <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">
                    Our Mission
                  </h3>
                  <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                  <p className="text-sm leading-relaxed">
                    To foster a vibrant culture of curiosity and creativity by
                    organizing engaging events, hands-on workshops, and
                    collaborative projects. We aim to inspire students to push
                    boundaries, develop cutting-edge solutions, and make
                    impactful contributions to the world of science and
                    technology.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <img
                    src="mission.png"
                    alt="Mission"
                    className="rounded-lg h-60 max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="bg-[#101323] p-6 rounded-lg text-center flex-1 order-1 lg:order-2">
                  <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">
                    Our Vision
                  </h3>
                  <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                  <p className="text-sm leading-relaxed">
                    SciTech council aims to be a dynamic hub of innovation and
                    collaboration, where students are empowered to explore,
                    create, and lead in science and technology.
                  </p>
                </div>
                <div className="flex flex-1 justify-center order-2 lg:order-1">
                  <img
                    src="vision.png"
                    alt="Vision"
                    className="rounded-lg h-60 max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="bg-[#101323] p-6 rounded-lg text-center flex-1">
                  <h3 className="text-4xl font-bold mb-4 tracking-wider font-[junge] text-[#0A66C2]">
                    Our Values
                  </h3>
                  <hr className="w-36 border-[#0A66C2] mx-auto my-4" />
                  <p className="text-sm leading-relaxed">
                    We believe in the power of innovation and encourage the
                    pursuit of new ideas and creative solutions. Our community
                    thrives on collaboration, bringing together diverse
                    perspectives to foster teamwork and shared success. We
                    balance hard work with fun, ensuring that our activities are
                    engaging, enjoyable, and memorable.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <img
                    src="values.png"
                    alt="Values"
                    className="rounded-lg h-60 max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="py-16 text-white">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-6xl tracking-wider leading-[99px] font-[junge] text-outline mb-12 text-center">
              MEET OUR CREATIVE MINDS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="border border-solid border-[#EEE8F333] rounded-2xl p-6 flex flex-col items-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-xl text-center font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm mb-2">{member.position}</p>
                  <p className="text-sm mb-2">{member.email}</p>
                  <p className="text-sm mb-4">{member.phone}</p>
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-[poppins] bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-full"
                    >
                      <i className="fab fa-linkedin-in mr-1"></i>LinkedIn
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-[poppins] bg-pink-500 hover:bg-pink-600 text-white py-2 px-3 rounded-full"
                    >
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
  );
}
export default About;
