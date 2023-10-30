import React from "react";
import { useStickyBox } from "react-sticky-box";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box w-full h-full flex justify-start flex-col items-center lg:flex-row lg:justify-center lg:items-start">
      <div className="w-[100vw] lg:w-[45vw] lg:h-full">
        <div
          className="sidebar w-full h-full px-[50px] pt-24 pb-0 lg:py-24 lg:px-20 max-w-[500px] lg:max-w-full lg:h-[100vh] lg:sticky"
          ref={ref}
        >
          <Sidebar />
        </div>
      </div>
      <div className="content flex flex-col gap-36 w-[100vw] h-full px-[50px] py-24 lg:pl-6 lg:pr-18 xl:pl-18 xl:pr-20 lg:w-[55vw]">
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
};

export default StickyBoxComponent;
