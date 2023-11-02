import { useContext } from "react";
import MainContext from "./MainContext";

const awards = [
  {
    link: "",
    title: "1st Runner Up - 2023 Ideathon",
    issuedBy: "Sunway College Kathmandu",
    issueDate: "Oct 2023",
    description:
      "Received 1st runner-up award at the 2023 Ideathon, 'Empowering Nepal's Green Revolution: AI for Sustainable Agriculture' hosted by Sunway College Kathmandu. My team presented a data-driven and machine learning-based consultancy service that involves building a model which takes in factors such as nutrient levels, pH, organic matter content, texture, etc and predicts best suited crops for a given soil sample.",
  },
  {
    link: "https://drive.google.com/file/d/1Gsa2Gy_-Pdt3WKq-UT0GByO0Cfagna9c/view?usp=sharing",
    title: "Young Scientist Award",
    issuedBy: "Brainycube Research Organization",
    issueDate: "Jul 2023",
    description:
      "Received Young Scientist Award at the 6th Nepal Youth Science Summit (NYSS) 2023, held at Mid-Valley International College, Kathmandu for presenting our project 'Emergency Vechicle Management System'",
  },
  {
    link: "https://drive.google.com/file/d/1Gsa2Gy_-Pdt3WKq-UT0GByO0Cfagna9c/view?usp=sharing",
    title: "Engaging in Extra Curriculum Activities",
    issuedBy: "BCU Graduate+",
    issueDate: "Apr 2023",
    description:
      "Received bronze certificate from Birmingham City University for actively participating in various activities. These included forming innovation teams, enrolling in STEM-Up skills training, attending Welcome Week, engaging in personal tutor meetings, seeking guidance from career professionals, registering for IBM Academic Learning, creating a LinkedIn profile, adapting my profile based on feedback, and reflecting on STEAM for Employability and IBM Enterprise, Design & Thinking activities.",
  },
];

const Awards = () => {
  const { normal_classes, small_classes, gray_color } = useContext(MainContext);

  return (
    <div
      id="awards"
      className={`${small_classes} flex flex-col gap-6 lg:gap-5`}
    >
      <div className="text-left lg:hidden font-bold">EXPERIENCE</div>
      {awards.map((award, index) => (
        <a
          href={award.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className={`${gray_color} awards_cards flex flex-col sm:flex-row gap-5 lg:gap-8 box-border rounded-none lg:rounded-xl p-6 bg-[#1c283c46] lg:bg-transparent lg:hover:bg-[#1c283c46] lg:hover:shadow-md hover:lg:!scale-105 !transition-all !duration-300 !ease-in-out`}
        >
          <div className="w-full sm:w-[30%] lg:w-[32%] xl:w-[27%] text-left text-[13px]">
            {award.issueDate}
          </div>
          <div className="w-full sm:w-[70%] lg:w-[68%] xl:w-[73%] flex flex-col gap-4">
            <div
              className={`${normal_classes} award_titles text-left text-[#45DBE2] lg:text-white font-[500] !transition-all !duration-300 !ease-in-out`}
            >
              {award.title}
            </div>
            <div className="text-left">→ Issued by {award.issuedBy}</div>
            <div className="text-left">{award.description}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Awards;
