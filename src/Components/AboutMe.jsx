import { useContext } from "react";
import MainContext from "./MainContext";

const AboutMe = () => {
  const { normal_classes, gray_color, text_hover_classes } =
    useContext(MainContext);
  return (
    <div className={`${normal_classes} font-semibold flex flex-col gap-5`}>
      <div className="text-left lg:hidden">ABOUT</div>
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
          <span className="text-white">
            Bsc (Hons) in Computer and Data Science
          </span>
          . Besides my academic pursuits, I'm actively involved in the data
          community, where I share insights and learn from others on platforms
          like{" "}
          <a
            href="https://www.kaggle.com/abhashrai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes}`}
          >
            Kaggle
          </a>
          ,{" "}
          <a
            href="https://www.datacamp.com/portfolio/abhash-rai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes}`}
          >
            DataCamp
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/abhash-rai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${text_hover_classes}`}
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
