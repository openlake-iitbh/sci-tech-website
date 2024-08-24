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
        "icon": "/ingenuity/member_image/Koosh-Gupta_12240850.jpg",
        name: "Koosh Gupta",
        position: "Coordinator",
        email: "kooshg@iitbhilai.ac.in"
    },
    {
        "icon": "/ingenuity/member_image/Manopriya-Mondal_12240970.jpg",
        name: "Manopriya Mondal",
        position: "Coordinator",
        email: "manopriyam@iitbhilai.ac.in"
    },
    {
        "name": "Arpan Goswami",
        "email": "arpang@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Arpan-Goswami_12240250.jpg",
        "position": "Core Member"
    },
    {
        "name": "Divyanshu Prakash",
        "email": "divyanshup@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Divyanshu-Prakash_12240540.jpg",
        "position": "Core Member"
    },
    {
        "name": "Ujjwal Raj",
        "email": "ujjwalr@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Ujjwal-Raj_12241920.jpg",
        "position": "Core Member"
    },
    {
        "name": "Naga Jaswanth",
        "email": "gantanag@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Ganta-Naga-Jaswanth_12240570.jpg",
        "position": "Core Member"
    },
    {
        "name": "Priyanshu Kishore",
        "email": "priyanshuk@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Priyanshu-Kishore_12241370.jpg",
        "position": "Core Member"
    },
    {
        "name": "Puneti Hemanth Kumar Reddy",
        "email": "punetihemanth@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Hemanth_12241390.jpeg",
        "position": "Core Member"
    },
    {
        "name": "Amay Dixit",
        "email": "amayd@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Amay-Dixit_12340220.png",
        "position": "Core Member"
    },
    {
        "name": "Raj Mohammad",
        "email": "rajmohammad@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Raj-Mohammad_12241430.jpg",
        "position": "Core Member"
    },
    {
        "name": "Suraj Uttam Gaikwad",
        "email": "surajutt@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Suraj-Uttam-Gaikwad_12241830.jpg",
        "position": "Core Member"
    },
    {
        "name": "Talla Sai Surya",
        "email": "tallasai@iitbhilai.ac.in",
        "icon": "/ingenuity/member_image/Talla-Sai-Surya_12241860.jpg",
        "position": "Core Member"
    },    
]

const Ingenuity = () => {
    const images = getGalleryImages('ingenuity');
    const events = EventDetails.filter(event => event.club === 'Ingenuity');
    return (
        <ClubTemplate
            clubName="Ingenuity"
            clubLogo="ING.png"
            instagram="https://www.instagram.com/ingenuity_iit_bh/"
            linkedin="https://www.linkedin.com/company/74349589/admin/feed/posts/"            
            youtube="https://www.youtube.com/channel/UCxJn-SGexPHBs7Pmx378osw"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="Ingenuity, the competitive programming club of IIT Bhilai, is where innovation intertwines with algorithmic brilliance. Born from a vision to cultivate a haven of problem-solving and intellectual curiosity, Ingenuity is more than a coder's refuge - it's a thriving community of passionate enthusiasts. Here, we sharpen our problem-solving prowess and algorithmic acumen through exhilarating coding contests and dynamic collaborative learning."
        />
    );
}

export default Ingenuity;
