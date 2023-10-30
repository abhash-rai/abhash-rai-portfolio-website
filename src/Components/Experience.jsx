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

const Experience = () => {
  const { normal_classes, gray_color } = useContext(MainContext);

  return (
    <div className={`${normal_classes} flex flex-col gap-10`}>
      <div className="text-left lg:hidden">EXPERIENCE</div>
      <div className={`${gray_color}`}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="experience_cards flex flex-row gap-5 box-border rounded-xl p-0 lg:p-6 lg:hover:bg-[#1c283c46] lg:hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="w-[30%] text-[14px] text-left">
              {experience.StartDate} — {experience.EndDate}
            </div>
            <div className="w-[70%] flex flex-col gap-4">
              <div className="job_titles text-left font-semi text-white">
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
      </div>
      <a href={MyResume} download className="flex justify-start items-center">
        <button>Download My Resume →</button>
      </a>
    </div>
  );
};

export default Experience;
