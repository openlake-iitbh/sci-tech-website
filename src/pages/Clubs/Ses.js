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
        icon: "/ses/member_image/Kushaal_Kumar_Pothula_SES_Astro.jpg",
        name: "Kushaal Kumar Pothula",
        position: "Secretory",
        email: "kushaalkp@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/ADITYA_GIRISH_SEOKAR_ses_aero.jpg",
        name: "Aditya Girish Seokar",
        position: "Secretory",
        email: "adityags@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of AKD.jpg",
        name: "Ashish Kumar Dash",
        position: "Core Member",
        email: "ashishkd@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of Eashan Hasija.jpg",
        name: "Eashan Hasija",
        position: "Core Member",
        email: "eashanh@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of IMG-20240819-WA0053.jpg",
        name: "Atharv Hire",
        position: "Core Member",
        email: "hireas@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of Janvijay.jpeg",
        name: "Janvijay Singh",
        position: "Core Member",
        email: "janvijay@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of Karan.jpg",
        name: "Karan Kumar Prasad",
        position: "Core Member",
        email: "karankp@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of shubham_jha.jpg",
        name: "Shubham Jha",
        position: "Core Member",
        email: "shubhamkj@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of Sumagna.jpg",
        name: "Sumagna Das",
        position: "Core Member",
        email: "sumagnaa@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of Thanmaie_.png",
        name: "Thanmaie Nagineni",
        position: "Core Member",
        email: "naginenitha@iitbhilai.ac.in"
    },
    {
        icon: "/ses/member_image/Copy of V Varshitha.jpg",
        name: "V Varshitha",
        position: "Core Member",
        email: "vadlamuruvk@iitbhilai.ac.in"
    },  
    {
        icon: "/ses/member_image/Copy of 20250420_162112.jpg",
        name: "Anushka Gawande",
        position: "Core Member",
        email: "anushkage@iitbhilai.ac.in"
    }, 
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

