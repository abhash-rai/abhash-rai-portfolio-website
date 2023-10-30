import React, { useContext } from "react";
import MainContext from "./MainContext";

import DatacampLogo from "../logos/datacamp.png";
import GithubLogo from "../logos/github.png";
import KaggleLogo from "../logos/kaggle.png";
import LinkedinLogo from "../logos/linkedin.png";

const logos = [
  {
    image: LinkedinLogo,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/abhash-rai/",
  },
  { image: GithubLogo, alt: "GitHub", link: "https://github.com/abhash-rai/" },
  {
    image: KaggleLogo,
    alt: "Kaggle",
    link: "https://www.kaggle.com/abhashrai/",
  },
  {
    image: DatacampLogo,
    alt: "DataCamp",
    link: "https://www.datacamp.com/portfolio/abhash-rai/",
  },
];

const name = "Abhash Rai";
const job_title = "Research Intern at Sunway College";
const short_job_description =
  "I turn data into actionable insights using machine learning and analytical tools.";

const Sidebar = () => {
  const { main_title_classes, headings_classes, normal_classes, gray_color } =
    useContext(MainContext);

  return (
    <div className=" w-full h-full flex flex-col gap-12">
      <div className="flex-1 flex flex-col gap-3">
        <div
          className={`flex-1 flex justify-start items-center text-left ${main_title_classes}`}
        >
          {name}
        </div>
        <div
          className={`flex-1 flex justify-start items-center text-left ${headings_classes}`}
        >
          {job_title}
        </div>
        <div
          className={`flex-1 flex justify-start items-center text-left ${normal_classes} ${gray_color}`}
        >
          {short_job_description}
        </div>
      </div>
      <div className="h-[35%] hidden lg:flex"></div>
      <div className={`h-[15%] flex flex-row items-center gap-3 opacity-60`}>
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key={index}
              src={logo.image}
              width={30}
              height={30}
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
