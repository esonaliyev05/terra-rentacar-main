import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const totalDots = 12;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalDots);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed z-[1000] bg-black flex items-center justify-center w-full h-[100%] top-0">
      <div className="pl  relative w-full h-full flex items-center justify-center">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`pl__dot  absolute w-8 h-8 rounded-full transition-all duration-300 ${
              i === activeIndex ||
              (i + 1) % totalDots === activeIndex ||
              (i + 2) % totalDots === activeIndex
                ? "bg-gray-400 scale-125"
                : "bg-gray-700 opacity-50"
            }`}
            style={{
              transform: `rotate(${
                (i * 360) / totalDots
              }deg) translateY(-90px)`,
            }}
          />
        ))}
        <div className="pl__text absolute flex items-center p-[40px] justify-center">
          <img
            className="logoLoading w-30"
            src="/header/logo-header-1.png"
            alt="TERRA rent a car"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
