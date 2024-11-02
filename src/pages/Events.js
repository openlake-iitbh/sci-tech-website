import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import EventsDetails from "../utils/EventDetails";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const currentDate = new Date();

  const upcomingEvents = EventsDetails.filter((event) => {
    const eventDate = new Date(
      Number(event.year),
      new Date(Date.parse(event.month + " 1, 2024")).getMonth(),
      Number(event.date)
    );
    return (
      eventDate >=
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      )
    );
  });
  upcomingEvents.sort((a, b) => {
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

  const pastEvents = EventsDetails.filter((event) => {
    const eventDate = new Date(
      Number(event.year),
      new Date(Date.parse(event.month + " 1, 2024")).getMonth(),
      Number(event.date)
    );
    return (
      eventDate <
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      )
    );
  });
  pastEvents.sort((a, b) => {
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
    <div className="home-bg text-white">
      <section className="events mb-8 h-screen max-h-[640px]">
        <div className="backdrop-brightness-[.4] h-full">
          <NavBar />
          <div className="flex flex-col justify-center items-center h-[80%]">
            {/* <div className="flex flex-col flex-1 "> */}
            <h1 className="text-4xl md:text-6xl mb-4 font-[junge] font-bold text-[#0A66C2]">
              Events
            </h1>
            <h2 className="subtitle">Check out our upcoming events</h2>
            {/* </div> */}
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
            {activeTab === "upcoming" && (upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))
            ) : (
              <p className="text-white">No upcoming events available.</p>
            ))}

            {activeTab === "past" &&
              (pastEvents.length > 0 ? (
                pastEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))
              ) : (
                <p className="text-white">No past events available.</p>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
