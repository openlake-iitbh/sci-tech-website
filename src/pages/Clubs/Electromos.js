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
        icon: "/electromos/member_image/omendra_12241200.jpg",
        name: "Omendra Kumar Upadhyay",
        position: "Coordinator",
        email: "omendrak@iitbhilai.ac.in"
    },
    {
        "name": "Minal Bisen",
        "email": "minalb@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Minal Bisen (PhD, EE).jpg",
        "position": "Core Member"
    },
    {
        "name": "Ayush Kumar",
        "email": "ayushkumar@iitbhiali.ac.in",
        "icon": "/electromos/member_image/Ayush.jpg",
        "position": "Core Member"
    },
    {
        "name": "Divit Sharma",
        "email": "divits@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Divit EE 2023.jpg",
        "position": "Core Member"
    },
    {
        "name": "Alapati Nagasai",
        "email": "alapatin@iitbhilai.ac.in",
        "icon": "/electromos/member_image/nagasai.jpg",
        "position": "Core Member"
    },
    {
        "name": "Ragini Vinay Mehta",
        "email": "raginivi@iitbhiali.ac.in",
        "icon": "/electromos/member_image/ragini.jpg",
        "position": "Core Member"
    },
    {
        "name": "Rohan Kumar Mishra",
        "email": "rohankum@iitbhilai.ac.in",
        "icon": "/electromos/member_image/rohan.jpg",
        "position": "Core Member"
    },
    {
        "name": "Rohit Rajkumar Dhamale",
        "email": "rohitraj@iitbhilai.ac.in",
        "icon": "/electromos/member_image/rohit.jpg",
        "position": "Core Member"
    },
    {
        "name": "Sai Sampath",
        "email": "bellalas@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Sai Sampath EE 2022.jpg",
        "position": "Core Member"
    },
    {
        "name": "Daksh",
        "email": "daksh@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Daksh.jpg",
        "position": "Core Member"
    }
]

const Electromos = () => {
    const images = getGalleryImages('electromos');

    return (
        <ClubTemplate
            clubName="Electromos Club"
            clubLogo="Electromos.png"
            instagram="https://www.instagram.com/blockchainclub.iitbhilai/"
            linkedin="https://www.linkedin.com/company/blockchainclubiitbhilai/"
            twitter="https://twitter.com/BlockchainClubI1"
            images={images}
            blogs={blogs}
            clubMembers={clubMembers}
            clubDescription="Electromos, the one and only electronics club of IIT Bhilai has always been the epicentre for electronics research and projects in the Sci-Tech community of this institute.
Every year a bunch of electronics enthusiast gather to foster this club and propagate the knowledge of electronics and it's domain in the institute.
We work in IoT, Signal processing, VLSI, control systems etc and intrested students also participate in the hackathons and projects related to this domain.
Joining this dynamic, workaholic and open minded club is a must in your college life."
        />
    );
}

export default Electromos;
