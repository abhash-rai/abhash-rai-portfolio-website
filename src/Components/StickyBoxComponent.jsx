import React from "react";
import { useStickyBox } from "react-sticky-box";
import Sidebar from "./Sidebar";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box w-full h-full flex flex-col items-center lg:flex-row lg:items-start">
      <div className="w-[100vw] lg:w-[40vw] lg:h-full">
        <div className="sidebar w-full h-full lg:h-[100vh] lg:sticky" ref={ref}>
          <Sidebar />
        </div>
      </div>
      <div className="w-[100vw] h-full lg:w-[60vw]">Content</div>
    </div>
  );
};

export default StickyBoxComponent;
