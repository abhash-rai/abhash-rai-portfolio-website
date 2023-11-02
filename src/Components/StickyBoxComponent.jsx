import React from "react";
import { useStickyBox } from "react-sticky-box";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import ScrollSpy from "react-ui-scrollspy";
import Blogs from "./Blogs";
import Awards from "./Awards";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box w-full flex justify-start flex-col items-center lg:flex-row lg:justify-center lg:items-start">
      <div className="w-[100vw] lg:w-[40vw] !relative lg:!sticky" ref={ref}>
        <Sidebar />
      </div>
      <div className="content w-[100vw] py-24 px-[20px] md:px-28 lg:pl-20 lg:pr-10 xl:pl-28 xl:pr-20 lg:w-[60vw]">
        <ScrollSpy
          offsetBottom={20}
          scrollThrottle={100}
          useBoxMethod={true}
          defaultSection="#about"
        >
          <AboutMe paddingTailwindValue="pt-10 lg:pt-0 mb-40" />
          <Blogs paddingTailwindValue="mb-40" />
          <Experience paddingTailwindValue="mb-40" />
          <Projects paddingTailwindValue="mb-40" />
          <Awards />
        </ScrollSpy>
      </div>
    </div>
  );
};

export default StickyBoxComponent;
