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
        icon: "Arbaz shaikh.jpg",
        name: "Arya Rajesh Lanjewar",
        position: "Coordinator",
        email: "lanjewararya@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Nikhil Kumar Shrey",
        position: "Coordinator",
        email: "nikhilkumar@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Nidhi Singh",
        position: "Core Member",
        email: "nidhis@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Ashutosh Kumar Jha",
        position: "Core Member",
        email: "ashutoshj@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Amay Dixit",
        position: "Core Member",
        email: "amayd@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Vasu Garg",
        position: "Core Member",
        email: "vasug@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Putla Theophila",
        position: "Core Member",
        email: "putlat@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Pranay Thapak",
        position: "Core Member",
        email: "pranayt@iitbhilai.ac.in"
    },
    {
        icon: "nishant.jpeg",
        name: "Abhayveer Oberoi",
        position: "Core Member",
        email: "abhayveer@iitbhilai.ac.in"
    },

]

const BlockChain = () => {
    const images = getGalleryImages('blockchain');
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
            clubMembers={clubMembers}
            clubDescription="Blockchain at IIT Bhilai (BIB) is the institute's vibrant blockchain society, committed to fostering innovation and knowledge in decentralized technologies. Our club offers a rich blend of workshops, expert lectures, and hackathons, providing a hands-on approach to learning and applying blockchain concepts. With a focus on collaboration and real-world application, BIB is the hub for students passionate about exploring blockchain's vast potential and driving technological advancement. Join us to be a part of the blockchain revolution and contribute to cutting-edge projects and research."
        />
    );
}

export default BlockChain;
