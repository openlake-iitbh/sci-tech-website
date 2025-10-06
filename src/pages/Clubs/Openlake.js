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
        icon: "/openlake/member_image/Amay_OpenLake.png",
        name: "Amay Dixit",
        position: "Coordinator",
        email: "amayd@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Divyansh.jpg",
        name: "Divyansh",
        position: "Core Member",
        email: "DummyEmail@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Harshit Kandpal.jpg",
        name: "Harshit Kandpal",
        position: "Core Member",
        email: "harshitka@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/sakshi shamrao jadahv.jpg",
        name: "Sakshi Shamrao Jadhav",
        position: "Core Member",
        email: "sakshij@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/SLOK TULSYAN 1.jpg",
        name: "Slok Tulsyan",
        position: "Core Member",
        email: "slokt@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Thanmaei.jpg",
        name: "Thanmaie",
        position: "Core Member",
        email: "naginenitha@iitbhilai.ac.in"
    },
    {
        icon: "/openlake/member_image/Saurav.jpg",
        name: "Saurav",
        position: "Core Member",
        email: "DummyEmail@iitbhilai.ac.in"
    }
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
