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
        icon: "/bib/member_image/vasu_BIB.png",
        name: "Vasu Garg",
        position: "Coordinator",
        email: "vasug@iitbhilai.ac.in"
    },
    {
        icon: "/bib/member_image/Divij Sharma.jpeg",
        name: "Divij Sharma",
        position: "Core Member",
        email: "divijs@iitbhilai.ac.in"
    },
    {
        icon: "/bib/member_image/harshit_k.jpg",
        name: "Harshit Kandpal",
        position: "Core Member",
        email: "harshitka@iitbhilai.ac.in"
    },
    {
        icon: "/bib/member_image/Harshita.jpg",
        name: "Harshita Sharma",
        position: "Core Member",
        email: "harshitas@iitbhilai.ac.in"
    },
    {
        icon: "/bib/member_image/Parth_Bhosale.png",
        name: "Parth Bhosale",
        position: "Core Member",
        email: "parthnb@iitbhilai.ac.in"
    },
    {
        icon: "/bib/member_image/VEDANT.jpg",
        name: "Vedant Chandak",
        position: "Core Member",
        email: "cvedant@iitbhilai.ac.in"
    }

]

const BlockChain = () => {
    const images = getGalleryImages('blockchain');
    const events = EventDetails.filter(event => event.club === 'BIB');
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
            clubName="BlockChain Club"
            clubLogo="BIB.png"
            instagram="https://www.instagram.com/blockchainclub.iitbhilai/"
            linkedin="https://www.linkedin.com/company/blockchainclubiitbhilai/"
            twitter="https://twitter.com/BlockchainClubI1"
            youtube="https://youtube.com/@blockchainiitbh?feature=shared"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="Blockchain at IIT Bhilai (BIB) is the institute's vibrant blockchain society, committed to fostering innovation and knowledge in decentralized technologies. Our club offers a rich blend of workshops, expert lectures, and hackathons, providing a hands-on approach to learning and applying blockchain concepts. With a focus on collaboration and real-world application, BIB is the hub for students passionate about exploring blockchain's vast potential and driving technological advancement. Join us to be a part of the blockchain revolution and contribute to cutting-edge projects and research."
        />
    );
}

export default BlockChain;
