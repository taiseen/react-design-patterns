import useThrottle from "./hook/useThrottle";
import { useState, useEffect } from "react";

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  const throttledY = useThrottle(scrollY, 3000);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Throttling:- Scroll Position</h1>

      <p className="borderV1 h-64 px-2 py-1">{throttledY}</p>
    </div>
  );
};

export default ScrollTracker;
