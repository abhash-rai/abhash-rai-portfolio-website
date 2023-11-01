import React from "react";
import { useStickyBox } from "react-sticky-box";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import ScrollSpy from "react-ui-scrollspy";

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
      <div className="content w-[100vw] py-24 px-[20px] lg:pl-0 lg:pr-10 xl:pl-8 xl:pr-20 lg:w-[55vw]">
        <ScrollSpy
          offsetBottom={20}
          scrollThrottle={100}
          useBoxMethod={true}
          defaultSection="#about"
        >
          <AboutMe paddingTailwindValue="mb-32" />
          <Experience paddingTailwindValue="mb-32" />
          <Projects paddingTailwindValue="mb-32" />
        </ScrollSpy>
      </div>
    </div>
  );
};

export default StickyBoxComponent;
