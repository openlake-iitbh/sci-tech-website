import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Card = ({ src, name, role }) => {
    return (
        <div className="flex items-end bg-gray-800 p-4 h-48 w-60 rounded-t-[65px] rounded-b-md relative  ">
            <img className="w-44 h-44 absolute -top-[80%] inset-0 m-auto object-center object-cover rounded-[65px] rounded-bl-[0] mx-auto" src={src} alt={`${name}`} />
            <div className="text-center w-full">
                <h1 className="mt-4 text-lg text-[#0A66C2] font-[poppins] font-bold">{name}</h1>
                <h2 className="text-gray-400 font-[poppins]">{role}</h2>
                </div>
        </div>
    );
};

function Developer() {
    const [member, setMember] = useState([
        {
            src: "/developer/Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "/developer/nishant.jpeg",
            name: "Nishant Verma",
            role: "Developer"
        },
        {
            src: "Divyanshu.jpg",
            name: "Divyanshu Prakash",
            role: "Developer"
        },
        {
            src: "Jaswanth.jpeg",
            name: "Naga Jaswanth",
            role: "Developer"
        }, 
        {
            src: "sai.jpg",
            name: "Sai Surya",
            role: "UI/UX Designer"
        }       
    ]);

    return (
        <div className="home-bg text-white min-h-screen pb-10">
            <div className="relative">
                <img src="/blog.png" className="w-full h-[60vh] object-cover opacity-20" alt="bg" />
                <div className="absolute inset-0 flex flex-col">
                    <NavBar />
                    <div className="flex-grow flex justify-center items-center">
                        <h1 className="text-4xl home-heading font-[poppins]">
                            {`<Div Class="`}<span className="text-sky-500 font-[junge] font-bold">Developer</span>{`">`}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-24 m-10">
                {member.map((m, index) => (
                    <Card key={index} src={m.src} name={m.name} role={m.role} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Developer;
