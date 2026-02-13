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
    // Coordinator
    {
        icon: "/gdsc/members/Saurav Gupta .jpg",
        name: "Saurav Gupta",
        position: "Coordinator",
        email: "sauravg@iitbhilai.ac.in"
    },
    // Core Members
    {
        icon: "/gdsc/members/Rohit.jpg",
        name: "Rohit Raghuwanshi",
        position: "Core Member",
        email: "rohitrg@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/AKD.jpg",
        name: "Ashish Kumar Dash",
        position: "Core Member",
        email: "ashishkd@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/Pranay_GDG.jpeg",
        name: "SB Pranay",
        position: "Core Member",
        email: "sbpranay@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/Umap_Utkarsh.jpg",
        name: "Umap Utkarsh Sharad",
        position: "Core Member",
        email: "umapus@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/Siddhi Singh",
        name: "Siddhi Singh",
        position: "Core Member",
        email: "siddhiss@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/Swarit.jpg",
        name: "Swarit Dixit",
        position: "Core Member",
        email: "swaritd@iitbhilai.ac.in"
    },
    {
        icon: "/gdsc/members/Chaithali.jpg",
        name: "Bodike Chaithali",
        position: "Core Member",
        email: "chaithalib@iitbhilai.ac.in"
    }
]
const GDSC = () => {
    const images = getGalleryImages('gdsc');

    return (
        <ClubTemplate
            clubName="GDSC"
            clubLogo="GDSC.png"
            instagram="https://www.instagram.com/dsc_iitbhilai/"
            linkedin="https://www.linkedin.com/company/developer-student-club-iit-bhilai/"
            twitter=""
            images={images}
            blogs={blogs}
            clubMembers={clubMembers}
            clubDescription="The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world."
        />
    );
}

export default GDSC;
