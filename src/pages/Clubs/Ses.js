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
        icon: "/ses/member_image/ASTRO_SEC_SaiKamal12341470_11zon.jpg",
        name: "Sai Kamal Nannuri",
        position: "Coordinator",
        email: "nannurik@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/AERO_SEC_Sidhesh Kumar Patra_12342060.jpeg",
        name: "Sidhesh Kumar Patra",
        position: "Coordinator",
        email: "sidheshp@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Ajay Chikate _12340580_11zon.jpg",
        name: "Ajay Chikate",
        position: "Core Member",
        email: "chikated@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Aviral saxena_12340410.jpg",
        name: "Aviral Saxena",
        position: "Core Member",
        email: "avirals@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Anaay Sahu-12340240.jpg",
        name: "Anaay Sahu",
        position: "Core Member",
        email: "anaays@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Prashant Asati.jpg",
        name: "Prashant Asati",
        position: "Core Member",
        email: "prashanta@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Ragini Mehta 12241420.jpg",
        name: "Ragini Vinay Mehta",
        position: "Core Member",
        email: "raginivi@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Shashank Yadav-12342010.jpg",
        name: "Shashank Yadav",
        position: "Core Member",
        email: "shashanky@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Kesav Patneedi.jpg",
        name: "Keshav Patneedi",
        position: "Core Member",
        email: "kesavp@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/snehal_suhane_11zon.jpg",
        name: "Snehal Suhane",
        position: "Core Member",
        email: "snehals@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/SVS Rohit _12342200.jpg",
        name: "SVS Rohit",
        position: "Core Member",
        email: "swarnas@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Ankit Rath-(12340290).jpg",
        name: "Ankit Rath",
        position: "Core Member",
        email: "ankitr@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Kushagra Katare - 12341290.jpg",
        name: "Kushagra Katare",
        position: "Core Member",
        email: "kushagrak@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Aditya Jha 12340090.jpg",
        name: "Aditya Jha",
        position: "Core Member",
        email: "adityaj@iitbhilai.ac.in"
    }    
]

const SES = () => {
    const images = getGalleryImages('ses');
    const events  = EventDetails.filter(event => event.club === "SES");    
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
            clubName="SES"
            clubLogo="SES Logo.png"
            instagram="https://instagram.com/ses_iitbh?igshid=ZDc4ODBmNjlmNQ=="
            linkedin="https://www.linkedin.com/company/space-exploration-society-iitbh/"
            youtube="https://www.youtube.com/@spaceexplorationsocietyiit864/featured"
            facebook="https://www.facebook.com/ses.iitbh/"
            images={images}
            blogs={blogs}
            events={events}
            clubMembers={clubMembers}
            clubDescription="At IIT Bhilai, the Space Exploration Society (SES) thrives as a lively community where curiosity and the cosmos converge. Space fanatics within the institute unite to explore the universe’s wonders and advance aeronautical innovation. Under the expansive night sky, SES members revel in celestial observations and the excitement of aeromodelling.

Established in 2017, SES quickly became a beacon for space enthusiasts, organizing impactful events and workshops that captivate and inspire. Esteemed astrophysicists, engineers, and distinguished alumni frequently share their expertise, enriching the society’s endeavors with deep insights and practical knowledge. Their mentorship has propelled students to excel in various competitions and projects, achieving significant milestones in both astronomy and aeronautics."
        />
    );
}

export default SES;
