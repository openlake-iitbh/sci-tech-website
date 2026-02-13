import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimelineSection from "../components/Timeline";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const OurStory = () => {
  return (
    <div className="text-white max-h-screen flex flex-col sm:flex-row m-4 md:m-8 overflow-hidden rounded-lg font-[poppins]">
      {/* Image */}
      <div className="flex-1">
        <LazyLoadImage
        effect="blur"
          src="timeline.png"
          className="h-48 sm:h-full w-full object-cover sm:object-fill"
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
    name: "Sidhesh Kumar Patra",
    position: "General Secretary",
    email: "ojusg@iitbhilai.ac.in",
    phone: "+91-8708943859",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/ojus.png", // replace with actual image URL
  },
  {
    name: "Bhavik Shangari",
    position: "DSAI Coordinator",
    email: "bhaviks@iitbhilai.ac.in",
    phone: "+91-9636455905",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/dsai/member_image/Bhavik_12240410.jpg", // replace with actual image URL
  },
  {
    name: "Gaddey Hemanth Chowdary",
    position: "DSAI Coordinator",
    email: "gaddeyhemanth@iitbhilai.ac.in",
    phone: "+91-9494248739",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/dsai/member_image/Hemanth_12140660.jpeg", // replace with actual image URL
  },
  {
  name: "Amay Dixit",
  position: "Openlake Coordinator",
  email: "amayd@iitbhilai.ac.in",
  phone: "+91-XXXXXXXXXX", // Phone number not provided in your data
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
  image: "/openlake/member_image/Amay_OpenLake.png",
},
{
  name: "Vasu Garg",
  position: "Blockchain Coordinator",
  email: "vasug@iitbhilai.ac.in",
  phone: "+91-9084690147",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
  image: "/bib/member_image/vasu_BIB.png",
},
  {
    name: "Omendra Kumar Upadhyay",
    position: "Electromos Coordinator",
    email: "omendrak@iitbhilai.ac.in",
    phone: "+91-8247589701",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/electromos/member_image/omendra_12241200.jpg",
  },
  {
    name: "Pradeep",
    position: "Epsilon Coordinator",
    email: "pradeepj@iitbhilai.ac.in",
    phone: "+91-7010823512",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/epsilon/member_image/pradeep.png",
  },
  {
  name: "Saurav Gupta",
  position: "GDSC Coordinator",
  email: "sauravg@iitbhilai.ac.in",
  phone: "+91-7999399604",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
  image: "/gdsc/members/Saurav Gupta .jpg",
},
  {
    name: "Chetan",
    position: "Epsilon Coordinator",
    email: "chetan@iitbhilai.ac.in",
    phone: "+91-9355844091",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/epsilon/member_image/Chetan.jpg",
  },
  {
    name: "Koosh Gupta",
    position: "Ingenuity Coordinator",
    email: "kooshg@iitbhilai.ac.in",
    phone: "+91-8250213794",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/ingenuity/member_image/Koosh-Gupta_12240850.jpg",
  },
  {
    name: "Manopriya Mondal",
    position: "Ingenuity Coordinator",
    email: "manopriyam@iitbhilai.ac.in",
    phone: "+91-7595807122",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    image: "/ingenuity/member_image/Manopriya-Mondal_12240970.jpg",
  },
{
  name: "Kushaal Kumar Pothula",
  position: "SES Secretary (Astro)",
  email: "kushaalkp@iitbhilai.ac.in",
  phone: "+91-7396930347",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
  image: "/ses/member_image/Kushaal_Kumar_Pothula_SES_Astro.jpg",
},
{
  name: "Aditya Girish Seokar",
  position: "SES Secretary (Aero)",
  email: "adityags@iitbhilai.ac.in",
  phone: "+91-9511629108",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
  image: "/ses/member_image/ADITYA_GIRISH_SEOKAR_ses_aero.jpg",
}
];

const MemberCard = ({ member, index }) => {
  return (
    <div
      key={index}
      className="border border-solid border-[#EEE8F333] rounded-2xl p-6 flex flex-col items-center"
    >
      <LazyLoadImage
      effect="blur"
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="text-xl text-center font-bold mb-2 text-[#0A66C2] line-clamp-1">
        {member.name}
      </h3>
      <p className="text-sm mb-2">{member.position}</p>
      <p className="text-sm mb-2">{member.email}</p>
      <p className="text-sm mb-4">{member.phone}</p>
      {/* <div className="flex space-x-2">
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
      </div> */}
    </div>
  );
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-bg">
      <div className="about-section-2 max-h-[640px]">
        <NavBar />
        <h1 className="w-fit text-[3rem] text-[#0A66C2]  font-bold m-auto mt-[12rem] backdrop-blur-[2px]">
          About Us
        </h1>        
      </div>

      {/* Adding everything based on the function */}
      <OurStory />

      {/* Corousel */}
      {/* <TimelineSection /> */}

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
                  <LazyLoadImage
                  effect="blur"
                    src="mission.png"
                    alt="Mission"
                    className="mission rounded-lg h-60 max-w-full object-contain"
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
                  <LazyLoadImage
                  effect="blur"
                    src="vision.png"
                    alt="Vision"
                    className="vision rounded-lg h-60 max-w-full object-contain"
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
                  <LazyLoadImage
                  effect="blur"
                    src="values.png"
                    alt="Values"
                    className="values rounded-lg h-60 max-w-full object-contain"
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
            <h2 className="text-2xl md:text-4xl lg:text-6xl tracking-wider leading-[99px] font-[junge] text-[#0A66C2] mb-12 text-center">
              MEET OUR CREATIVE MINDS
            </h2>
            <div className="pb-8 mx-2">
              <MemberCard key={0} member={teamMembers[0]} index={0} />
            </div>
            <div className="mx-2 grid grid-cols-1 mb:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <MemberCard key={index} member={member} index={index} />
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
