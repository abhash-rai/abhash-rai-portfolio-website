import { useContext } from "react";
import MainContext from "./MainContext";
import MyResume from "../Resume/AbhashRai.pdf";

const experiences = [
  {
    StartDate: "AUG 2023",
    EndDate: "PRESENT",
    JobTitle: "Research Intern",
    JobCompany: "Sunway College Kathmandu",
    JobDescription:
      "Engaged in research projects, contributing to the development of a computer vision-based attendance system, a functional robot, a pad vending machine, and smart doors with RFID technology. Demonstrated versatility in a comprehensive skill set, supporting technological innovation and successful project execution.",
    TechnologiesUsed: [
      "Python",
      "Computer Vision",
      "Raspberry Pi",
      "Arduino",
      "MySql",
      "Tensorflow",
      "OpenCV",
    ],
  },
];

const Experience = ({ paddingTailwindValue }) => {
  const { normal_classes, small_classes, gray_color } = useContext(MainContext);

  return (
    <div
      id="experience"
      className={`${small_classes} flex flex-col gap-6 lg:gap-5 ${paddingTailwindValue}`}
    >
      <div className="text-left lg:hidden font-bold">EXPERIENCE</div>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`${gray_color} experience_cards flex flex-col sm:flex-row gap-5 lg:gap-8 box-border rounded-none lg:rounded-xl p-6 bg-[#424b5e0e] lg:bg-transparent lg:hover:bg-[#424b5e0e] lg:hover:shadow-md hover:lg:!scale-105 !transition-all !duration-300 !ease-in-out`}
        >
          <div className="w-full sm:w-[30%] lg:w-[32%] xl:w-[27%] text-left text-[13px]">
            {experience.StartDate} — {experience.EndDate}
          </div>
          <div className="w-full sm:w-[70%] lg:w-[68%] xl:w-[73%] flex flex-col gap-4">
            <div
              className={`${normal_classes} experience_titles text-left text-[#45DBE2] lg:text-white font-[500] !transition-all !duration-300 !ease-in-out`}
            >
              {experience.JobTitle} • {experience.JobCompany}
            </div>
            <div className="text-left">{experience.JobDescription}</div>
            <div className="text-left flex flex-wrap gap-2">
              {experience.TechnologiesUsed.map((Tech, index) => (
                <span
                  key={index}
                  className="bg-[#122C3E] text-[#45DBE2] py-1 px-2 rounded-xl"
                >
                  {Tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <a
        href={MyResume}
        download
        className={`${normal_classes} flex justify-start items-center p-0 lg:px-6`}
      >
        <button className="hover:text-[#45DBE2] transition-all duration-300 ease-in-out">
          <span>Download My Resume</span> →
        </button>
      </a>
    </div>
  );
};

export default Experience;
