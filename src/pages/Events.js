import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const EventsDetails = [
  {
    title: "NATIONAL SPACE DAY 2024",
    hosting: "By Space Exploration Society",
    club: "Space Exploration Society",
    description: `Exploring New Horizons: Celebrating India's Space Legacy 
    To commemorate the success of Chandrayaan-3 mission on its first anniversary, Space Exploration Society and Department of Physics at IIT Bhilai are delighted to invite you all to celebrate the National Space Day with us. Get ready to spend the day with exciting sessions of fun and knowledge outreach throughout the day to celebrate India’s greatest achievements. Looking forward for your participation to make this event a resounding success.`,
    date: "08",
    month: "Aug",
    year: "2024",
    time: "12:00-2:00 PM IST",
    location: "IIT Bhilai",
    timeLeft: "2 days left",
    image: "/events/Space_Day.jpg",
  },
  {
    title: "PHOTOSHOP REVAMP BY THE GOAT",
    hosting: "Hosted by Talla",
    club: "DesignX",
    description: "This is a description of the event",
    date: "08",
    month: "Aug",
    time: "12:00-2:00 PM IST",
    location: "Bhilai",
    timeLeft: "2 days left",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "PHOTOSHOP REVAMP BY THE GOAT",
    hosting: "Hosted by Talla",
    club: "DesignX",
    description: "This is a description of the event",
    date: "08",
    month: "Aug",
    time: "12:00-2:00 PM IST",
    location: "Bhilai",
    timeLeft: "2 days left",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "PHOTOSHOP REVAMP BY THE GOAT",
    hosting: "Hosted by Talla",
    club: "DesignX",
    description: "This is a description of the event",
    date: "08",
    month: "Aug",
    time: "12:00-2:00 PM IST",
    location: "Bhilai",
    timeLeft: "2 days left",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "PHOTOSHOP REVAMP BY THE GOAT",
    hosting: "Hosted by Talla",
    club: "DesignX",
    description: "This is a description of the event",
    date: "08",
    month: "Aug",
    time: "12:00-2:00 PM IST",
    location: "Bhilai",
    timeLeft: "2 days left",
    image: "https://via.placeholder.com/150",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home-bg text-white">
      <section className="events mb-8">
        <NavBar />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="">
            <h1 className="text-5xl mb-4 font-[junge]">Events</h1>
            <h2 className="subtitle">Check out our upcoming events</h2>
          </div>
        </div>
      </section>

      <section className="events-card mb-8">
        <div className="mx-auto px-4">
          <div className="mx-auto font-[junge] bg-[#101323] p-4 rounded-lg shadow-lg flex justify-center mb-8">
            <button
              className={`w-full text-white font-bold px-4 py-2 mx-2 rounded ${
                activeTab === "upcoming" ? "bg-[#0A66C2]" : ""
              }`}
              onClick={() => handleTabClick("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`w-full text-white font-bold px-4 py-2 mx-2 rounded ${
                activeTab === "past" ? "bg-[#0A66C2]" : ""
              }`}
              onClick={() => handleTabClick("past")}
            >
              Past
            </button>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeTab === "upcoming" &&
              EventsDetails.map((member, index) => (
                <EventCard key={index} event={member} />
              ))}
            {activeTab === "past" && (
              <p className="text-white">No past events available.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
