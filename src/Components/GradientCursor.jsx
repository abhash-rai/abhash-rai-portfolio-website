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
      style={{
        position: "fixed", // Use fixed position
        zIndex: -100,
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: "800px",
        height: "800px",
        overflow: "hidden", // Apply overflow to the cursor itself
      }}
    >
      <div
        className="glow w-[100%] h-[100%] absolute"
        style={{
          background:
            "radial-gradient(circle, rgb(16,30,64) 5%, rgba(255,255,255,0) 70%)",
        }}
      ></div>
    </div>
  );
};

export default GradientCursor;
