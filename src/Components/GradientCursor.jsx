import React, { useEffect, useState } from "react";

const GradientCursor = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        left: e.pageX - 400, // 800px / 2
        top: e.pageY - 400, // 800px / 2
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      className="glow z-[-100]"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        height: "800px",
        width: "800px",
        background:
          "radial-gradient(circle, rgb(16,30,64) 5%,  rgba(255,255,255,0) 70%)",
        position: "absolute",
      }}
    ></div>
  );
};

export default GradientCursor;
