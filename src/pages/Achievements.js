import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const achievements = [
  {
    title: "Top 5 in International Micromouse competition, IIT Bombay",
    details: "Recognized for Best bot design in Cosmoclench, IIT Bombay.",
    participants: "Darshan Prajapati, Mohit, Santosh, Hemant",
  },
  {
    title:
      "ICPC team (Lemon) ranked 40 among all participating teams at Pune-Gwalior region",
    details:
      "Defeated top teams from IIT Kharagpur, Roorkee, Guwahati, Hyderabad, Indore, NIT Calicut, and IIIT Allahabad.",
    participants: "Manish Salunkhe, Akshay Wairagade, Pravin Shankhapal",
  },
  {
    title: "1st Prize in ELCTROBLITZ at IIIT Raipur",
    participants: "Dhananjay, Mohit, Santosh",
  },
  {
    title: "Cleared Stage 1 of E-yantra competition",
    participants: "Divyanshu, Santosh, Shubham, Hemant",
  },
  {
    title:
      "Gold Medal in Inter IIT Tech Meet 11.0 for Cognitive Garage Problem Statement",
    details: "Among 23 IITs, IIT Bhilai's contingent bagged the gold medal.",
    participants:
      "Vaibhav Arora (PS lead), Tushar Bansal, Madhur Jain, Chirag, Kriti Gupta",
  },
  {
    title: "Google Summer of Code Selections",
    details:
      "GSoC is a global mentoring program for open-source contributions. Over the years, many students from IIT Bhilai have been selected.",
    participants: `
      GSoC '23: Prarabdh Shukla, Javed Habib, Shubham Balasaheb Dhaule, Aakash Thatte.
      GSoC '22: Vemuganti Satvik, Ananya Hooda, Madhur Jain.
      GSoC '21: Shashwat Jaiswal, Kumar Shivendu.
      GSoC '19: Anand Panchbhai.`,
  },
  {
    title: "Top 50 in Google Solutions Challenge 2022",
    participants:
      "Team Anton: Prakanshul Saxena, Prachir Agrawal, Harshil Singhal, Harshit Jajodia, Manas Wadhwa, Shaleen Malik",
  },
  {
    title:
      "Winners of Smart India Hackathon - Software Edition (SH1009, Ministry of Rural Development)",
    participants:
      "Prakanshul Saxena (Team lead), Prachir Agrawal, Harshil Singhal, Harshit Jajodia, Manas Wadhwa, Shaleen Malik",
  },
  {
    title: "ICPC Regionals Qualification (2022-23)",
    details:
      "The International Collegiate Programming Contest is the oldest and most prestigious programming contest in the world.",
    participants: "Shashwat Johri, Dakshraj Sadashiv Kashid, Sankalp Acharya",
  },
];

const AchievementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-bg">
      <div className="max-h-[640px] achievements">
        <div className="backdrop-blur-[3px] h-full">
        <NavBar />
        <h1 className="text-2xl sm:text-4xl md:text-5xl h-2/3 ml-4 club-bp:ml-16 flex justify-start items-center font-bold text-cyan-500">
          Achievements in Sci-Tech Council
        </h1>
        </div>
      </div>
      <div className="min-h-screen mt-4">
        <div className="flex flex-col mx-2 mb:mx-8 sm:mx-8 md:mx-16 space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300 text-white"
            >
              <h2 className="text-2xl font-semibold text-[#0A66C2] mb-2">
                {achievement.title}
              </h2>
              {achievement.details && (
                <p className="mb-2">{achievement.details}</p>
              )}
              <p className="font-medium">
                <span className="font-bold text-blue-600">Participants: </span>
                {achievement.participants}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AchievementsPage;
