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
        "icon": "/electromos/member_image/Ragini.jpg",
        "position": "Core Member"
    },
    {
        "name": "Rohan Kumar Mishra",
        "email": "rohankum@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Rohan.jpg",
        "position": "Core Member"
    },
    {
        "name": "Rohit Rajkumar Dhamale",
        "email": "rohitraj@iitbhilai.ac.in",
        "icon": "/electromos/member_image/Rohit.jpg",
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
    const events = EventDetails.filter(event => event.club === 'Electromos');
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
            clubName="Electromos"
            clubLogo="Electromos.png"
            instagram="https://www.instagram.com/electromos.iitbh/"
            linkedin="https://www.linkedin.com/company/electromos-sci-tech-club-iit-bhilai/"
            twitter="https://twitter.com/"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="Electromos, the one and only electronics club of IIT Bhilai has always been the epicentre for electronics research and projects in the Sci-Tech community of this institute.
Every year a bunch of electronics enthusiast gather to foster this club and propagate the knowledge of electronics and it's domain in the institute.
We work in IoT, Signal processing, VLSI, control systems etc and intrested students also participate in the hackathons and projects related to this domain.
Joining this dynamic, workaholic and open minded club is a must in your college life."
        />
    );
}

export default Electromos;
