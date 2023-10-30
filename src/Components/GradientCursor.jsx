import React, { useEffect, useState } from "react";

const GradientCursor = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorSize = 1000; // The size of your cursor element
      const left = e.pageX - cursorSize / 2;
      const top = e.pageY - cursorSize / 2 - window.scrollY;
      setPosition({ left, top });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Use fixed position
        zIndex: -100,
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: "1000px",
        height: "1000px",
        overflow: "hidden", // Apply overflow to the cursor itself
      }}
    >
      <div
        className="glow w-[100%] h-[100%] absolute"
        style={{
          background:
            "radial-gradient(circle, rgb(16,30,64) 0%, rgba(255,255,255,0) 70%)",
        }}
      ></div>
    </div>
  );
};

export default GradientCursor;
