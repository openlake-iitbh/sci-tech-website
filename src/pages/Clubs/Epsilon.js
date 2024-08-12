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
        "icon": "/epsilon/member_image/Bhavik_12240410.jpg",
       " name": "Pradeep",
        "position": "Coordinator",
        "email": "pradeepj@iitbhilai.ac.in"
    },
    {
        "icon": "/epsilon/member_image/Chetan.jpg",
        "name": "Chetan",
        "position": "Coordinator",
        "email": "chetan@iitbhilai.ac.in"
    },
    {
        "name": "Anand Vardhan",
        "email": "anandv@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/anand.jpg",
        "position": "Core Member"
    },
    {
        "name": "Harsh Katole",
        "email": "harshpk@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/harsh.jpg",
        "position": "Core Member"
    },
    {
        "name": "Khushi Dutta",
        "email": "khushid@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/khushid.jpg",
        "position": "Core Member"
    },
    {
        "name": "Khushi Sharma",
        "email": "khushisa@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/khushis.jpg",
        "position": "Core Member"
    },
    {
        "name": "Kirtiraj Tilakdhari Jamnotiya",
        "email": "kirtiraj@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/kirti.jpg",
        "position": "Core Member"
    },
    {
        "name": "Mohit Thakre",
        "email": "mohitt@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/mohit.jpg",
        "position": "Core Member"
    },
    {
        "name": "Raj Mohammad",
        "email": "rajmohammad@iitbhilai.ac.in",
        "icon": "/epsilon/member_image/raj.jpg",
        "position": "Core Member"
    }
]

const Epsilon = () => {
    const images = getGalleryImages('epsilon');

    return (
        <ClubTemplate
            clubName="Epsilon Club"
            clubLogo="epsilon_logo_new.png"
            instagram="https://www.instagram.com/roboticsclub_iitbhilai/"
            linkedin="https://www.linkedin.com/company/the-epsilon-club-iit-bhilai-robotics-club/"
            youtube="https://www.youtube.com/@theepsilonclubiitbhilai2447/featured"
            images={images}
            blogs={blogs}
            clubMembers={clubMembers}
            clubDescription="The Data Science and Artificial Intelligence Club at IIT Bhilai is a dynamic hub for aspiring tech enthusiasts. It accelerates learning through cutting-edge workshops, exciting hackathons, and real-world projects. By bridging theory and practice, the club transforms students into innovative problem-solvers, ready to tackle the challenges of tomorrow's AI-driven world."
        />
    );
}

export default Epsilon;
