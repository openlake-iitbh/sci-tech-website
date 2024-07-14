import React, { useState } from 'react';
import BottomDrawer from './Drawer';

const EventCard = ({ event }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);

    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-[JuliusSansOne] font-bold text-[#0080FF] mb-2">{event.title}</h3>
                <div className="flex justify-between items-center">
                    <p className="">{event.hosting}</p>
                    <p className="">{event.timeLeft}</p>
                </div>
                <p className="mb-4">{event.club}</p>
                <div className="flex items-center mb-4 font-[poppins]">
                    <div className="p-2 rounded mr-4">
                        <p className="bg-blue-500 p-2 text-sm text-center rounded-t-md font-bold">{event.month}</p>
                        <p className="bg-white p-2 text-center text-black rounded-b-md text-lg font-bold">{event.date}</p>
                    </div>
                    <div className="">
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                    </div>
                </div>
            </div>
            <div className="font-[poppins] flex gap-4 items-center">
                <button onClick={() => {
                    setIsRegistered(true);
                    toggleDrawer();
                }}
                    className="bg-[#0A66C2] text-white p-2 rounded-full">Register now</button>
                <button onClick={() => {
                    setIsRegistered(false);
                    toggleDrawer();
                }} className="border border-[#C4C4C4] text-[#C4C4C4] p-2 rounded-full">Know more</button>
            </div>
            <BottomDrawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                {isRegistered ? (
                    <div className="text-white flex flex-col sm:flex-row justify-between sm:mx-8 gap-4 sm:gap-0">
                        <div className='flex-1 px-8'>
                            <h2 className="mb-4 text-lg text-[#0A66C2] font-[poppins] font-bold">About this Event</h2>
                            <h3 className='font-[poppins] mb-2'>Description</h3>
                            <p className='text-sm text-[#CECECE]'>{event.description}</p>
                        </div>
                        <div className='flex-1 px-8'>
                            <h2 className="mb-4 text-lg text-center text-[#0A66C2] font-[poppins] font-bold">Register</h2>
                            <form className="flex flex-col gap-4 sm:mx-[20%]">
                                <input type="text" placeholder="Name" className="p-2 border-b bg-transparent focus:outline-none" />
                                <input type="email" placeholder="Email" className="p-2 border-b bg-transparent focus:outline-none" />
                                <input type="tel" placeholder="Phone Number" className="p-2 border-b bg-transparent focus:outline-none" />
                                <input type="text" placeholder="Id" className="p-2 border-b bg-transparent focus:outline-none" />
                                <button className="bg-[#0A66C2] text-white p-2 rounded-md">Register</button>
                            </form>
                        </div>

                    </div>
                ) : (
                    <div className="mb-4 font-[poppins]">
                        <h2 className="text-lg text-center text-[#0A66C2] font-[poppins] font-bold">About the Event</h2>
                        <h3 className='font-[poppins]'>Description</h3>
                        <p className='text-[#CECECE]'>{event.description}</p>
                    </div>
                )}
            </BottomDrawer>
        </div>
    );
};

export default EventCard;