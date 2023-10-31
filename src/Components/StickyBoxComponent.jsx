import React from "react";
import { useStickyBox } from "react-sticky-box";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box w-full flex justify-start flex-col items-center lg:flex-row lg:justify-center lg:items-start">
      <div className="w-[100vw] lg:w-[45vw] !relative lg:!sticky" ref={ref}>
        <Sidebar />
      </div>
      <div className="content flex flex-col gap-36 w-[100vw] px-[50px] py-24 lg:pl-6 lg:pr-18 xl:pl-18 xl:pr-20 lg:w-[55vw]">
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default StickyBoxComponent;
