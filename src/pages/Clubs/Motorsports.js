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
        icon: "/motorsports/member_image/AdityaNarayanThakur_Captain_Motorsports.jpg",
        name: "Aditya Narayan Thakur",
        position: "Captain",
        email: "adityant@iitbhilai.ac.in"
    },
    {
        icon: "/motorsports/member_image/Swagat - VC Motorsports.jpg",
        name: "Swagat Baghel",
        position: "Vice Captain",
        email: "swagatb@iitbhilai.ac.in"
    },
    {
        icon: "/motorsports/member_image/Akshay.jpg",
        name: "Akshay",
        position: "Core member",
        email: "nomulana@iitbhilai.ac.in"
    },
    {
        icon: "/motorsports/member_image/Atharva Hire.jpg",
        name: "Atharva Hire",
        position: "Core Member",
        email: "hireas@iitbhilai.ac.in"
    },
    {
        icon: "/motorsports/member_image/Divij Sharma.jpeg",
        name: "Divij Sharma",
        position: "Core Member",
        email: "divijs@iitbhilai.ac.in"
    },
    {
        icon: "/motorsports/member_image/Neeraj.jpg",
        name: "Neeraj",
        position: "Core Member",
        email: "gadink@iitbhilai.ac.in"
    },
]

const Motorsports = () => {
    const images = getGalleryImages('motorsports');

    return (
        <ClubTemplate
            clubName="Motorsports"
            clubLogo="Motorsports.png"
            instagram="https://www.instagram.com/blockchainclub.iitbhilai/"
            linkedin="https://www.linkedin.com/company/blockchainclubiitbhilai/"
            twitter="https://twitter.com/BlockchainClubI1"
            images={images}
            blogs={blogs}
            clubMembers={clubMembers}
            clubDescription="The Motorsports Team at IIT Bhilai is a powerhouse of innovation, engineering excellence, and passion for speed. It brings together talented students who design, build, and race high-performance vehicles, combining creativity with cutting-edge automotive technology. Through hands-on projects, technical workshops, and national competitions, the team transforms ideas into machines that embody precision and teamwork. By fusing theory with real-world engineering, the team prepares its members to drive the future of sustainable and intelligent mobility."
        />
    );
}

export default Motorsports;
