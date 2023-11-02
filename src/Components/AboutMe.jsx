import { useContext } from "react";
import MainContext from "./MainContext";

import portaitPicture from "../Display_picture/portrait.jpg";

const AboutMe = ({ paddingTailwindValue }) => {
  const { normal_classes, gray_color, text_hover_classes } =
    useContext(MainContext);
  return (
    <div
      id="about"
      className={`${normal_classes} font-semibold flex flex-col gap-5 ${paddingTailwindValue} p-0 lg:px-5`}
    >
      <div className="text-left lg:hidden font-[800]">ABOUT</div>
      <div className="">
        <img className="shadow-lg" src={portaitPicture} alt="Portait Picture" />
      </div>
      <div className={`${normal_classes} ${gray_color} flex flex-col gap-5`}>
        <p className="text-left">
          In retrospect, 2021 marked the start of my journey in data science. It
          all started with learning Python. The prospect of machine learning to
          tackle intricate problems resonated deeply with me, spurring my
          enthusiasm even more.
        </p>

        <p className="text-left">
          These days, I spend my time researching and working on robotics and
          autonomous systems on my campus, where I'm pursuing my undergraduate{" "}
          <span className="text-white font-[500]">
            Bsc (Hons) in Computer and Data Science
          </span>
          . Besides my academic pursuits, I'm actively involved in the data
          community, where I share insights and learn from others on platforms
          like{" "}
          <a
            href="https://www.kaggle.com/abhashrai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes} font-[500]`}
          >
            Kaggle
          </a>
          ,{" "}
          <a
            href="https://www.datacamp.com/portfolio/abhash-rai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes} font-[500]`}
          >
            DataCamp
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/abhash-rai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes} font-[500]`}
          >
            LinkedIn
          </a>
          .
        </p>

        <p className="text-left">
          When I'm not on a computer, you'll find me strumming tunes on my
          guitar, belting out songs, or embarking on invigorating hikes.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
