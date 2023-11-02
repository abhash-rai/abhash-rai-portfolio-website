import { useContext } from "react";
import MainContext from "./MainContext";

import calenderIcon from "../Icons/calendar.png";
import PoissonProcessBanner from "../Blogs_banners/poisson.jpg";

const blogs = [
  {
    blogLink:
      "https://medium.com/@abhash-rai/poisson-process-simulation-and-analysis-in-python-e62f69d1fdd0",
    blogPlatform: "Medium",
    blogReadingTime: "7 min read",
    blogBanner: PoissonProcessBanner,
    blogDate: "November 2, 2023",
    blogTitle: "Poisson Process Simulation and Analysis in Python",
    blogDescription:
      "Suppose, a website owner keeps a record of the timestamps of user arrivals. He wants to know when the next visitor is likely to visit his site. So you need a handy tool that can count events (user arrival), but...",
  },
];

const Blogs = ({ paddingTailwindValue }) => {
  const { normal_classes, small_classes, gray_color } = useContext(MainContext);

  return (
    <div
      id="blogs"
      className={`${small_classes} flex flex-col gap-6 lg:gap-5 ${paddingTailwindValue}`}
    >
      <div className="text-left lg:hidden font-bold">BLOGS</div>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`${gray_color} experience_cards flex flex-col sm:flex-row gap-5 lg:gap-8 box-border rounded-none lg:rounded-xl p-6 bg-[#1c283c46] lg:bg-transparent lg:hover:bg-[#1c283c46] lg:hover:shadow-md hover:lg:!scale-105 !transition-all !duration-300 !ease-in-out`}
        >
          <div className="w-full sm:w-[30%] lg:w-[32%] xl:w-[27%] text-[14px] text-left">
            <img
              src={blog.blogBanner}
              alt={blog.blogTitle}
              className="w-full shadow-md border-[#242D3E] border-0 lg:border-2 rounded-md"
            />
          </div>
          <div className="w-full sm:w-[70%] lg:w-[68%] xl:w-[73%] flex flex-col gap-4">
            <div className="flex flex-row gap-3">
              <div>
                <img
                  src={calenderIcon}
                  width={20}
                  heigh={20}
                  alt="calenderIcon"
                />
              </div>
              <div>{blog.blogDate}</div>
              <div
                className={`${small_classes} bg-[#f2f2f23d] text-[#ffffff] font-light px-3 rounded-lg`}
              >
                {blog.blogReadingTime}
              </div>
            </div>
            <div
              className={`${normal_classes} experience_titles text-left text-[#45DBE2] lg:text-white font-[500] !transition-all !duration-300 !ease-in-out`}
            >
              {blog.blogTitle}
            </div>
            <div className="text-left">{blog.blogDescription}</div>
            <div
              className={`${small_classes} p-2 bg-[#45DBE2] text-black shadow-md text-white hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <a
                className="w-full h-full font-[500]"
                href={blog.blogLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read full blog on {blog.blogPlatform} ⭷
              </a>
            </div>
          </div>
        </div>
      ))}
      <a
        href="https://medium.com/@abhash-rai"
        target="_blank"
        rel="noopener noreferrer"
        className={`${normal_classes} flex justify-start items-center p-0 lg:px-6`}
      >
        <button className="hover:text-[#45DBE2] transition-all duration-300 ease-in-out">
          <span>View all blogs</span> →
        </button>
      </a>
    </div>
  );
};

export default Blogs;
