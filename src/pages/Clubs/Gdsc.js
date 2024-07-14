import ClubTemplate from "./ClubTemplate";
import { getGalleryImages } from '../../utils/getGalleryImages';

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
        name: "Ganta Naga Jaswanth",
        position: "Core Member",
        email: "gantanag@iitbhilai.ac.in"
    },
]

const GDSC = () => {
    const images = getGalleryImages('gdsc');

    return (
        <ClubTemplate
            clubName="GDSC Club"
            clubLogo="GDSC.png"
            instagram="https://www.instagram.com/blockchainclub.iitbhilai/"
            linkedin="https://www.linkedin.com/company/blockchainclubiitbhilai/"
            twitter="https://twitter.com/BlockchainClubI1"
            images={images}
            blogs={blogs}
            clubMembers={clubMembers}
            clubDescription="The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world."
        />
    );
}

export default GDSC;
