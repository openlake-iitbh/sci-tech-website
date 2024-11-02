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
        icon: "/openlake/member_image/Nishchay Rajput.jpg",
        name: "Nishchay Rajput",
        position: "Coordinator",
        email: "nishchayr@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/sumit_pathak.jpg",
        name: "Sumit Pathak",
        position: "Coordinator",
        email: "sumitkum@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Amay_Dixit_12340220.png",
        name: "Amay Dixit",
        position: "Core Member",
        email: "amayd@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Arbaz shaikh_11zon.jpg",
        name: "Arbaz Shaikh",
        position: "Core Member",
        email: "shaikharbaz@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Divyanshu_Prakash_11zon.jpg",
        name: "Divyanshu Prakash",
        position: "Core Member",
        email: "divyanshup@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Hemanth.jpeg",
        name: "Puneti Hemanth Kumar Reddy",
        position: "Core Member",
        email: "punetihemanth@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Kriti_arora_11zon.jpg",
        name: "Kriti Arora",
        position: "Core Member",
        email: "kritia@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Nidhi Singh_11zon.jpg",
        name: "Nidhi Singh",
        position: "Core Member",
        email: "nidhis@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Nishant.jpg",
        name: "Nishant Verma",
        position: "Core Member",
        email: "nishantv@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/sachin_prakash.jpg",
        name: "Sachin prakash",
        position: "Core Member",
        email: "sachinp@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Shashank Pant.jpg",
        name: "Shashank Pant",
        position: "Core Member",
        email: "shashankp@iitbhilai.ac.in"
    },
]

const Openlake = () => {
    const images = getGalleryImages('openlake');
    const events = EventDetails.filter(event => event.club === "Openlake");
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
            clubName="Openlake"
            clubLogo="OPENLAKE.png"
            instagram="https://instagram.com/openlake_iitbhilai?igshid=MmU2YjMzNjRlOQ=="
            linkedin="https://www.linkedin.com/company/openlake/"
            twitter="https://twitter.com/OpenLakeClub?t=FpIJluBD6clOSITxfJXojw&s=09"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="OpenLake, the premier open-source club at IIT Bhilai.

At OpenLake, we are committed to fostering a collaborative and innovative community where students can explore, contribute to, and learn from open-source projects. Our mission is to promote the spirit of open-source development, encouraging creativity, collaboration, and continuous learning.

Whether you are a seasoned developer or just beginning your journey, OpenLake provides a platform for all to enhance their skills and share knowledge. Join us to delve into the world of open-source, participate in hackathons, attend informative workshops, and collaborate on impactful projects.

Together, let's build, share, and grow."
        />
    );
}

export default Openlake;
