import { useState } from "react";
import NavBar from "../components/NavBar";

export const Card = ({ src, name, role }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center w-[25%] h-[15rem]">
            <img className="w-24 h-24 rounded-full mx-auto" src={src} alt={`${name}`} />
            <h1 className="mt-4 text-lg font-bold">{name}</h1>
            <h2 className="text-gray-400">{role}</h2>
        </div>
    );
};

function Developer() {
    const [member, setMember] = useState([
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
        {
            src: "Arbaz Shaikh.jpg",
            name: "Arbaz Shaikh",
            role: "Developer"
        },
    ]);

    return (
        <div className="home-bg text-white min-h-screen pb-10">
            <div className="relative">
                <img src="blog.png" className="w-full h-[60vh] object-cover opacity-20" />
                <div className="absolute inset-0 flex flex-col">
                    <NavBar />
                    <div className="flex-grow flex justify-center items-center">
                        <h1 className="text-4xl">
                            {`<Div Class="`}<span className="text-sky-500">Developer</span>{`">`}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
                {member.map((m, index) => (
                    <Card key={index} src={m.src} name={m.name} role={m.role} />
                ))}
            </div>
        </div>
    );
}

export default Developer;
