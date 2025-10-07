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
        icon: "/dsai/member_image/Kesav_DSAI.jpg",
        name: "Kesav Patneedi",
        position: "Coordinator",
        email: "kesavp@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/VarunRao_DSAI.jpg",
        name: "Varun Rao",
        position: "Coordinator",
        email: "varunr@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Akhileshkumar yadav.jpg",
        name: "Akhilesh Kumar Yadav",
        position: "Core Member",
        email: "akhileshksanjay@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Aman Pratap Singh.JPEG",
        name: "Aman Pratap Singh",
        position: "Core Member",
        email: "amanpratapsingh@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Devanshu.jpg",
        name: "Devanshu Sabharwal",
        position: "Core Member",
        email: "devanshusabh@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Farhan.jpeg",
        name: "Farhan",
        position: "Core Member",
        email: "farhana@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Kinshuk Gupta.jpg",
        name: "Kinshuk Gupta",
        position: "Core Member",
        email: "kinshukg@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Neha_Bharti.jpg",
        name: "Neha Bharti",
        position: "Core Member",
        email: "nehabharti@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Om_Anand.jpg",
        name: "Om Anand",
        position: "Core Member",
        email: "oma@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Pranay.jpg",
        name: "Pranay",
        position: "Core Member",
        email: "sbpranay@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/RahulRaj.jpg",
        name: "Rahul Raj",
        position: "Core Member",
        email: "rahulr@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Rudra.jpg",
        name: "Rudra Dudhat",
        position: "Core Member",
        email: "rudramd@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Sarthak_image.jpg",
        name: "Sarthak",
        position: "Core Member",
        email: "DummyEmail@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/ShashankYadav.jpg",
        name: "Shashank Yadav",
        position: "Core Member",
        email: "shashanky@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Shri.jpg",
        name: "Shri",
        position: "Core Member",
        email: "DummyEmail@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Siddhesh.jpg",
        name: "Siddesh Bansal",
        position: "Core Member",
        email: "siddheshb@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/Vidit_.jpg",
        name: "Vidit Shrimali",
        position: "Core Member",
        email: "vidits@iitbhilai.ac.in"
    },
    {
        icon: "/dsai/member_image/VIresh Koli.jpg",
        name: "Viresh Koli",
        position: "Core Member",
        email: "vireshtusharkoli@iitbhilai.ac.in"
    },
    
]

const DSAI = () => {
    const images = getGalleryImages('dsai');
    const events = EventDetails.filter((event) => event.club === "DSAI");
    events.length > 1 && events.sort((a, b) => {
        const dateA = new Date(
            Number(a.year),
            new Date(Date.parse(a.month + " 1, 2024")).getMonth(),
            Number(a.date)
        );
        const dateB = new Date(
            Number(b.year),
            new Date(Date.parse(b.month + " 1, 2024")).getMonth(),
            Number(b.date)
        );
        return dateB - dateA;
    });
    return (
        <ClubTemplate
            clubName="DSAI"
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
