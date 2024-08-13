import ClubTemplate from "./ClubTemplate";
import { getGalleryImages } from '../../utils/getGalleryImages';
import EventDetails from "../../utils/EventDetails";
const blogs = [
    {
        title: "Sci-tech club weekly magazine",
        author: "Aditya, Indian Institute of Technology Bhilai",
        time: "5 min read",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia! Quisquam, voluptate."
    },
    {
        title: "Sci-tech club weekly magazine",
        author: "Aditya, Indian Institute of Technology Bhilai",
        time: "5 min read",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia! Quisquam, voluptate."
    },
    {
        title: "Sci-tech club weekly magazine",
        author: "Aditya, Indian Institute of Technology Bhilai",
        time: "5 min read",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia! Quisquam, voluptate."
    },
    {
        title: "Sci-tech club weekly magazine",
        author: "Aditya, Indian Institute of Technology Bhilai",
        time: "5 min read",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia! Quisquam, voluptate."
    },
    {
        title: "Sci-tech club weekly magazine",
        author: "Aditya, Indian Institute of Technology Bhilai",
        time: "5 min read",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia! Quisquam, voluptate."
    },
    // Add more blog objects here as needed
];
const clubMembers = [
    {
        icon: "/dsai/member_image/Bhavik_12240410.jpg",
        name: "Bhavik Shangari",
        position: "Coordinator",
        email: "bhaviks@iitbhilai.ac.i"
    },
    {
        icon: "/dsai/member_image/Hemanth_12140660.jpeg",
        name: "Gaddey Hemanth Chowdary",
        position: "Coordinator",
        email: "gaddeyhemanth@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Nishant.jpg",
        name: "Nishant Verma",
        position: "Core Member",
        email: "nishantv@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Ashutosh_12340390.jpg",
        name: "Ashutosh Kumar Jha",
        position: "Core Member",
        email: "ashutoshj@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Uday_bhardwaj.jpg",
        name: "Uday Bharadwaj",
        position: "Core Member",
        email: "udayb@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Naga Jaswanth.jpeg",
        name: "Naga Jaswanth",
        position: "Core Member",
        email: "gantanag@iitbhilai.ac.in"
    },
]

const DSAI = () => {
    const images = getGalleryImages('dsai');
    const events = EventDetails.filter((event) => event.club === "DSAI");
    return (
        <ClubTemplate
            clubName="DSAI Club"
            clubLogo="/DSAI.png"
            instagram="https://www.instagram.com/dsai_iitbhilai/"
            linkedin="https://www.linkedin.com/company/data-science-and-artificial-intelligence-club-iit-bhilai/"
            twitter="https://twitter.com/DSAI_IITBHILAI"
            github="https://github.com/dsai-iitbhilai"
            youtube="https://www.youtube.com/@datascienceaiclubiitbhilai5876"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world."
        />
    );
}

export default DSAI;
