import React, { useContext } from "react";
import MainContext from "./MainContext";

import DatacampLogo from "../logos/datacamp.png";
import GithubLogo from "../logos/github.png";
import KaggleLogo from "../logos/kaggle.png";
import LinkedinLogo from "../logos/linkedin.png";

const pageSections = [
  { sectionName: "ABOUT", sectionId: "about" },
  { sectionName: "BLOGS", sectionId: "blogs" },
  { sectionName: "EXPERIENCE", sectionId: "experience" },
  { sectionName: "PROJECTS", sectionId: "projects" },
];

const logos = [
  {
    image: LinkedinLogo,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/abhash-rai/",
    aosDelay: 450,
  },
  {
    image: GithubLogo,
    alt: "GitHub",
    link: "https://github.com/abhash-rai/",
    aosDelay: 550,
  },
  {
    image: KaggleLogo,
    alt: "Kaggle",
    link: "https://www.kaggle.com/abhashrai/",
    aosDelay: 650,
  },
  {
    image: DatacampLogo,
    alt: "DataCamp",
    link: "https://www.datacamp.com/portfolio/abhash-rai/",
    aosDelay: 750,
  },
];

const name = "Abhash Rai";
const job_title = "Research Intern at Sunway College";
const short_job_description =
  "I turn data into actionable insights using machine learning and analytical tools.";

const Sidebar = () => {
  const {
    main_title_classes,
    headings_classes,
    normal_classes,
    small_classes,
    gray_color,
  } = useContext(MainContext);

  return (
    <div className="sidebar w-full h-full px-[20px] pt-24 pb-0 lg:py-24 lg:px-18 xl:px-20 max-w-[500px] lg:max-w-full lg:h-[100vh] lg:sticky flex flex-col gap-12">
      <div className="flex-1 flex flex-col gap-3">
        <div
          className={`flex-1 flex justify-start items-center text-left ${main_title_classes}`}
        >
          {name}
        </div>
        <div
          className={`flex-1 flex justify-start items-center text-left ${headings_classes} font-[500]`}
        >
          {job_title}
        </div>
        <div
          className={`flex-1 flex justify-start items-center text-left ${normal_classes} ${gray_color}`}
        >
          {short_job_description}
        </div>
      </div>
      <div
        className={`h-[35%] hidden lg:flex flex-col gap-3 items-start justify-center ${small_classes} ${gray_color}`}
      >
        {pageSections.map((section, index) => (
          <a
            key={index}
            data-to-scrollspy-id={section.sectionId}
            href={`#${section.sectionId}`}
            className="sidebar_section_heading flex flex-row items-center text-[13px] font-semibold transition-all duration-300 ease-in-out"
          >
            <span className="sidebar_section_heading_line flex w-[30px] border-b-[1px] border-[#8c9dc0] mr-4 transition-all duration-300 ease-in-out"></span>{" "}
            {section.sectionName}
          </a>
        ))}
      </div>
      <div className={`h-[15%] flex flex-row items-center gap-3 opacity-60`}>
        {logos.map((logo, index) => (
          <a
            className="w-[30px] h-[30px]"
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key={index}
              src={logo.image}
              className="w-full h-full hover:scale-125 transition-all duration-300 ease-in-out"
              alt={logo.alt}
              title={logo.alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
