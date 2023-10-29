import React from "react";
import { useStickyBox } from "react-sticky-box";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box z-[1] w-full h-full flex flex-col sm:flex-row sm:items-start">
      <div className="w-full sm:w-[40vw] sm:h-full">
        <div className="sidebar w-full relative sm:sticky" ref={ref}>
          Sidebar
        </div>
      </div>
      <div className="w-full h-full sm:w-[60vw] ">Content</div>
    </div>
  );
};

export default StickyBoxComponent;
