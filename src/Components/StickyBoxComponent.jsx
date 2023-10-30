import React from "react";
import { useStickyBox } from "react-sticky-box";

const StickyBoxComponent = () => {
  const ref = useStickyBox({
    offsetTop: 0,
    offsetBottom: 0,
  });

  return (
    <div className="sticky_box w-full h-full flex flex-col sm:flex-row sm:items-start">
      <div className="w-[100vw] sm:w-[40vw] sm:h-[100vh]">
        <div className="sidebar w-full sm:sticky" ref={ref}>
          Sidebar
        </div>
      </div>
      <div className="w-[100vw] h-full sm:w-[60vw]">Content</div>
    </div>
  );
};

export default StickyBoxComponent;
